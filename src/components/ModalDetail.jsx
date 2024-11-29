/* eslint-disable react/prop-types */

import Modal from "react-modal";
import { useSpecificInfo } from "../hooks/useSpecificInfo";

const ModalDetail = ({ selectedPokemon, closeModal }) => {
  const { matchedAbilities, visibleDetails, toggleDetails } =
    useSpecificInfo(selectedPokemon);

  return (
    <Modal
      isOpen={!!selectedPokemon}
      onRequestClose={closeModal}
      contentLabel="Pokemon Details"
      className="bg-gradient-to-br from-gray-100 to-white p-6 rounded-2xl shadow-xl max-w-xl w-full max-h-[80vh] mx-4 mt-20 overflow-y-auto border border-gray-300 relative"
      overlayClassName="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center backdrop-blur-sm"
      ariaHideApp={false}
    >
      {selectedPokemon && (
        <div>
          {/* Botón de cerrar */}
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-md hover:bg-red-600"
            aria-label="Close"
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 capitalize">
            {selectedPokemon.name}
          </h2>
          <div className="text-gray-700 space-y-2">
            <p>
              <strong>Types:</strong> {selectedPokemon.types}
            </p>
            <p>
              <strong>Weight:</strong> {selectedPokemon.weight}
            </p>
            <p>
              <strong>Abilities:</strong>
            </p>
            <div className="space-y-4">
              {matchedAbilities.map((ability) => (
                <div
                  key={ability.name}
                  className={`p-4 border border-gray-300 rounded-lg shadow-sm transition-all duration-300 ${
                    visibleDetails[ability.name] ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold capitalize text-gray-700">
                      {ability.name}
                    </span>
                    <button
                      onClick={() => toggleDetails(ability.name)}
                      className="text-blue-500 hover:text-blue-600"
                    >
                      {visibleDetails[ability.name]
                        ? "Ocultar info"
                        : "Ver info"}
                    </button>
                  </div>
                  {visibleDetails[ability.name] && (
                    <div className="mt-2 text-gray-600">
                      <p>
                        <strong>Descripción:</strong>{" "}
                        {ability.description || "N/A"}
                      </p>
                      <p>
                        <strong>Efecto breve:</strong>{" "}
                        {ability.short_effect || "N/A"}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Contenedor de imágenes */}
          <div
            className="flex flex-wrap justify-around gap-4 mt-6"
            style={{ rowGap: "1rem" }}
          >
            <img
              src={selectedPokemon.image_front}
              alt={`${selectedPokemon.name} front`}
              className="w-32 h-32 sm:w-40 sm:h-40 object-contain rounded-full shadow-md"
            />
            <img
              src={selectedPokemon.image_back}
              alt={`${selectedPokemon.name} back`}
              className="w-32 h-32 sm:w-40 sm:h-40 object-contain rounded-full shadow-md"
            />
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ModalDetail;
