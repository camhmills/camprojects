import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 89.5vh;
  width: 100vw;
`;

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 700px;
  width: 1000px;
  background-color: #010409;
  @media screen and (max-width: 1050px) {
    justify-content: center;
    grid-template-columns: 350px;
    grid-gap: 10px;
    width: 100vw;
  }
  @media screen and (max-height: 800px) {
      margin-top: 50px;
  }
  @media screen and (max-height: 670px) {
    margin-top: 225px;
  }`;

export const ProjectCard = styled.div`
  display: flex;
  justify-content: center;
  height: 350px;
  width: 500px;
  @media screen and (max-width: 1050px) {
    height: 250px;
    width: 350px;
  }
`;

export const ProjectImg = styled.img`
  position: absolute;
  height: 350px;
  width: 500px;
  z-index: 1;
  @media screen and (max-width: 1050px) {
    height: 250px;
    width: 350px;
  }
`;

export const ProjectLink = styled(Link)`
  text-decoration: none;
  color: #202020;
  transition: .5s;
  &:hover {
    filter: invert(50%)
  }
`;

export const ExternalLinkContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 150px;
height: 50px;
`

export const ExternalLink = styled.a`
display: flex;
justify-content: center;
align-items: center;
height: 50px;
width: 50px;
filter: invert(100%)
`

export const ProjectModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 500px;
  background: #0e0e0e;
  position: absolute;
  z-index: 2;
  opacity: 0;
  transition: all 500ms ease-in-out;
  &:hover {
    opacity: 0.7;
    transition-duration: 500ms;
  }
  text-align: center;
  @media screen and (max-width: 1050px) {
    height: 250px;
    width: 350px;
  }
`;

export const ProjectAnchor = styled.a`
  height: 350px;
  width: 500px;
  color: #fafafa;
  text-decoration: none;
  @media screen and (max-width: 1050px) {
    height: 250px;
    width: 350px;
  }
`;

export const ProjectParagraph = styled.p`
  font-size: 40px;
  color: white;
  margin: 0px;
  @media screen and (max-width: 1050px) {
    font-size: 27px;
  }
  @media screen and (max-width: 800px) {
    font-size: 22px;
  }
`;
