import React from 'react'
import { HeaderDiv, HeaderStuff } from '../styled-components/HeaderStyle'
import { ProjectLink } from '../styled-components/ProjectStyle'

export default function Header() {
    return (
        <HeaderDiv>
            <HeaderStuff>
            <ProjectLink to = '/'>Home</ProjectLink>
            <ProjectLink to = '/about'>About me</ProjectLink>
            <ProjectLink to = '/projects'>Cam's Projects</ProjectLink>
            <ProjectLink to = '/contact'>Contact</ProjectLink>
            </HeaderStuff>
        </HeaderDiv>
    )
}
