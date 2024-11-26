/* eslint-disable react/prop-types */
const PokemonCard = ({ pokemon, onClick }) => {
  return (
    <div
      className="bg-gradient-to-br from-pink-100 via-pink-200 to-red-100 hover:from-red-200 hover:via-red-300 hover:to-pink-200 rounded-lg p-4 shadow-md cursor-pointer transform hover:scale-105 transition-transform duration-200"
      onClick={onClick}
    >
      <img
        src={pokemon.image_front}
        alt={pokemon.name}
        className="w-full h-32 object-contain rounded-md shadow-sm"
      />
      <h3 className="text-center font-bold text-lg mt-2 capitalize text-yellow-600">
        {pokemon.name}
      </h3>
      <p className="text-center text-sm text-gray-800 font-medium">
        {pokemon.types}
      </p>
    </div>
  );
};

export default PokemonCard;
