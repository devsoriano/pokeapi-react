/* eslint-disable react/prop-types */
import Modal from "react-modal";

const ModalDetail = ({ selectedPokemon, closeModal }) => {
  return (
    <Modal
      isOpen={!!selectedPokemon}
      onRequestClose={closeModal}
      contentLabel="Pokemon Details"
      className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-20 border-4 border-yellow-500"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      ariaHideApp={false}
    >
      {selectedPokemon && (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center text-yellow-500 capitalize">
            {selectedPokemon.name}
          </h2>
          <p className="text-gray-700 mb-2">
            <strong>Types:</strong> {selectedPokemon.types}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Weight:</strong> {selectedPokemon.weight}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Abilities:</strong> {selectedPokemon.abilities}
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <img
              src={selectedPokemon.image_front}
              alt={`${selectedPokemon.name} front`}
              className="w-24 h-24 object-contain"
            />
            <img
              src={selectedPokemon.image_back}
              alt={`${selectedPokemon.name} back`}
              className="w-24 h-24 object-contain"
            />
          </div>
          <button
            onClick={closeModal}
            className="mt-6 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 block mx-auto"
          >
            Cerrar
          </button>
        </div>
      )}
    </Modal>
  );
};

export default ModalDetail;
