/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import apiClient from "../api/api";

const CatalogsContext = createContext();

const CatalogsProvider = ({ children }) => {
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    const fetchAbilities = async () => {
      try {
        // Verificar si ya existen datos en localStorage
        const storedAbilities = localStorage.getItem("abilities");
        if (storedAbilities) {
          setAbilities(JSON.parse(storedAbilities)); // Si existen, usarlos
        } else {
          // Si no existen, llamar al servicio
          const response = await apiClient.get(`/abilities`);
          setAbilities(response);

          // Guardar los datos en localStorage
          localStorage.setItem("abilities", JSON.stringify(response));
        }
      } catch (error) {
        console.error("Error fetching Pokémon abilities:", error);
      }
    };

    fetchAbilities();
  }, []);

  return (
    <CatalogsContext.Provider value={{ abilities }}>
      {children}
    </CatalogsContext.Provider>
  );
};

export { CatalogsProvider };
export default CatalogsContext;
