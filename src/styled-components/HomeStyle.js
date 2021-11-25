import styled, {keyframes} from 'styled-components'

export const HomeContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: auto;
width: 95vw;
`

export const HomeLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: auto;
width: 40vw;
`

export const HomeRight = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: auto;
width: 50vw;
`

export const HomeH1 = styled.h1`
color: #FAFAFA
`

export const HomeH3 = styled.h3`
color: #FAFAFA;
width: 500px;
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
justify-content: space-evenly;
align-items: center;
height: 50px;
width: 350px
`
