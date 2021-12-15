import React from "react";
import * as S from "./styled";

const RaceDetailItem = ({ index, name, url}) => {

  const apiUrl = process.env.REACT_APP_BASE_API + url; 

  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>      
      <S.WrapperLink href={apiUrl} target="_blank" rel="noreferrer">
        {name}
      </S.WrapperLink>
    </S.Wrapper>
  );
};

export default RaceDetailItem;
