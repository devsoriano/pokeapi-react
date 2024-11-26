/* eslint-disable react/prop-types */
import Modal from "react-modal";

const ModalDetail = ({ selectedPokemon, closeModal }) => {
  return (
    <Modal
      isOpen={!!selectedPokemon}
      onRequestClose={closeModal}
      contentLabel="Pokemon Details"
      className="bg-gradient-to-br from-yellow-100 to-white p-6 rounded-2xl shadow-xl max-w-lg mx-auto mt-20 border-4 border-yellow-500"
      overlayClassName="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center"
      ariaHideApp={false}
    >
      {selectedPokemon && (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center text-yellow-600 capitalize">
            {selectedPokemon.name}
          </h2>
          <div className="text-gray-900 space-y-2">
            <p>
              <strong>Types:</strong> {selectedPokemon.types}
            </p>
            <p>
              <strong>Weight:</strong> {selectedPokemon.weight}
            </p>
            <p>
              <strong>Abilities:</strong> {selectedPokemon.abilities}
            </p>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <img
              src={selectedPokemon.image_front}
              alt={`${selectedPokemon.name} front`}
              className="w-24 h-24 object-contain rounded-full shadow-md"
            />
            <img
              src={selectedPokemon.image_back}
              alt={`${selectedPokemon.name} back`}
              className="w-24 h-24 object-contain rounded-full shadow-md"
            />
          </div>
          <button
            onClick={closeModal}
            className="mt-6 bg-red-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-600 transition-transform transform hover:scale-105 block mx-auto"
          >
            Cerrar
          </button>
        </div>
      )}
    </Modal>
  );
};

export default ModalDetail;
