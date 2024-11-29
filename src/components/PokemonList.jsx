import PokemonCard from "./PokeCard";
import ModalDetail from "./ModalDetail";
import { Loader } from "./Loader";
import { useLoadPokemons } from "../hooks/useLoadPokemons";

const PokemonList = () => {
  const {
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
  } = useLoadPokemons();

  return (
    <>
      {isLoading && <Loader />}
      <>
        {/* Barra de búsqueda */}
        <div className="flex justify-center mt-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search pokemon by name"
            className="w-full sm:w-1/2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
          />
        </div>

        {/* Lista de Pokémon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-2 bg-gradient-to-b from-white to-gray-100 p-4 rounded-lg shadow-md">
          {filteredPokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              pokemon={pokemon}
              onClick={() => openModal(pokemon)}
            />
          ))}
        </div>

        {/* Paginación */}
        <div className="flex justify-between items-center my-8">
          <button
            onClick={handlePrevPage}
            className={`bg-red-500 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none`}
            disabled={page === 1}
          >
            Previous
          </button>
          <p className="text-center text-sm text-gray-700 font-medium">
            Page {page} of {totalPages}
          </p>
          <button
            onClick={handleNextPage}
            className={`bg-red-500 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none`}
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
      </>
    </>
  );
};

export default PokemonList;
