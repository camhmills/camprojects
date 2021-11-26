import styled, {keyframes} from 'styled-components'

export const HomeContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: auto;
width: 95vw;
overflow: hidden;
@media screen and (max-width: 1050px) {
    flex-direction: column;
}
`

export const HomeLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: auto;
width: 40vw;
@media screen and (max-width: 1050px) {
    text-align: center;
    height: 400px;
    width: 100vw;

}
`

export const HomeRight = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: auto;
width: 50vw;
@media screen and (max-width: 1050px) {
    width: 75vw;
    margin-bottom: 150px;
}

@media screen and (max-width: 768px) {
    width: 95vw;
}
`

export const HomeH1 = styled.h1`
color: #FAFAFA;
@media screen and (max-width:1050px) {
    width: 200px;
    margin: 0px;
}
`
export const HomeH3 = styled.h3`
color: #FAFAFA;
width: 520px;
@media screen and (max-width: 1200px) {
    width: 325px;
}
`

const slider = keyframes`
0% {
    left: 0;
}
20% {
    left: 0;
}
25% {
    left: -100%
}
45% {
    left: -100%;
}
50% {
    left: -200%;
}
70% {
    left: -200%;
}
75% {
    left: -300%;
}
95% {
    left: -300%;
}
100% {
    left: -400%;
}
`
export const Slider = styled.div`
overflow: hidden;
`

export const SliderFigure = styled.figure`
position: relative;
width: 500%;
margin: 0;
left: 0;
animation: 20s ${slider} infinite;
`

export const SliderImg = styled.img`
width: 20%;
float: left;
`

export const HomeSkillSet = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 50px;
width: 500px;
@media screen and (max-width: 1200px) {
    width: 350px;
}
`

