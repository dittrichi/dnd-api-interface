import React from "react";
import Layout from "./components/layout";
import NoSearch from "./components/no-search";
import RaceProfile from "./components/race-profile";
import Proficiencies from "./components/proficiencies";
import useDnd from "./hooks/dnd-hooks";

import RacesSelect from "./components/races-select";

const App = () => {
  const { dndState } = useDnd();
  return (
    <Layout>
      {dndState.hasRace ? (
        <>
          {dndState.loading ? (
            <p>Loading</p>
          ) : (
            <>              
              <RaceProfile />
              <Proficiencies />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default App;
