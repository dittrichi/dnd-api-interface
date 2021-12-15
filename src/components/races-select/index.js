import React, { useEffect, useState } from "react";
import useDnd from "../../hooks/dnd-hooks";


import * as S from "./styled";

const RacesSelect = ({onChange}) => {
  const { dndState, getAllRaces  } = useDnd();
  const [hasAllRaces, setHasAllRaces] = useState(false);

  useEffect(() => {
    if (!dndState.allRaces) {
      getAllRaces();
    }
    setHasAllRaces(dndState.allRaces);    
    console.log("hasAllRaces: ", hasAllRaces);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dndState.allRaces]);

  return (
    <>
      {hasAllRaces ? (
        <S.Wrapper>
            <select onChange={onChange}>            
            {dndState.allRaces.results.map(({index, name}) => (
                <option key={index} value={index}>{name}</option>
              ))}
            </select>          
        </S.Wrapper>
      ) : (
        <></>
      )}
    </>
  );
};

export default RacesSelect;
