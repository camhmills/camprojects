import styled from "styled-components";

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 80px;
  width: 100vw;
  background-color: #202020;
  margin-bottom: 75px;
`;

export const HeaderStuff = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 33vw;
  background-color: #202020;
  font-size: 25px;
  @media screen and (max-width: 1000px) {
    width: 50vw;
  }

  @media screen and (max-width: 800px) {
    width: 75vw;
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    width: 90vw;
  }
`;

