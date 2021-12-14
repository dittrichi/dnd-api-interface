import React, { useState } from "react";
import * as S from "./styled";
import useDnd from "../../hooks/dnd-hooks";

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
        <input
          type="text"
          placeholder="Insert a race"
          onChange={(event) => setRaceForSearch(event.target.value)}
        />
        <button type="submit" onClick={submitGetRace}>
          <span>Buscar</span>
        </button>
      </S.Wrapper>
    </header>
  );
};

export default Header;
