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
import GitHub from "../images/Github.png";

export default function Projects() {
  return (
    <ProjectContainer>
      <ProjectCard>
        <ProjectAnchor href="https://github.com/camhmills/Capstone">
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
        <ProjectAnchor href="https://github.com/ZakOpry/backend_project_2">
          <ProjectImg src={JobStack}></ProjectImg>
          <ProjectModal>
            <ProjectParagraph>
              JobStack employs simple DOM manipulation combined with a
              Node/Express back-end.
            </ProjectParagraph>
            <ExternalLinkContainer>
              <ExternalLink href="https://github.com/ZakOpry/backend_project_2">
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
    </ProjectContainer>
  );
}
