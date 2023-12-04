//carousels/Elastic.js
'use client';
import React, { useEffect, useRef } from 'react';
import Carousel from 'react-elastic-carousel';
import styles from './elasticCarousel.module.css'
import Image from "next/image";
import styled from 'styled-components';
import Link from 'next/link';
import { Button } from '@mui/material';
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

export default function ElasticCarousel({ imageUrl, title, details, objectfit, linkTextBack, link } : { imageUrl: string, title: string, details: string, objectfit: string, linkTextBack: string, link: string }) {
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (imgRef.current) {
            imgRef.current.style.objectFit = objectfit;
        }
    }, [objectfit]);
    const titles = title.split('\n').map((titlea, index) => <p key={index}>{titlea}</p>);
    const paragraphs = details.split('\n').map((paragraph, index) => <p key={index}>{paragraph}</p>);
    return (
        <div className={styles.card}>
        <div className={styles.upperpart}>
            <Image
            ref={imgRef}
            quality={100}
            fill
            sizes='50vw'
            className={styles.upperpartface}
            src={imageUrl}
            alt='image'
            />
            <div className={styles.upperpartback}>{paragraphs}</div>
        </div>
        <div className={styles.lowerpart}>
            <div className={styles.lowerpartface}>{titles}</div>
            <div className={styles.lowerpartback}><Link href={link}><button className={styles.pushable} style={{
                width: '100%',
            }}><span className={styles.shadow}></span>
            <span className={styles.edge}></span>
            <span className={styles.front}>{linkTextBack}</span></button></Link></div>
        </div>
        </div>
    );
}