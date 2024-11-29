/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import apiClient from "../api/api";

const CatalogsContext = createContext();

const CatalogsProvider = ({ children }) => {
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await apiClient.get(`/abilities`);
        console.log({ response });
        setAbilities(response.data);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };
    fetchPokemons();
  }, []);

  return (
    <CatalogsContext.Provider value={{ abilities }}>
      {children}
    </CatalogsContext.Provider>
  );
};

export { CatalogsProvider };

export default CatalogsContext;
