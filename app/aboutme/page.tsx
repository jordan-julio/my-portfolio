'use client'
import styles from './page.module.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Typography } from '@mui/material';
import qs from 'qs';
import Image from 'next/image';
import FancyButton from '../components/fancyButton';

const DynamicNavbar = dynamic(() => import('../components/navbar'), {
  ssr: false,
});


export default function Home() {
  const [token, setToken] = useState('');
  const [type, setType] = useState('tracks');
  useEffect(() => {
    const getAccessToken = async () => {
      const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;
     
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENTID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENTSECRET}`
          ).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: refresh_token || '',
        }).toString(),
      });
     
      return response.json();
    };
    getAccessToken().then((data) => {
      setToken(data.access_token);
    })
  }, []);

  const getSpotifyCurrentlyPlaying = () => {
    const config = {
      method: 'get',
      url: 'https://api.spotify.com/v1/me/player/currently-playing',
      headers: { 
        'Authorization': `Bearer ${token}`
      }
    };
    axios(config)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

  const getSpotifyRecentlyPlayed = () => {
    const config = {
      method: 'get',
      url: 'https://api.spotify.com/v1/me/player/recently-played',
      headers: { 
        'Authorization': `Bearer ${token}`
      },
      body: {
        limit: '10',
      }
    };
    axios(config)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

  const getSpotifyTopItems = () => {
    const config = {
      method: 'get',
      url: `https://api.spotify.com/v1/me/top/${type}`,
      headers: { 
        'Authorization': `Bearer ${token}`
      },
      body: {
        limit: '10',
      }
    };
    axios(config)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <ParallaxProvider>
      <DynamicNavbar />
      <main className={`${styles.root}${styles.fadein}`}>
        <div style={{ display: 'flex', flexDirection: 'row', height: '100dvh', minHeight: '1000px', overflow: 'hidden' }}>
          <div style={{ 
            display: 'flex',
            width: '30%',
            height: '100%',
            background: '#e9e9e9',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            borderTopLeftRadius: '15px',
            borderBottomLeftRadius: '15px',
            marginLeft: '20px',
            marginTop: '20px',
            padding: '10px',
          }}>
            <Box sx={{ height: '28%', width: '95%', borderRadius: '15px', backgroundColor: '#212121', padding: '30px', overflow: 'hidden', justifyContent: 'space-around' }}>
              <Image src='/spotify.svg' width={400} height={100} alt={'Spotify logo'} style={{ width: '50%', height: 'auto', objectFit: 'scale-down' }}/>  
              <Typography fontFamily={'sans-serif'} color={'#2dbd59'} fontSize={'2.5rem'}>Jordan Julio J.</Typography>
              <FancyButton onClick={getSpotifyCurrentlyPlaying} ButtonText='Go To Jordan&apos;s Profile' />
            </Box>
            <Box sx={{ height: '68%', width: '95%', borderRadius: '15px', backgroundColor: '#212121' }}>
              
            </Box>
          </div>
          {/** Recently Played default can change to top songs */}
          <div style={{
            display: 'flex',
            width: '45%',
            height: '100%',
            background: '#e9e9e9',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: '20px',
            paddingTop: '10px',
            paddingBottom: '10px',
          }}>
            <Box sx={{ height: '97%', width: '95%', borderRadius: '15px', backgroundColor: '#212121' }}>

            </Box>
          </div>
          {/** Now Playing */}
          <div style={{
            display: 'flex',
            width: '25%',
            height: '100%',
            background: '#e9e9e9',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            borderTopRightRadius: '15px',
            borderBottomRightRadius: '15px',
            marginRight: '20px',
            marginTop: '20px',
            padding: '10px',
          }}>
            <Box sx={{ height: '97%', width: '95%', borderRadius: '15px', backgroundColor: '#212121' }}>

            </Box>
          </div>
        </div>
      </main>
    </ParallaxProvider>
  )
}
