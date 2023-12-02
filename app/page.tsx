'use client'
import styles from './page.module.css'
import { Typography, Box } from '@mui/material';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import dynamic from 'next/dynamic';
import Typed from 'react-typed';
import { useEffect } from 'react';
import ThreeParticleComponent from './components/threeparticle';
import Contactform from './components/ContactForm';
import ExpItems from './components/ExpItems';

const DynamicNavbar = dynamic(() => import('./components/navbar'), {
  ssr: false,
});

const DynamicBlob = dynamic(() => import('./components/blob'), {
  ssr: false,
});

export default function Home() {
  const names = ['Jordan J.', 'JJ.'];
  const roles = ['Cyber Security.', 'Backend.', 'Frontend.']
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ParallaxProvider scrollAxis='vertical'>
      {/**
       * Top Bar and Main Background
       */}
      <button className={styles.fbutton} id='fancy-button'><span>Click Me!</span></button>
      <ThreeParticleComponent />
      <DynamicNavbar />
      <main className={`${styles.root} ${styles.fadein}`}>
        <Parallax translate='yes' translateY={[-30,30]}>
        {/**
        * https://github.com/klevron/threejs-toys
        * First Section, Avatar and Self-Intro
        */}
          <div className={styles.outerDiv}>
            <div className={styles.textDiv}>
              <div className={styles.innerTextDiv}>
                <Typography variant="h3" align="left" color='#e3e3e3' className={styles.textName}>
                  Hi, I&apos;m&nbsp;
                    <Typed strings={
                      names
                    } 
                    typeSpeed={100}
                    backSpeed={70}
                    loop
                    backDelay={3000}
                    style={{
                      textShadow: '0px 0px 8px #cb997e',
                    }}
                    />
                </Typography>
                <Typography variant="body1" component='div' align="left" color='#e3e3e3' className={styles.myText}>
                  <Box>I&apos;m currently a Computer Science student at the University of New South Wales.</Box>
                  <Box>I&apos;m interested in&nbsp;
                  <Typed strings={
                    roles
                  } 
                  typeSpeed={90}
                  backSpeed={30}
                  loop
                  backDelay={1000}
                  style={{
                    textShadow: '0px 0px 10px #cdb4db',
                  }}
                  /></Box>
                </Typography>
              </div>
            </div>
            <Box className={styles.imageDiv}>
              <DynamicBlob />
            </Box>
          </div>
        </Parallax>
        {/**
        * Experiences, Skills, and Achievements Section
        */}
        <div className={styles.projectDiv} style={{ padding: '20px' }}>
          <Typography variant="h3" align="left" color='#e3e3e3' style={{
            width: '100%',
            marginBottom: '20px',
            textAlign: 'center',
          }}>
            Experiences, Skills, and Achievements
          </Typography>
          <ExpItems />
        </div>
        {/**
        * Contact Form Need To Modify Alert Page
        */}
        <Parallax className={styles.contact}>
          <Contactform />
        </Parallax>
      </main>
    </ParallaxProvider>
  )
}
