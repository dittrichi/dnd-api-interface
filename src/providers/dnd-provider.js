import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";

export const DnDContext = createContext({
  loading: false,
  race: {},
  proficiencies: [],
  traits: [],
  allRaces: [],
});

const DnDProvider = ({ children }) => {
  const [dndState, setDndState] = useState({
    hasRace: false,
    loading: false,
    race: {
      index: undefined,
      name: undefined,
      speed: undefined,
      ability_bonuses: undefined,
      alignment: undefined,
      age: undefined,
      size: undefined,
      size_description: undefined,
      starting_proficiencies: undefined,
      languages: undefined,
      language_desc: undefined,
      traits: undefined,
      subraces: undefined,
      url: undefined,
    },
    proficiencies: [],
    traits: [],
  });

  const getRace = (race) => {
    setDndState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));

    api
      .get(`races/${race}`)
      .then(({ data }) => {
        setDndState((prevState) => ({
          ...prevState,
          hasRace: true,
          race: {
            index: data.index,
            name: data.name,
            speed: data.speed,
            ability_bonuses: [],
            alignment: data.alignment,
            age: data.age,
            size: data.size,
            size_description: data.size_description,
            starting_proficiencies: [],
            languages: [],
            language_desc: data.language_desc,
            traits: [],
            subraces: [],
            url: data.url,
          },
        }));
      })
      .finally(() => {
        setDndState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
      });
  };

  const getRaceProficiencies = (race) => {
    api.get(`races/${race}/proficiencies`).then(({ data }) => {
      console.log("data: " + JSON.stringify(data));
      setDndState((prevState) => ({
        ...prevState,
        proficiencies: data.results,
      }));
    });
  };

  const getRaceTraits = (race) => {
    api.get(`races/${race}/traits`).then(({ data }) => {
      console.log("data: " + JSON.stringify(data));
      setDndState((prevState) => ({
        ...prevState,
        traits: data.results,
      }));
    });
  };

  const getAllRaces = () => {
    api.get(`races`).then(({ data }) =>{
      console.log("data "+ JSON.stringify(data));
      setDndState((prevState) =>({
        ...prevState,
        allRaces: data,
      }));
    });
  };

  const contextValue = {
    dndState,
    getRace: useCallback((race) => getRace(race), []),
    getRaceProficiencies: useCallback((race) => getRaceProficiencies(race), []),
    getRaceTraits: useCallback((race) => getRaceTraits(race), []),
    getAllRaces: useCallback(() => getAllRaces(), []),
  };

  return (
    <DnDContext.Provider value={contextValue}>
      {children}
    </DnDContext.Provider>
  );
};

export default DnDProvider;
