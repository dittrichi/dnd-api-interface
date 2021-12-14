import React, { useEffect, useState } from "react";
import useDnd from "../../hooks/dnd-hooks";
import ProficiencyItem from "../proficiency-item";
import * as S from "./styled";

const Proficiencies = () => {
  const { dndState, getRaceProficiencies, getRaceTraits  } = useDnd();
  const [hasRaceForSearchProf, setHasRaceForSearchProf] = useState(false);

  useEffect(() => {
    if (dndState.race.index) {
      getRaceProficiencies(dndState.race.index);
      getRaceTraits(dndState.race.index);
    }
    setHasRaceForSearchProf(dndState.proficiencies);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dndState.race.index]);

  return (
    <>
      {hasRaceForSearchProf ? (
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTabList>
            <S.WrapperTab>Proficiency</S.WrapperTab>
            <S.WrapperTab>Trait</S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {dndState.proficiencies.map((item) => (
                <ProficiencyItem
                  index={item.index}
                  name={item.name}
                  url={item.url}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {dndState.traits.map((item) => (
                <ProficiencyItem
                  index={item.index}
                  name={item.name}
                  url={item.url}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
        </S.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
};

export default Proficiencies;
