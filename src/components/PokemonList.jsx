import { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import apiClient from "../api/api";
import PokemonCard from "./PokeCard";
import ModalDetail from "./ModalDetail";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await apiClient.get(`/get-pokemons/?page=${page}`);
        setPokemons(response.data.results);
        setFilteredPokemons(response.data.results); // Inicializamos con todos
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
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
    <div className="max-w-7xl mx-auto px-4">
      {/* Encabezado */}
      <div className="bg-gradient-to-r from-yellow-300 via-red-200 to-yellow-300 p-4 rounded-lg shadow-lg">
        <h1
          className="text-5xl font-bold text-red-600 text-center"
          style={{ fontFamily: "'Bangers', cursive" }}
        >
          Pokémon Collection
        </h1>
      </div>
      {/* Barra de búsqueda */}
      <div className="flex justify-center mt-8">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Busca pokemón por nombre"
          className="w-full sm:w-1/2 px-4 py-2 rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          style={{
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            padding: "8px 16px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease, border-color 0.3s ease",
          }}
        />
      </div>
      {/* Lista de Pokémon */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
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
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600"
          disabled={page === 1}
        >
          Previous
        </button>
        <p className="text-center text-sm text-gray-300 font-medium">
          Página {page} de {totalPages}
        </p>
        <button
          onClick={handleNextPage}
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600"
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
      {/* Modal */}
      <ModalDetail selectedPokemon={selectedPokemon} closeModal={closeModal} />
    </div>
  );
};

export default PokemonList;
