import React from "react";
import { HeaderDiv, HeaderStuff } from "../styled-components/HeaderStyle";
import {
  ProjectLink,
  ExternalLink,
  ExternalLinkContainer,
} from "../styled-components/ProjectStyle";
import GitHub from "../images/Github.png";

export default function Header() {
  return (
    <HeaderDiv>
      <HeaderStuff>
        <ProjectLink to="/">Home</ProjectLink>
        <ProjectLink to="/projects">Properties</ProjectLink>
        <ProjectLink to="/contact">Contact</ProjectLink>
      </HeaderStuff>
    </HeaderDiv>
  );
}
