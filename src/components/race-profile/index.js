import React from "react";
import useDnd from "../../hooks/dnd-hooks";
import * as S from "./styled";

const RaceProfile = () => {
  const { dndState } = useDnd();

  return (
    <S.Wrapper>
      <S.WrapperInfoRace>
        <div>
          <h1>{dndState.race.name}</h1>
          <S.WrapperRaceGeneric>
            <h3>Race:</h3>
            <spam>{dndState.race.index}</spam>
          </S.WrapperRaceGeneric>

          <S.WrapperRaceGeneric>
            <h3>Speed:</h3>
            <span>{dndState.race.speed}</span>
          </S.WrapperRaceGeneric>

          <S.WrapperRaceGeneric>
            <h3>ability_bonuses:</h3>
            <span>{dndState.race.ability_bonuses}</span>
          </S.WrapperRaceGeneric>

          <S.WrapperRaceGeneric>
            <h3>Alignment:</h3>
            <span>{dndState.race.alignment}</span>
          </S.WrapperRaceGeneric>

          <S.WrapperRaceGeneric>
            <h3>Age:</h3>
            <span> {dndState.race.age}</span>
          </S.WrapperRaceGeneric>

          <S.WrapperRaceGeneric>
            <h3>Size:</h3>
            <span> {dndState.race.size}</span>
          </S.WrapperRaceGeneric>
        </div>
      </S.WrapperInfoRace>
    </S.Wrapper>
  );
};

export default RaceProfile;
