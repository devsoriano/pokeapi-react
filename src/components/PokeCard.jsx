/* eslint-disable react/prop-types */
const PokemonCard = ({ pokemon }) => {
  return (
    <div className="bg-red-100 hover:bg-red-200 rounded-lg p-4 shadow-md flex flex-col items-center">
      <img
        src={pokemon.image_front}
        alt={pokemon.name}
        className="w-24 h-24 object-contain rounded-md"
      />
      <h3 className="text-center font-bold text-lg mt-2 capitalize">
        {pokemon.name}
      </h3>
      <p className="text-center text-sm text-gray-700">{pokemon.types}</p>
    </div>
  );
};

export default PokemonCard;
