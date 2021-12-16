import useDnd from "../../../hooks/dnd-hooks";
import RaceDetailItem from "../race-detail-item";
import * as S from "./styled";

const RaceDetails = () => {
  const { dndState } = useDnd();
 
  return (
    <>
      {dndState.race ? (
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
              {dndState.race.starting_proficiencies.map((item) => (
                <RaceDetailItem
                  index={item.index}
                  name={item.name}
                  url={item.url}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {dndState.race.traits.map((item) => (
                <RaceDetailItem
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

export default RaceDetails;
