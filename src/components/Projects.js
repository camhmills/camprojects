import React from 'react'
import { ProjectAnchor, ProjectCard, ProjectContainer, ProjectImg, ProjectModal, ProjectParagraph } from '../styled-components/ProjectStyle'
import GraphIt from '../images/GraphIt.png'
import YarningDesire from '../images/YarningDesire.png'
import BacklogBooster from '../images/BacklogBooster.png'
import JobStack from '../images/JobStack.png'

export default function Projects() {
    return (
        <ProjectContainer>
            <ProjectCard>
                <ProjectAnchor href = 'https://github.com/camhmills/Capstone'>
                    <ProjectImg src = {GraphIt} ></ProjectImg>
                    <ProjectModal>
                        <ProjectParagraph>GraphIt combines PostgreSQL, Express, Node, and React for an effective data visualization tool.</ProjectParagraph>
                    </ProjectModal>
                </ProjectAnchor>
            </ProjectCard>
            <ProjectCard>
                <ProjectAnchor href = 'https://yarning-desire.herokuapp.com/'>
                    <ProjectImg src = {YarningDesire}></ProjectImg>
                    <ProjectModal>
                        <ProjectParagraph>Yarning Desire is a simple front-end template for an e-commerce store, with basic styling.</ProjectParagraph>
                        <button>Github</button>
                    </ProjectModal>
                </ProjectAnchor>
            </ProjectCard>
            <ProjectCard>
                <ProjectAnchor href = 'https://github.com/ZakOpry/backend_project_2'>
                    <ProjectImg src = {JobStack}></ProjectImg>
                    <ProjectModal>
                        <ProjectParagraph>JobStack employs simple DOM manipulation combined with a Node/Express back-end.</ProjectParagraph>
                    </ProjectModal>
                </ProjectAnchor>
            </ProjectCard>
            <ProjectCard>
                <ProjectAnchor href = 'https://camhmills.github.io/'>
                    <ProjectImg src = {BacklogBooster}></ProjectImg>
                    <ProjectModal>
                        <ProjectParagraph>Backlog Booster is probably my favorite app I've made. It's simple DOM manipulation and API access.</ProjectParagraph>
                    </ProjectModal>
                </ProjectAnchor>
            </ProjectCard>
        </ProjectContainer>
    )
}
