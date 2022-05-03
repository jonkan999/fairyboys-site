import './MainPage.css';

import React from 'react';
import formpic1 from './fairyboys-sticker.png';
import formpic2 from './fairyboys-text.png';
import IMG_1 from './img3.png';
import IMG_2 from './img0.png';
import IMG_3 from './img1.png';
import IMG_4 from './img2.png';
import styled, { keyframes } from "styled-components";
import {bounce} from "react-animations";
import { Item, AppContainer, ExtraInfo, Code } from "./components";
import Carousel from './Carousel';

const BounceAnimation = keyframes`${bounce}`;
const BounceDiv = styled.div`
  animation: infinite 5s ${BounceAnimation};
`;

const IMAGES = [IMG_1, IMG_2, IMG_3, IMG_4];


export default class BasicForm extends React.Component {
  render() {
    return (
      <div className="main-div" >
        <BounceDiv>
        <img src={formpic1} className="formpic1"/>
        </BounceDiv>
        <img src={formpic2} className="formpic2"/>
        <h1>Boku boku... Something is brewing...</h1>
        <Carousel title="Carousel">
        <Item img={IMG_1} />
        <Item img={IMG_2} />
        <Item img={IMG_3} />
        <Item img={IMG_4} />
      </Carousel>
        
      </div>
    );
    
  }
}
