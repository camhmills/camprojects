import styled from "styled-components";

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 100vw;
  background-color: #FAFAFA;
  box-shadow: 0px 0px 20px #202020;
  @media only screen and (max-width: 800px) {
    justify-content: center;
  }
`;

export const HeaderStuff = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 20vw;
  background-color: #FAFAFA;
  font-size: 25px;
  margin-left: 25px;
  @media screen and (max-width: 1720px) {
    font-size: 22px;
    width: 25vw;
  }

  @media screen and (max-width: 1100px) {
    width: 37vw;
  }

  @media screen and (max-width: 800px) {
    width: 75vw;
    font-size: 20px;
    margin-left: 0px;
  }

  @media screen and (max-width: 500px) {
    width: 90vw;
  }
`;

