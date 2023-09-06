//carousels/Elastic.js
import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import styles from './elasticCarousel.module.css'
import Image from 'next/image';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
const StyledCarousel = styled(Carousel)`
position: relative;
width: 100%;
height: 100% !important;
overflow: hidden;
display: flex;
justify-content: center;
.rec.rec-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    border-radius: 0;
}

.rec.rec-arrow.rec-arrow-right {
    right: 0;
}

.rec.rec-arrow.rec-arrow-left {
    left: 0;
}
.rec.rec-carousel {
    height: 100% !important;
}
.rec.rec-arrow:hover {
    border-radius: 50%;
    scale: 0.95;
}

.rec.rec-arrow:disabled {
    visibility: hidden;
}

.rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px lightgrey;
}
.button.rec-dot {
    background-color: rgb(235, 16, 16);
    box-shadow: 0 0 1px 3px rgba(235, 16, 16, 0.5);
}
    
button.rec-dot:hover, button.rec-dot:active, button.rec-dot:focus  {
    box-shadow: 0 0 1px 3px rgba(235,16,16,0.5);
}
`

export default function ElasticCarousel({ imageUrl, title, details, objectfit } : { imageUrl: string, title: string, details: string, objectfit: string }) {
    const [items, setItems] = useState([
        {id: 1, title: 'item #1', imageUrl: '/SiamWeb.png'},
        {id: 2, title: 'item #2', imageUrl: '/meyd.it.png'},
        {id: 3, title: 'item #3', imageUrl: '/inventoryweb.png'},
    ]);
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];
    const fitting: string = objectfit;
    const paragraphs = details.split('\n').map((paragraph, index) => <p key={index}>{paragraph}</p>);
    return (
        <div className={styles.card}>
        <div className={styles.upperpart}>
            <Image objectFit={objectfit} sizes='100%' layout='fill' className={styles.upperpartface} src={imageUrl} alt='image' />
            <div className={styles.upperpartback}>{paragraphs}</div>
        </div>
        <div className={styles.lowerpart}>
            <div className={styles.lowerpartface}>{title}</div>
            <div className={styles.lowerpartback}><Button>Back Side</Button></div>
        </div>
        </div>
    );
}