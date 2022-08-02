import React from "react";
import {
  HomeContainer,
  HomeH1,
  HomeH3,
  HomeLeft,
  HomeRight,
  Slider,
  SliderFigure,
  SliderImg,
} from "../styled-components/HomeStyle";
import House1 from "../images/house1.jpg"
import House2 from "../images/house2.jpg"
import House3 from "../images/house3.jpg"
import House4 from "../images/house4.jpg"
import House5 from "../images/house5.jpg"

export default function Home() {
  return (
    <HomeContainer>
      <HomeLeft>
        <HomeH1>Let's find you a home!</HomeH1>
        <HomeH3>
          Welcome to Will's Realty.
        </HomeH3>
      </HomeLeft>
      <HomeRight>
        <Slider>
          <SliderFigure>
            <SliderImg src={House1}></SliderImg>
            <SliderImg src={House2}></SliderImg>
            <SliderImg src={House3}></SliderImg>
            <SliderImg src={House4}></SliderImg>
            <SliderImg src={House1}></SliderImg>
          </SliderFigure>
        </Slider>
      </HomeRight>
    </HomeContainer>
  );
}
