import React, { useState, useEffect, useRef } from "react";
import * as S from "./styled";
import useDnd from "../../hooks/dnd-hooks";
import RaceSelect from "../races-select"

const Header = () => {
  const { getRace } = useDnd();
  const [raceForSearch, setRaceForSearch] = useState();

  const submitGetRace = () => {
    if (!raceForSearch) return;
    return getRace(raceForSearch);
  };


  return (
    <header>    
        <S.Wrapper>
          <RaceSelect onChange={(event) => setRaceForSearch(event.currentTarget.value)}/>
          <input
            type="text"
            placeholder="Insert a race"
            onChange={(event) => setRaceForSearch(event.target.value)}
          />
          <button type="submit" onClick={submitGetRace}>
            <span>Search</span>
          </button>
        </S.Wrapper>      
    </header>
  );
};

export default Header;
