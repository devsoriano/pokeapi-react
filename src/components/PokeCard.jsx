/* eslint-disable react/prop-types */
const PokemonCard = ({ pokemon, onClick }) => {
  // Colores personalizados para tipos de Pokémon
  const typeColors = {
    grass: "bg-green-200 text-green-800",
    poison: "bg-purple-200 text-purple-800",
    fire: "bg-red-200 text-red-800",
    water: "bg-blue-200 text-blue-800",
    bug: "bg-yellow-200 text-yellow-800",
    normal: "bg-gray-200 text-gray-800",
    flying: "bg-indigo-200 text-indigo-800",
  };

  return (
    <div
      className="bg-gradient-to-br from-gray-100 via-gray-200 to-white hover:from-gray-200 hover:via-gray-300 hover:to-white rounded-lg p-4 shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-200"
      onClick={onClick}
    >
      {/* Imagen del Pokémon */}
      <img
        src={pokemon.image_front}
        alt={pokemon.name}
        className="w-full h-32 object-contain rounded-md shadow-sm"
      />

      {/* Nombre del Pokémon */}
      <h3 className="text-center font-bold text-lg mt-2 capitalize text-gray-800">
        {pokemon.name}
      </h3>

      {/* Tipos del Pokémon */}
      <div className="text-center mt-2">
        {pokemon.types.split(",").map((type) => (
          <span
            key={type}
            className={`inline-block text-xs px-2 py-1 rounded-full mr-1 ${
              typeColors[type] || "bg-gray-300 text-gray-700"
            }`}
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
