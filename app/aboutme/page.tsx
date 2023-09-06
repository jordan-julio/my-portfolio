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
  return (
    <ParallaxProvider>
      <ThreeParticleComponent />
      <main className={styles.root}>
        <DynamicNavbar />
      </main>
    </ParallaxProvider>
  )
}
