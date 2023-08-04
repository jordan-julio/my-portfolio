import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import PropTypes from 'prop-types';
import Slide from "./slide";
import { useDrag } from 'react-use-gesture';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const NavigationButtons = styled.div`
  position: relative;
  display: flex;
  height: 60px;
  margin: 0 auto;
  width: 20%;
  margin-top: 1rem;
  justify-content: space-between;
  z-index: 1000;
`;

const NavBtn = styled.div`
  background: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 3px;
`;

function mod(a: any, b: any) {
  return ((a % b) + b) % b;
}

interface Slide {
    key: any;
    content: React.ReactNode;
}

// Define the shape of your props
interface CarouselProps {
  slides: Slide[];
  goToSlide?: number;
  offsetRadius: number;
  animationConfig?: object;
}

const VerticalCarousel: React.FC<CarouselProps> = ({ slides, goToSlide = 0, offsetRadius = 2, animationConfig = { tension: 120, friction: 14 } }) => {
  const [index, setIndex] = useState(goToSlide);

  const [isGestureActive, setIsGestureActive] = useState(false);

  const bind = useDrag(({ direction: [dx, dy], down, distance }) => {
    if (down && distance > 100) { // Adjust the threshold if necessary
        moveSlide(dy < 0 ? 1 : -1);
    }
    if (!down) {
        setIsGestureActive(false);
    }
    }, {
        axis: 'y',
        filterTaps: true,
    });

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.isComposing || event.keyCode === 229) {
        return;
      }
      if (event.keyCode === 38) {
        moveSlide(-1);
      }
      if (event.keyCode === 40) {
        moveSlide(1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  const modBySlidesLength = (index: number) => {
    return mod(index, slides.length);
  };

  const moveSlide = (direction: number) => {
    setIndex(modBySlidesLength(index + direction));
  };

  const clampOffsetRadius = (offsetRadius: any) => {
    const upperBound = Math.floor((slides.length - 1) / 2);

    if (offsetRadius < 0) {
      return 0;
    }
    if (offsetRadius > upperBound) {
      return upperBound;
    }

    return offsetRadius;
  };

  const getPresentableSlides = () => {
    let clampedOffsetRadius = clampOffsetRadius(offsetRadius);
    const presentableSlides = new Array();

    for (let i = -clampedOffsetRadius; i < 1 + clampedOffsetRadius; i++) {
      presentableSlides.push(slides[modBySlidesLength(index + i)]);
    }

    return presentableSlides;
  }

  return (
    <React.Fragment>
      <Wrapper {...bind()}>
        {getPresentableSlides().map((slide, presentableIndex) => (
          <Slide
            key={slide.key}
            image={slide.image}
            content={slide.content}
            moveSlide={moveSlide}
            offsetRadius={clampOffsetRadius(offsetRadius)}
            index={presentableIndex}
            animationConfig={animationConfig}
          />
        ))}
      </Wrapper>
    </React.Fragment>
  );
}

VerticalCarousel.propTypes = {
  slides: PropTypes.any,
  goToSlide: PropTypes.number,
  offsetRadius: PropTypes.any,
  animationConfig: PropTypes.object
};

export default VerticalCarousel;
