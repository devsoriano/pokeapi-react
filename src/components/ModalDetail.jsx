/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Modal from "react-modal";
import useCatalogs from "../hooks/useCatalogs";

const ModalDetail = ({ selectedPokemon, closeModal }) => {
  const { abilities } = useCatalogs();
  const [matchedAbilities, setMatchedAbilities] = useState([]);
  const [visibleDetails, setVisibleDetails] = useState({});

  useEffect(() => {
    if (selectedPokemon) {
      // Obtenemos los IDs de las habilidades del Pokémon seleccionado
      const pokemonAbilitiesIds = selectedPokemon.abilities;

      // Filtramos las habilidades que coinciden con los IDs del Pokémon
      const matched = abilities.filter((ability) =>
        pokemonAbilitiesIds.includes(ability.id)
      );

      // Actualizamos el estado con las habilidades coincidentes
      setMatchedAbilities(matched);

      // Inicializamos el estado de visibilidad para cada habilidad
      const initialVisibility = {};
      matched.forEach((ability) => {
        initialVisibility[ability.name] = false;
      });
      setVisibleDetails(initialVisibility);
    }
  }, [abilities, selectedPokemon]);

  const toggleDetails = (abilityName) => {
    setVisibleDetails((prev) => ({
      ...prev,
      [abilityName]: !prev[abilityName],
    }));
  };

  return (
    <Modal
      isOpen={!!selectedPokemon}
      onRequestClose={closeModal}
      contentLabel="Pokemon Details"
      className="bg-gradient-to-br from-yellow-100 to-white p-6 rounded-2xl shadow-xl max-w-lg mx-auto mt-20 border-4 border-yellow-500 relative"
      overlayClassName="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center"
      ariaHideApp={false}
    >
      {selectedPokemon && (
        <div>
          {/* Botón de cerrar en la parte superior derecha */}
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-md hover:bg-red-600"
            aria-label="Close"
          >
            &times;
          </button>
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
              <strong>Abilities:</strong>
            </p>
            <div className="space-y-4">
              {matchedAbilities.map((ability) => (
                <div
                  key={ability.name}
                  className={`p-4 border border-gray-300 rounded-lg shadow-sm transition-all duration-300 ${
                    visibleDetails[ability.name] ? "bg-gray-100" : "bg-white"
                  }`}
                  style={{ maxWidth: "100%" }}
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
          <div
            className="flex flex-wrap justify-center gap-4 mt-6"
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
