
'use client'
import Image from 'next/image'
import styles from './blob.module.css'
import { useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';

export default function Blob() {
    useEffect(() => {
        const blobDiv = document.querySelector('#blob') as HTMLDivElement;
        if (blobDiv) {
          const blobCenter = {
            x: blobDiv.offsetLeft + (blobDiv.offsetWidth / 2),
            y: blobDiv.offsetTop + (blobDiv.offsetHeight / 2),
          };
    
          setInterval(() => {
            const bubbleDiv = document.createElement('div');
            bubbleDiv.classList.add(styles['blob-bubble']);
            bubbleDiv.style.width = `${Math.random() * 38}px`;
            bubbleDiv.style.height = bubbleDiv.style.width;
    
            const bubbleStartPos = {
              x: Math.random() * blobDiv.offsetWidth,
              y: Math.random() * blobDiv.offsetHeight,
            };
            
            bubbleDiv.style.left = `${bubbleStartPos.x}px`;
            bubbleDiv.style.top = `${bubbleStartPos.y}px`;
    
            const angle = Math.atan2(bubbleStartPos.y - blobCenter.y, bubbleStartPos.x - blobCenter.x);
            const distance = 200; // This can be adjusted based on how far you want the bubbles to move
    
            const endPos = {
              x: bubbleStartPos.x + distance * Math.cos(angle),
              y: bubbleStartPos.y + distance * Math.sin(angle),
            };
    
            bubbleDiv.style.setProperty('--end-left', `${endPos.x}px`);
            bubbleDiv.style.setProperty('--end-top', `${endPos.y}px`);
    
            blobDiv.appendChild(bubbleDiv);
    
            setTimeout(() => {
              bubbleDiv.remove();
            }, 7000);
          }, 500);
        }
    }, []);
    return (
        <Parallax translateX={[0, -25]}>
            <div id='blob' className={styles.blob}>
              <Image priority src="/profileStandremove.png" alt="blob image" width={1000} height={1000} className={styles.blobImage} />
            </div>
        </Parallax>
    );
}