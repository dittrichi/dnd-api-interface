import React from "react";
import Layout  from "./components/races/layout";
import NoSearch from "./components/races/no-search";
import RaceProfile from "./components/races/profile";
import RaceDetails from "./components/races/race-details";
import useDnd from "./hooks/dnd-hooks";

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
              <RaceDetails />
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
