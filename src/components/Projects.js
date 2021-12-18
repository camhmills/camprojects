import React from "react";
import {
  ExternalLink,
  ExternalLinkContainer,
  ProjectAnchor,
  ProjectCard,
  ProjectContainer,
  ProjectImg,
  ProjectModal,
  ProjectParagraph,
} from "../styled-components/ProjectStyle";
import GraphIt from "../images/GraphIt.png";
import YarningDesire from "../images/YarningDesire.png";
import BacklogBooster from "../images/BacklogBooster.png";
import JobStack from "../images/JobStack.png";
import WeatherApp from "../images/WeatherApp.png";
import GitHub from "../images/Github.png";

export default function Projects() {
  return (
    <ProjectContainer>
      <ProjectCard>
        <ProjectAnchor href="https://graphit-client.herokuapp.com/login">
          <ProjectImg src={GraphIt}></ProjectImg>
          <ProjectModal>
            <ProjectParagraph>
              GraphIt combines PostgreSQL, Express, Node, and React for an
              effective data visualization tool.
            </ProjectParagraph>
            <ExternalLinkContainer>
              <ExternalLink href="https://github.com/camhmills/Capstone">
                <img src={GitHub} />
              </ExternalLink>
            </ExternalLinkContainer>
          </ProjectModal>
        </ProjectAnchor>
      </ProjectCard>
      <ProjectCard>
        <ProjectAnchor href="https://yarning-desire.herokuapp.com/">
          <ProjectImg src={YarningDesire}></ProjectImg>
          <ProjectModal>
            <ProjectParagraph>
              Yarning Desire is a simple front-end template for an e-commerce
              store, with basic styling.
            </ProjectParagraph>
            <ExternalLinkContainer>
              <ExternalLink href="https://github.com/camhmills/Yarning-Desire">
                <img src={GitHub} />
              </ExternalLink>
            </ExternalLinkContainer>
          </ProjectModal>
        </ProjectAnchor>
      </ProjectCard>
      <ProjectCard>
        <ProjectAnchor href="https://weather-practice.herokuapp.com/">
          <ProjectImg src={WeatherApp}></ProjectImg>
          <ProjectModal>
            <ProjectParagraph>
              A weather app that takes in city names, and makes use of React, Redux Toolkit, and Axios.
            </ProjectParagraph>
            <ExternalLinkContainer>
              <ExternalLink href="https://github.com/camhmills/timelymd-assignment">
                <img src={GitHub} />
              </ExternalLink>
            </ExternalLinkContainer>
          </ProjectModal>
        </ProjectAnchor>
      </ProjectCard>
      <ProjectCard>
        <ProjectAnchor href="https://camhmills.github.io/">
          <ProjectImg src={BacklogBooster}></ProjectImg>
          <ProjectModal>
            <ProjectParagraph>
              Backlog Booster is simple Javascript and DOM manipulation and API
              access.
            </ProjectParagraph>
            <ExternalLinkContainer>
              <ExternalLink href="https://github.com/camhmills/camhmills.github.io">
                <img src={GitHub} />
              </ExternalLink>
            </ExternalLinkContainer>
          </ProjectModal>
        </ProjectAnchor>
      </ProjectCard>
      <div style = {{width: "100px", height: "100px"}}></div>
    </ProjectContainer>
  );
}
