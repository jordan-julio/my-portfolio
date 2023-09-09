'use client'
import styles from './page.module.css'
import { usePathname, useSearchParams } from 'next/navigation';
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
import Loading from '../components/loading';

const DynamicNavbar = dynamic(() => import('../components/navbar'), {
  ssr: false,
});


export default function Home() {
  return (
    <ParallaxProvider>
      <DynamicNavbar />
      <main className={`${styles.root}${styles.fadein}`}>
      </main>
    </ParallaxProvider>
  )
}
