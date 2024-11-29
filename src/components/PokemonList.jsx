import { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import apiClient from "../api/api";
import PokemonCard from "./PokeCard";
import ModalDetail from "./ModalDetail";
import { Loader } from "./Loader";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await apiClient.get(`/pokemons/?page=${page}`);
        setPokemons(response.data.results);
        setFilteredPokemons(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPokemons();
  }, [page]);

  const debouncedSearch = useCallback(
    debounce((value) => {
      if (value === "") {
        setFilteredPokemons(pokemons);
      } else {
        setFilteredPokemons(
          pokemons.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(value.toLowerCase())
          )
        );
      }
    }, 300),
    [pokemons]
  );

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  const handlePrevPage = () => setPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setPage((prev) => Math.min(prev + 1, totalPages));

  const openModal = (pokemon) => setSelectedPokemon(pokemon);
  const closeModal = () => setSelectedPokemon(null);

  return (
    <>
      {isLoading && <Loader />}
      <div className="max-w-7xl mx-auto px-4">
        {/* Encabezado */}
        <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 p-6 rounded-lg shadow-lg mb-6">
          <h1
            className="text-6xl font-bold text-gray-700 text-center drop-shadow-md"
            style={{ fontFamily: "'Bangers', cursive" }}
          >
            Pokédex Adventure
          </h1>
        </div>

        {/* Barra de búsqueda */}
        <div className="flex justify-center mt-8">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search pokemon by name"
            className="w-full sm:w-1/2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
          />
        </div>

        {/* Lista de Pokémon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8 bg-gradient-to-b from-white to-gray-100 p-6 rounded-lg shadow-md">
          {filteredPokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              pokemon={pokemon}
              onClick={() => openModal(pokemon)}
            />
          ))}
        </div>

        {/* Paginación */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handlePrevPage}
            className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={page === 1}
          >
            Previous
          </button>
          <p className="text-center text-sm text-gray-700 font-medium">
            Page {page} of {totalPages}
          </p>
          <button
            onClick={handleNextPage}
            className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>

        {/* Modal */}
        <ModalDetail
          selectedPokemon={selectedPokemon}
          closeModal={closeModal}
        />
      </div>
    </>
  );
};

export default PokemonList;
