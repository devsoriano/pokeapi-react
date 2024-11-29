import { Layout } from "../../components/Layout";

export const NotFound = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-gray-100 to-gray-200">
        {/* Imagen de un Pokémon triste o representativo */}
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
          alt="Ditto Not Found"
          className="w-40 h-40"
        />
        {/* Mensaje principal */}
        <h1 className="text-4xl font-bold text-gray-700 mt-4">
          Oops! Page Not Found
        </h1>
        {/* Descripción */}
        <p className="text-lg text-gray-600 mt-2">
          Looks like you've wandered off the PokéPath! This page doesn't exist.
        </p>
        {/* Botón para regresar al inicio */}
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-all duration-300"
        >
          Go Back to Pokédex
        </button>
      </div>
    </Layout>
  );
};
