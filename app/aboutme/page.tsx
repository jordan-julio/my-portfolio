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

const DynamicNavbar = dynamic(() => import('../components/navbar'), {
  ssr: false,
});


export default function Home() {
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [animationConfig, setAnimationConfig] = useState(config.gentle);
  const names = ['Jordan J.', 'JJ.'];
  const roles = ['Cyber Security.', 'Backend.', 'Frontend.']
  return (
    <ParallaxProvider>
      <ThreeParticleComponent />
      <main className={styles.root}>
        <DynamicNavbar />
      </main>
    </ParallaxProvider>
  )
}
