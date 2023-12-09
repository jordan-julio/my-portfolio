'use client'
import styles from './page.module.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Spotify from './Spotify';


const DynamicLoading = dynamic(() => import('../components/loading'), {
  ssr: false,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <DynamicLoading />;
  }

  return (
    <ParallaxProvider scrollAxis='vertical'>
      <main className={`${styles.root} ${styles.fadein}`}>
        {/*
        * Spotify while yellow red buttons
        */}
        <Box className={styles.firstDiv}></Box>
        <Box className={styles.secondDiv}>
          <Spotify />
        </Box>
      </main>
    </ParallaxProvider>
  )
}
