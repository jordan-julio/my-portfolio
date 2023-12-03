'use client'
import styles from './page.module.css'
import { Typography, Box } from '@mui/material';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import dynamic from 'next/dynamic';
import Typed from 'react-typed';
import { useEffect, useState } from 'react';
import Contactform from './components/ContactForm';
import ExpItems from './components/ExpItems';
import Blob from './components/blob';

const DynamicLoading = dynamic(() => import('./components/loading'), {
  ssr: false,
});

const DynamicThreeParticleComponent = dynamic(() => import('./components/threeparticle'), {
  ssr: false,
});


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const names = ['Jordan J.', 'JJ.'];
  const roles = ['Cyber Security.', 'Backend.', 'Frontend.']
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Set a condition to change the loading state
    // For example, you can check if certain data is loaded, or just wait for a moment
    const timer = setTimeout(() => setIsLoading(false), 4000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <DynamicLoading />;
  }
  return (
    <ParallaxProvider scrollAxis='vertical'>
      {/**
       * Top Bar and Main Background
       */}
      <button className={styles.fbutton} id='fancy-button'><span>Click Me!</span></button>
      <DynamicThreeParticleComponent />
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
              <Blob />
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
function setIsLoading(arg0: boolean) {
  throw new Error('Function not implemented.');
}

