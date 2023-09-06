
'use client'
import Image from 'next/image'
import styles from './blob.module.css'
import { useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';

export default function Blob() {

    return (
        <Parallax style={{ width: '100%' }} className={styles.outerLogo}>
              <Image priority src="/profileStandremove.png" alt="blob image" width={1000} height={1000} className={styles.blobImage} />
        </Parallax>
    );
}