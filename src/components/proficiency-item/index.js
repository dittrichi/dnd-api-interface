import React from "react";
import * as S from "./styled";

const ProficiencyItem = ({ index, name, url}) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{index}</S.WrapperTitle>      
      <S.WrapperLink href={url} target="_blank" rel="noreferrer">
        {name}
      </S.WrapperLink>
    </S.Wrapper>
  );
};

export default ProficiencyItem;
