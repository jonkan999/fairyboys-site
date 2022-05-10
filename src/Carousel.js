import React from "react";
import { useSwipeable } from "react-swipeable";
import {
  Wrapper,
  CarouselContainer,
  CarouselSlot,
  LeftSlideButton,
  RightSlideButton,
  PREV,
  NEXT
} from "./components";

const getOrder = ({ index, pos, numItems }) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};
const initialState = { pos: 0, sliding: false, dir: NEXT };

const getText = ({ pos}) => {
  if (pos === 1) {
  return 'Base package: Branded form app with sassy acrylic QR-code blocks';
} else if (pos === 2) {
  return 'Addon 1: Gamified addon app with customizable prizes'
} else if (pos === 3) {
  return 'Addon 2: Large monitor with customizable graphics for crowd engagement'
} else {
  return 'Swipe to view our different product suites'
}
};

const Carousel = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const numItems = React.Children.count(props.children);
  const slide = dir => {
    dispatch({ type: dir, numItems });
    setTimeout(() => {
      dispatch({ type: "stopSliding" });
    }, 50);
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => slide(NEXT),
    onSwipedRight: () => slide(PREV),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  return (
    <div {...handlers}>
      <div>
      <Wrapper>
        <CarouselContainer dir={state.dir} sliding={state.sliding}>
          {React.Children.map(props.children, (child, index) => (
            <CarouselSlot
              key={index}
              order={getOrder({ index: index, pos: state.pos, numItems })}
            >
              {child}
            </CarouselSlot>
          ))}
        </CarouselContainer>
      </Wrapper>
      <LeftSlideButton onClick={() => slide(PREV)} float="left">
      &#10092;
      </LeftSlideButton>
      <RightSlideButton onClick={() => slide(NEXT)} float="right">
      &#10093;
      </RightSlideButton>
      </div>
      <div><h>{getText({pos: state.pos})}</h></div>
    </div>
    
  );
};

function reducer(state, { type, numItems }) {
  switch (type) {
    case "reset":
      return initialState;
    case PREV:
      return {
        ...state,
        dir: PREV,
        sliding: true,
        pos: state.pos === 0 ? numItems - 1 : state.pos - 1
      };
    case NEXT:
      return {
        ...state,
        dir: NEXT,
        sliding: true,
        pos: state.pos === numItems - 1 ? 0 : state.pos + 1
      };
    case "stopSliding":
      return { ...state, sliding: false };
    default:
      return state;
  }
}

export default Carousel;
