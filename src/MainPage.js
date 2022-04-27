import './MainPage.css';

import React from 'react';
import formpic1 from './fairyboys-sticker.png';
import formpic2 from './fairyboys-text.png';
import styled, { keyframes } from "styled-components";
import {bounce} from "react-animations";
const BounceAnimation = keyframes`${bounce}`;
const BounceDiv = styled.div`
  animation: infinite 5s ${BounceAnimation};
`;


export default class BasicForm extends React.Component {
  render() {
    return (
      <div className="main-div" >
        <BounceDiv>
        <img src={formpic1} className="formpic1"/>
        </BounceDiv>
        <img src={formpic2} className="formpic2"/>
        <h1>Boku boku... Something is brewing...</h1>
        
      </div>
    );
    
  }
}