import { useEffect, useState } from "react";
import useCatalogs from "./useCatalogs";

export const useSpecificInfo = (selectedPokemon) => {
  const { abilities } = useCatalogs();
  const [matchedAbilities, setMatchedAbilities] = useState([]);
  const [visibleDetails, setVisibleDetails] = useState({});

  useEffect(() => {
    if (selectedPokemon) {
      const pokemonAbilitiesIds = selectedPokemon.abilities;

      const matched = abilities.filter((ability) =>
        pokemonAbilitiesIds.includes(ability.id)
      );

      setMatchedAbilities(matched);

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

  return { matchedAbilities, visibleDetails, toggleDetails };
};
