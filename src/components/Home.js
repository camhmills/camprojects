import React from 'react'
import { HomeContainer, HomeH1, HomeH3, HomeLeft, HomeRight, HomeSkillSet, Slider, SliderFigure, SliderImg } from '../styled-components/HomeStyle'
import GraphIt from '../images/GraphIt.png'
import YarningDesire from '../images/YarningDesire.png'
import BacklogBooster from '../images/BacklogBooster.png'

export default function Home() {
    return (
        <HomeContainer>
            <HomeLeft>
                <HomeH1>Let's build something!</HomeH1>
                <HomeH3>
                    Hi, I'm Cameron. I'm a developer with a great work ethic. 
                    If there's a technology or language I haven't grasped yet, it's on the list.
                </HomeH3>
                <HomeSkillSet>
                <img src="https://img.icons8.com/color/48/000000/html-5--v1.png"/>
                <img src="https://img.icons8.com/color/48/000000/css3.png"/>
                <img src="https://img.icons8.com/color/48/000000/javascript--v1.png"/>
                <img src="https://img.icons8.com/color/48/000000/postgreesql.png"/>
                <img src="https://img.icons8.com/fluency/48/000000/node-js.png"/>
                <img src="https://img.icons8.com/color/48/000000/react-native.png"/>
                <img src="https://img.icons8.com/color/48/000000/redux.png"/>
                </HomeSkillSet>
            </HomeLeft>
            <HomeRight>
                <Slider>
                    <SliderFigure>
                        <SliderImg src = {GraphIt}></SliderImg>
                        <SliderImg src = {YarningDesire}></SliderImg>
                        <SliderImg src = {GraphIt}></SliderImg>
                        <SliderImg src = {BacklogBooster}></SliderImg>
                        <SliderImg src = {GraphIt}></SliderImg>
                    </SliderFigure>
                </Slider>
            </HomeRight>
        </HomeContainer>
    )
}
