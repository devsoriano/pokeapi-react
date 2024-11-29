import { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import apiClient from "../api/api";

export const useLoadPokemons = () => {
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

  return {
    isLoading,
    searchTerm,
    handleSearch,
    filteredPokemons,
    openModal,
    handlePrevPage,
    page,
    totalPages,
    handleNextPage,
    selectedPokemon,
    closeModal,
  };
};
