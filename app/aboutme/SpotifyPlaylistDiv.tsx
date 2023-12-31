'use Client'
import axios from "axios";
import { useToken } from "./Spotify";
import { useEffect, useState } from "react";
import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import Image from "next/image";
import styles from "./SpotifyPlaylistDiv.module.css";

export default function SpotifyPlaylistDiv() {
    const token = useToken();
    const [data, setData] = useState({
        items: [],
    });
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
            setData(response.data);
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
        getSpotifyUserPlaylists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);
    
    return (
        <>
            <div style={{ overflowY: 'scroll', minHeight: '67%', maxHeight: '65%', borderRadius: '15px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <Button onClick={getSpotifyUserPlaylists}>Get Spotify User Playlist</Button>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ width: '95%', marginLeft: '0px', display: 'flex', alignItems: 'center', height: '100%', margin: 'auto' }}>
                        {data?.items && data?.items.map((item: any) => {
                            return (
                                <Grid xs={6} xl={12} key={item.id} style={{ margin: '10px', maxWidth: '46%', justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div key={item.id} style={{ width: '100%', padding: '10px', border: '1px solid black' }}><Image src={item.images[0].url} alt="imageCover" layout="fill" objectFit="cover" className={styles.imageAlbum} />{item.name}</div>
                                </Grid>
                            )
                        })}
                </Grid>
            </div>
        </>
    )
}