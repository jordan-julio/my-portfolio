import React from "react";
import styled from "@emotion/styled";
import { animated, useSpring } from 'react-spring';
import { withGesture } from 'react-with-gesture';
import { CSSProperties } from 'react';
import { useDrag } from 'react-use-gesture'
import Image from 'next/image'


type SlideProps = {
  content: React.ReactNode;
  offsetRadius: number;
  index: number;
  animationConfig?: object;
  moveSlide: (index: number) => void;
  delta?: Array<number>;
  down?: boolean;
  up?: boolean;
  style?: CSSProperties;
  image: string;
};

const SlideContainer = styled(animated.div)<{ zIndex: number }>`
  position: absolute;
  height: 70%;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
  z-index: ${(props) => props.zIndex};
`;

const SlideCard = styled(animated.div)<{ zIndex?: number}>`
  position: relative;
  max-width: 35%;
  min-width: 30%;
  width: 100vw;
  height: 100%;
  background: white;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
  color: black;
  background-image: radial-gradient(#0077b6 2px, transparent 2px), radial-gradient(#90e0ef 2px, transparent 2px);
  background-size: 23px 23px;
  background-position: 0 0, 11px 11px;
  border-radius: 44px;
background: linear-gradient(225deg, #b5b3b5, #989698);
box-shadow: ${(props) => props.zIndex === 1 ? '-30px 30px 73px #787778, 30px -30px 73px #dad7da' : 'none'};
`;


const Slide = ({
  content,
  offsetRadius,
  index,
  animationConfig,
  moveSlide,
  delta,
  down,
  up,
  image,
}: SlideProps) => {
    delta = delta || [0, 0];
    const bind = useDrag(({ down, movement: [mx, my] }) => {
        // use mx and my for your component update
        // down indicates whether mouse is pressed or not
      }, {
        // optional configuration
        threshold: 10, // the distance the cursor needs to move to start the gesture
        rubberband: true // adds a rubberband effect when dragged outside of the defined area
      })
  const offsetFromMiddle = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;
  const distanceFactor = 1 - Math.abs(offsetFromMiddle / (offsetRadius + 1));

  const translateYoffset =
    50 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
  let translateY = -50;

  if (offsetRadius !== 0) {
    if (index === 0) {
      translateY = 0;
    } else if (index === totalPresentables - 1) {
      translateY = -100;
    }
  }

  if (offsetFromMiddle === 0 && down) {
    translateY += delta[1] / (offsetRadius + 1);
    if (translateY > -40) {
      moveSlide(-1);
    }
    if (translateY < -100) {
      moveSlide(1);
    }
  }
  if (offsetFromMiddle > 0) {
    translateY += translateYoffset;
  } else if (offsetFromMiddle < 0) {
    translateY -= translateYoffset;
  }

  // Opacity animation
  const zIndex = offsetFromMiddle === 0 ? 1 : 0;

  // Remove zIndex from the useSpring hook
  const styleProps = useSpring({
      transform: `translateX(0%) translateY(${translateY}%) scale(${distanceFactor})`,
      top: `${offsetRadius === 0 ? 50 : 50 + (offsetFromMiddle * 50) / offsetRadius}%`,
      opacity: distanceFactor * distanceFactor,
      config: animationConfig,
  });
  

  

  return (
    <SlideContainer {...bind()} style={styleProps} zIndex={zIndex}>
        <SlideCard onClick={() => moveSlide(offsetFromMiddle)} zIndex={zIndex}>
            <Image src={image} alt="blob image" width={200} height={200} />
          {content}
        </SlideCard>
    </SlideContainer>
    )
}

export default Slide;