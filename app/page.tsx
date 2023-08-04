'use client'
import styles from './page.module.css'
import { Grid, Typography, Box } from '@mui/material';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import dynamic from 'next/dynamic';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import VerticalCarousel from './components/verticalCarousel';
import { config } from 'react-spring';
import { useState } from 'react';
import GameBar from './components/gameBar';

const slides = [
  { key: 1, content: '1', image: '/react.png' },
  { key: 2, content: '2', image: '/pythonic_world.jpg'},
  { key: 3, content: '3', image: '/js.png'},
  { key: 6, content: '6', image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg'},
];
const DynamicNavbar = dynamic(() => import('./components/navbar'), {
  ssr: false,
});

const DynamicBlob = dynamic(() => import('./components/blob'), {
  ssr: false,
});

export default function Home() {
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showNavigation, setShowNavigation] = useState(true);
  const [animationConfig, setAnimationConfig] = useState(config.gentle);
  const names = ['Jordan J.', 'JJ.'];
  const roles = ['Cyber Security.', 'Backend Development.', 'Frontend Development.']
  return (
    <ParallaxProvider>
    <main className={styles.root}>
      <DynamicNavbar />
      <Parallax translateY={[-20, 20]} className={styles.outerDiv}>
        <Box className={styles.imageDiv}>
          <DynamicBlob />
        </Box>
        <Box className={`${styles.textDiv}`}>
          <Parallax translateY={[-100, 100]}>
            <Typography variant="h2" align="left" color='#e3e3e3'>
              Hi, I&apos;m&nbsp;
                <Typed strings={
                  names
                } 
                typeSpeed={120}
                backSpeed={70}
                loop
                backDelay={3000}
                style={{
                  textShadow: '0px 0px 8px #cb997e',
                }}
                />
            </Typography>
            <Typography variant="body1" component='div' align="left" color='#e3e3e3' className={styles.myText}>
              <Box>I&apos;m currently a student at the University of New South Wales</Box>
              <Box>studying Computer Science.</Box>
              <Box>I&apos;m highly interested in&nbsp;
                <Typed strings={
                  roles
                } 
                typeSpeed={120}
                backSpeed={30}
                loop
                backDelay={1000}
                style={{
                  textShadow: '0px 0px 10px #cdb4db',
                }}
                /></Box>
            </Typography>
          </Parallax>
        </Box>
      </Parallax>
      <Parallax translateY={[20, -20]} className={styles.projectDiv}>
        <Grid item xs={12} className={styles.imageDiv} style={{ overflow: 'hidden' }}>
          <GameBar skill="JavaScript" level={90} />
          <GameBar skill="Python" level={70} />
          <GameBar skill="C++" level={50} />
        </Grid>
        <Grid item xs={12} className={styles.imageDiv} id="imageDiv" style={{ width: '40%' }}>
        <VerticalCarousel
        slides={slides}
        offsetRadius={offsetRadius}
        animationConfig={animationConfig}
      />
        </Grid>
      </Parallax>
    </main>
    </ParallaxProvider>
  )
}
