'use client';
import styles from './page.module.css'
import { Box, Button, List, ListItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import FancyButton from '../components/fancyButton';
import axios from 'axios';
import SpotifyPlaylistDiv from './SpotifyPlaylistDiv';

export function useToken() {
    const [token, setToken] = useState('');
    // ... rest of the code
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
    return token;
}


function Spotify() {
    const token = useToken();
    const type = 'tracks';
    const [currentlyPlaying, setCurrentlyPlaying] = useState({});
    const [recentlyPlayed, setRecentlyPlayed] = useState({});
    const [topItems, setTopItems] = useState({});

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
            setCurrentlyPlaying(response);
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
            setRecentlyPlayed(response);
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
            setTopItems(response);
        })
        .catch(error => {
        console.log(error);
        });
    }

    const getSpotifyUserPlaylists = () => {
        const config = {
        method: 'get',
        url: 'https://api.spotify.com/v1/me/playlists',
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
        /* When you call me/playlists we get each albums data, we can call the href inside each items to get the tracks of an album
            if album contains 100 tracks, we can call the "next" url inside the tracks object to get the next 100 tracks
        const config1 = {
        method: 'get',
        url: 'https://api.spotify.com/v1/playlists/71WJIlYSbcHeuj7uyz99n6/tracks',
        headers: { 
            'Authorization': `Bearer ${token}`
        },
        }
        axios(config1).then(response => {
            console.log(response);
        }
        ).catch(error => {
            console.log(error);
        }); */

    };

    useEffect(() => {
        console.log(currentlyPlaying);
        console.log(recentlyPlayed);
        console.log(topItems);
    }, [currentlyPlaying, recentlyPlayed, topItems, type]);

    return (
        <>
            <Box className={styles.spotifyDiv}>
                <Box sx={{ 
                    height: '28%',
                    width: '95%',
                    borderRadius: '15px',
                    backgroundColor: '#212121',
                    padding: '30px',
                    overflow: 'hidden',
                    justifyContent: 'space-around' 
                }}>
                    <Image src='/spotify.svg' width={400} height={100} alt={'Spotify logo'} 
                            style={{ 
                                width: '50%', 
                                height: 'auto', 
                                objectFit: 'scale-down' 
                            }}
                    />  
                    <Typography fontFamily={'sans-serif'} color={'#2dbd59'} fontSize={'2.5rem'}>
                        Jordan Julio J.
                    </Typography>
                </Box>
                <Box sx={{
                    height: '68%',
                    width: '95%',
                    borderRadius: '15px', 
                    backgroundColor: '#212121' 
                }}>
                    <FancyButton onClick={getSpotifyCurrentlyPlaying} ButtonText='Go To Jordan&apos;s Profile' />
                </Box>
            </Box>
            {/** Recently Played default can change to top songs */}
            <Box className={styles.spotifyDivTwo}>
                <Box sx={{ height: '97%', width: '95%', borderRadius: '15px', backgroundColor: '#212121' }}>
                    <Box style={{ minHeight: '27%', margin: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <div>
                            {/** IMAGE Album */}
                            <Image src={'/spotify.svg'} width={100} height={100} alt={'Spotify logo'} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', }}>
                            {/** Details */}
                            <p>Playlist</p>
                            <h4>Album Name</h4>
                            <p>Made By Me, # of songs, total playtime</p>
                        </div>
                    </Box>
                    <SpotifyPlaylistDiv />
                </Box>
                </Box>
                {/** Now Playing */}
                <Box className={styles.spotifyDivThree}>
                <Box style={{ position: 'relative', top: '-25px', right: '0', width: '100%' }}>
                    <Box style={{ 
                        position: 'absolute',
                        right: '10px',
                        background: 'red',
                        width: '17px',
                        height: '17px',
                        borderRadius: '50%'
                    }}></Box>
                    <Box style={{ 
                        position: 'absolute', 
                        right: '40px', 
                        background: 'yellow', 
                        width: '17px', 
                        height: '17px', 
                        borderRadius: '50%' 
                    }}></Box>
                    <Box style={{ 
                        position: 'absolute', 
                        right: '70px', 
                        background: 'grey',
                        width: '17px', 
                        height: '17px',
                        borderRadius: '50%' 
                    }}></Box>
                </Box>
                <Box sx={{ 
                    height: '97%',
                    width: '95%',
                    borderRadius: '15px',
                    backgroundColor: '#212121',
                    overflowY: 'visible' 
                }}>
                    <FancyButton onClick={getSpotifyTopItems} ButtonText='Get Spotify Top Items' />
                    <FancyButton onClick={getSpotifyRecentlyPlayed} ButtonText='Get Recently Played' />
                </Box>
            </Box>
        </>
    );
}

export default Spotify;