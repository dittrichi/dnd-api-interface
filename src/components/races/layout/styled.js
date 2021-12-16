import styled from "styled-components";

export const WrapperLayout = styled.section`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  position: relative;
  max-width: 1080px;
  margin: 0 auto;
  padding:  20px;
  box-sizing: content-box;
  min-height 100vh;
  background: rgba(255, 255, 255, .9)   
`;

