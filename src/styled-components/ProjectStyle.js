import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MainContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
`

export const ProjectContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
height: 700px;
width: 1000px;
background-color: #0d698b
`

export const ProjectCard = styled.div`
display: flex;
justify-content: center;
height: 350px;
width: 500px;
background-color: #e34234;
`

export const ProjectImg = styled.img`
position: absolute;
height: 350px;
width: 500px;
z-index: 1;
`

export const ProjectLink = styled(Link)`
text-decoration: none;
Link:visited {
    color: black;
}
Link:active {
    color: black;
}
`

export const ProjectModal = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 350px;
width: 500px;
background: #0E0E0E;
position: absolute;
z-index: 2;
opacity: 0;
transition: all 500ms ease-in-out;
&:hover {
    opacity: 0.5;
    transition-duration: 500ms;
}
text-align: center;
`

export const ProjectAnchor = styled.a`
height: 350px;
width: 500px;
`

export const ProjectParagraph = styled.p`
font-size: 40px;
color: white;
`