import React from 'react'
import { HomeContainer, HomeH1, HomeH3, HomeLeft, HomeRight, Slider, SliderFigure, SliderImg } from '../styled-components/HomeStyle'
import GraphIt from '../images/GraphIt.png'
import YarningDesire from '../images/YarningDesire.png'
import BacklogBooster from '../images/BacklogBooster.png'

export default function Home() {
    return (
        <HomeContainer>
            <HomeLeft>
                <HomeH1>Let's develop something!</HomeH1>
                <HomeH3>
                    Hi, I'm Cameron. I'm a humble junior developer with a great work ethic. 
                    If there's a technology or language I haven't grasped yet, it's on the list.
                </HomeH3>
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
