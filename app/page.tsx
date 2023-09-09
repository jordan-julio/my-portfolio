'use client'
import styles from './page.module.css'
import { Grid, Typography, Box } from '@mui/material';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import dynamic from 'next/dynamic';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import { useEffect } from 'react';
import ThreeParticleComponent from './components/threeparticle';
import ElasticCarousel from './components/elasticCarousel';
import FancyButton from './components/fancyButton';
import Contactform from './components/ContactForm';

const slides = [
  { key: 1,
    content: 'Siam Savvy (Web Developer Intern)',
    image: '/SiamWeb.png',
    details: `+ Worked as a Wix Developer Intern.\n+ Created a Tour & Travel Website.`,
    objectfit: 'unset' 
  },
  { key: 2, 
    content: 'Meyd.it (Full Stack Developer Intern)', 
    image: '/meydit.png', 
    details: '+ Worked as a Full Stack Developer Intern.\n+ Created a Fashion Website for a Startup Company (Meyd.it).\n+ Used AdonisJS, NextJS, and PostgreSQL.', 
    objectfit: 'unset'
  },
  { key: 3, 
    content: 'Inventory System with POS (Personal Project)', 
    image: '/inventoryweb.png', 
    details: '+ Created an Inventory System with POS.\n + Used Laravel and Phpmyadmin.', 
    objectfit: 'unset'
  },
  { key: 4, 
    content: 'C Language', 
    image: '/CLogo.png', 
    details: '+ Experience in C language from university courses, and competitive programming.', 
    objectfit: 'contain'
  },
  { key: 5, 
    content: 'JavaScript', 
    image: '/JSLogo.png', 
    details: '+ Several Interns and Projects using JavaScript.\n + Used in University Courses.', 
    objectfit: 'contain'
  },
  { key: 6, 
    content: 'TypeScript',
    image: '/tsLogo.png', 
    details: '+ Experience in TypeScript from university courses.\n + Used to make this portfolio and Meyd.it Intern.', 
    objectfit: 'unset'
  },
  { key: 7, 
    content: 'Python Language', 
    image: '/PythonLogo.png', 
    details: '+ My first and preferred programming language for competitive programming.\n + Used in University Courses.', 
    objectfit: 'unset'
  },
  { key: 8, 
    content: 'React', 
    image: '/reactLogo.png', 
    details: '+ Several Github Projects and Intern using React.', 
    objectfit: 'contain'
  },
  { key: 9, 
    content: 'NextJS', 
    image: '/next.svg', 
    details: '+ This Portfolio and Meyd.it Intern using NextJS.', 
    objectfit: 'unset'
  },
  { key: 10, 
    content: 'IYCL Mekari Competition Rank #23', 
    image: '/iycl.png', 
    details: '+ Participated in IYCL Mekari Competition\n + Achieved Rank #23.', 
    objectfit: 'contain'
  },
  { key: 11, 
    content: 'Silver Standard IAYP', 
    image: '/iayp.jpg', 
    details: '+ Achieved Silver Standard for International Award for Young People.', 
    objectfit: 'unset'
  },
];
const DynamicNavbar = dynamic(() => import('./components/navbar'), {
  ssr: false,
});

const DynamicBlob = dynamic(() => import('./components/blob'), {
  ssr: false,
});

export default function Home() {
  const names = ['Jordan J.', 'JJ.'];
  const roles = ['Cyber Security.', 'Backend.', 'Frontend.']


  useEffect(() => {
    let details = window.navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    let isMobileDevice = regexp.test(details);
  
    if (isMobileDevice) {
      const imageDiv = document.querySelector("#imageDiv") as HTMLDivElement;
      if (imageDiv) {
        imageDiv.style.setProperty('display', 'none');
      }
    }
  }, []);
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ParallaxProvider scrollAxis='vertical'>
            <DynamicNavbar />
        <ThreeParticleComponent />
        <main className={`${styles.root} ${styles.fadein}`}>
      <Parallax translate='yes' translateY={[-25,25]}>
        {/**
         * https://github.com/klevron/threejs-toys
         */}
         <div className={styles.outerDiv}>
        <div className={styles.textDiv}>
            <div className={styles.innerTextDiv}>
            <Typography variant="h3" align="left" color='#e3e3e3' className={styles.textName}>
              Hi, I&apos;m&nbsp;
                <Typed strings={
                  names
                } 
                typeSpeed={100}
                backSpeed={70}
                loop
                backDelay={3000}
                style={{
                  textShadow: '0px 0px 8px #cb997e',
                }}
                />
            </Typography>
            <Typography variant="body1" component='div' align="left" color='#e3e3e3' className={styles.myText}>
              <Box>I&apos;m currently a Computer Science student at the University of New South Wales.</Box>
              <Box>I&apos;m interested in&nbsp;
                <Typed strings={
                  roles
                } 
                typeSpeed={90}
                backSpeed={30}
                loop
                backDelay={1000}
                style={{
                  textShadow: '0px 0px 10px #cdb4db',
                }}
                /></Box>
            </Typography>
            </div>
        </div>
        <Box className={styles.imageDiv}>
          <DynamicBlob />
        </Box>
        </div>
        <div style={{ 
          height: '20dvh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <FancyButton ButtonText='SHIFT COLORS'/>
        </div>
      </Parallax>
      <div className={styles.projectDiv} style={{ padding: '20px' }}>
        <Typography variant="h3" align="left" color='#e3e3e3' style={{
          width: '100%',
          marginBottom: '20px',
          textAlign: 'center',
        }}>
            Experiences, Skills, and Achievements
          </Typography>
          <Grid container spacing={1} rowSpacing={6} columnSpacing={1}>
  {slides.map((item) => (
    <Grid 
      item 
      key={item.key} 
      xs={12}  // Extra small screen, 1 item per row
      sm={6}   // Small screen, 2 items per row
      md={4}   // Medium and up, 3 items per row
      lg={4}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
        <ElasticCarousel objectfit={item.objectfit} key={item.key} imageUrl={item.image} title={item.content} details={item.details} />
    </Grid>
  ))}
</Grid>

      </div>
      <Parallax className={styles.contact}>
        <Contactform />
      </Parallax>
      </main>
    </ParallaxProvider>
  )
}
