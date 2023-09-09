'use client'
import { useEffect, useState } from 'react';
import styles from './loading.module.css';


export default function Loading() {

    return (
        <div style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 9999,
            width: '100vw',
            height: '100vh',
        }} className={styles.changeToTransparent}>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw',
        }} className={styles.slideinout}>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.box}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.box}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.box}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        </div>
    )
}