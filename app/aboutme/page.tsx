'use client'
import styles from './page.module.css'
import { Grid, Typography, Box } from '@mui/material';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import dynamic from 'next/dynamic';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import { config } from 'react-spring';
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import ThreeParticleComponent from '../components/threeparticle';
import ElasticCarousel from '../components/elasticCarousel';
import FancyButton from '../components/fancyButton';
import ListItem from '@mui/material/ListItem';

const slides = [
  { key: 1, content: 'Siam Savvy (Web Developer Intern)', image: '/SiamWeb.png', details: '', objectfit: 'unset' },
  { key: 2, content: 'Meyd.it (Full Stack Developer Intern)', image: '/Meyd.it.png', details: '', objectfit: 'unset'},
  { key: 3, content: 'Inventory System with POS (Personal Project)', image: '/inventoryweb.png', details: '', objectfit: 'unset'},
  { key: 4, content: 'C Language', image: '/CLogo.png', details: '', objectfit: 'contain'},
  { key: 5, content: 'JavaScript', image: '/JSLogo.png', details: '', objectfit: 'contain'},
  { key: 6, content: 'TypeScript', image: '/tsLogo.png', details: '', objectfit: 'unset'},
  { key: 7, content: 'Python Language', image: '/PythonLogo.png', details: '', objectfit: 'unset'},
  { key: 8, content: 'React', image: '/reactLogo.png', details: '', objectfit: 'contain'},
  { key: 9, content: 'NextJS', image: '/next.svg', details: '', objectfit: 'unset'},
  { key: 10, content: 'IYCL Mekari Competition Rank #23', image: '/iycl.png', details: '', objectfit: 'contain'},
  { key: 11, content: 'Silver Standard IAYP', image: '/iayp.jpg', details: '', objectfit: 'unset'},
];
const DynamicNavbar = dynamic(() => import('../components/navbar'), {
  ssr: false,
});

const DynamicBlob = dynamic(() => import('../components/blob'), {
  ssr: false,
});

export default function Home() {
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [animationConfig, setAnimationConfig] = useState(config.gentle);
  const names = ['Jordan J.', 'JJ.'];
  const roles = ['Cyber Security.', 'Backend.', 'Frontend.']

  let details = window.navigator.userAgent
  let regexp = /android|iphone|kindle|ipad/i;
  let isMobileDevice = regexp.test(details);

  useEffect(() => {
    if (isMobileDevice) {
      const imageDiv = document.querySelector("#imageDiv") as HTMLDivElement;
      if (imageDiv) {
        imageDiv.style.setProperty('display', 'none');
      }
    }
  }, [isMobileDevice]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ParallaxProvider>
      <ThreeParticleComponent />
      <main className={styles.root}>
      <DynamicNavbar />
      <Parallax translate='yes' translateY={[-25,25]}>
        {/**
         * https://github.com/klevron/threejs-toys
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
        <div style={{ 
          height: '20dvh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <FancyButton ButtonText='SHIFT COLORS'/>
        </div>
      </Parallax>
      <div className={styles.projectDiv} style={{ padding: '20px' }}>
        <Typography variant="h3" align="left" color='#e3e3e3' style={{
          width: '100%',
          marginBottom: '20px'
        }}>
            Experiences, Skills, and Achievements
          </Typography>
          <Grid container rowSpacing={1} columns={{ xs: 4, sm: 8, md: 12 }} className={styles.gridprojects}>
            {slides.map((item) => (
              <Grid xs={4} sm={4} md={4} key={item.key} style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <ListItem alignItems='center' style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}>
              <ElasticCarousel objectfit={item.objectfit} key={item.key} imageUrl={item.image} title={item.content} details={item.details} />
              </ListItem>
            </Grid>
            ))}
          </Grid>
      </div>
      <Parallax className={styles.contact}>

      </Parallax>
    </main>
    </ParallaxProvider>
  )
}
