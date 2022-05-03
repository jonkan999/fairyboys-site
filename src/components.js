import styled from "styled-components";

export const NEXT = "NEXT";
export const PREV = "PREV";

export const Item = styled.div`
  text-align: center;
  padding: 100px;
  background-image: ${props => `url(${props.img})`};
  background-size: cover;
`;

export const CarouselContainer = styled.div`
  display: flex;
  transition: ${props => (props.sliding ? "none" : "transform 1s ease")};
  transform: ${props => {
    if (!props.sliding) return "translateX(calc(-80% - 20px))";
    if (props.dir === PREV) return "translateX(calc(2 * (-80% - 20px)))";
    return "translateX(0%)";
  }};
`;

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 80%;
  margin-right: 20px;
  order: ${props => props.order};
`;

export const RightSlideButton = styled.button`
position: absolute;
z-index: 10;
    color: grey;
    font-size: 7vw;
    font-weight: 10;
    background-color: white;
    border: 1px solid white;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
  top: 111vw;
  right: 3vw;
  text-decoration: none;
  float: ${props => props.float};
  &:focus {
    outline: 0;
  }
`;

export const LeftSlideButton = styled.button`
position: absolute;
z-index: 10;
    color: grey;
    font-size: 7vw;
    font-weight: 10;
    background-color: white;
    border: 1px solid white;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
  top: 111vw;
  left: 3vw;
  text-decoration: none;
  float: ${props => props.float};
  &:focus {
    outline: 0;
  }
`;

export const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
  width: 75%;
`;

export const ExtraInfo = styled.div`
  margin-top: 25px;
  display: inline-block;
`;

export const Code = styled.code`
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  margin: 0;
  padding: 0.2em 0.4em;
`;
