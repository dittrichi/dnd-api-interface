import React from "react";
import useDnd from "../../../hooks/dnd-hooks";
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
        <h3>Ability bonuses:</h3>
        <S.WrapperList>
          <ul>
          {dndState.race.ability_bonuses.map((item) => (
                  <li>
                    {item.ability_score.name} +{item.bonus}
                  </li>
                ))}
          </ul>
        </S.WrapperList>
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
