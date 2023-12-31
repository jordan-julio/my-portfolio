
'use client'
import Image from "next/image";
import styles from './blob.module.css'
import { useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';

export default function Blob() {

    return (
        <Parallax style={{ width: '100%', position: 'relative' }} className={styles.outerLogo}>
              <Image priority src="/hdProfileRemoved.png" alt="blob image" fill={true} className={styles.blobImage} />
        </Parallax>
    );
}