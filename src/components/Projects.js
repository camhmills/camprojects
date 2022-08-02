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
import House1 from "../images/house1.jpg"
import House2 from "../images/house2.jpg"
import House3 from "../images/house3.jpg"
import House4 from "../images/house4.jpg"

export default function Projects() {
  return (
    <ProjectContainer>
      <ProjectCard>
         <ProjectImg src={House1}></ProjectImg>
          <ProjectModal>
            <ProjectParagraph>
              Address for House 1
            </ProjectParagraph>
          </ProjectModal>
      </ProjectCard>
      <ProjectCard>
         <ProjectImg src={House2}></ProjectImg>
          <ProjectModal>
            <ProjectParagraph>
              Address for House 2
            </ProjectParagraph>
          </ProjectModal>
      </ProjectCard>
      <ProjectCard>
        <ProjectImg src={House3}></ProjectImg>
          <ProjectModal>
            <ProjectParagraph>
              Address for House 3
            </ProjectParagraph>
          </ProjectModal>
      </ProjectCard>
      <ProjectCard>
          <ProjectImg src={House4}></ProjectImg>
          <ProjectModal>
            <ProjectParagraph>
              Address for House 4
            </ProjectParagraph>
          </ProjectModal>
      </ProjectCard>
      <div style={{ width: "100px", height: "100px" }}></div>
    </ProjectContainer>
  );
}
