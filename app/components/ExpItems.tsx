import { Grid } from "@mui/material";
import ElasticCarousel from "./elasticCarousel";

const slides = [
    { key: 1,
      content: 'Siam Savvy (Web Developer Intern)',
      image: '/SiamWeb.png',
      details: `+ Worked as a Wix Developer Intern.\n+ Created a Tour & Travel Website.`,
      objectfit: 'unset',
      linkText: 'Visit Website',
    },
    { key: 2, 
      content: 'Meyd.it (Full Stack Developer Intern)', 
      image: '/meydit.png', 
      details: '+ Worked as a Full Stack Developer Intern.\n+ Created a Fashion Website for a Startup Company (Meyd.it).\n+ Used AdonisJS, NextJS, and PostgreSQL.', 
      objectfit: 'unset',
      linkText: 'Visit Website',
    },
    { key: 3, 
      content: 'Inventory System with POS (Personal Project)', 
      image: '/inventoryweb.png', 
      details: '+ Created an Inventory System with POS.\n + Used Laravel and Phpmyadmin.', 
      objectfit: 'unset',
      linkText: 'Visit Website',
    },
    { key: 4, 
      content: 'C Language', 
      image: '/CLogo.png', 
      details: '+ Experience in C language from university courses, and competitive programming.', 
      objectfit: 'contain',
      linkText: 'C documentation',
    },
    { key: 5, 
      content: 'JavaScript', 
      image: '/JSLogo.png', 
      details: '+ Several Interns and Projects using JavaScript.\n + Used in University Courses.', 
      objectfit: 'contain',
      linkText: 'JS documentation',
    },
    { key: 6, 
      content: 'TypeScript',
      image: '/tsLogo.png', 
      details: '+ Experience in TypeScript from university courses.\n + Used to make this portfolio and Meyd.it Intern.', 
      objectfit: 'unset',
      linkText: 'TS documentation',
    },
    { key: 7, 
      content: 'Python Language', 
      image: '/PythonLogo.png', 
      details: '+ My first and preferred programming language for competitive programming.\n + Used in University Courses.', 
      objectfit: 'unset',
      linkText: 'Python documentation',
    },
    { key: 8, 
      content: 'React', 
      image: '/reactLogo.png', 
      details: '+ Several Github Projects and Intern using React.', 
      objectfit: 'contain',
      linkText: 'React documentation',
    },
    { key: 9, 
      content: 'NextJS', 
      image: '/next.svg', 
      details: '+ This Portfolio and Meyd.it Intern using NextJS.', 
      objectfit: 'unset',
      linkText: 'NextJS documentation',
    },
    { key: 10, 
      content: 'IYCL Mekari Competition Rank #23', 
      image: '/iycl.png', 
      details: '+ Participated in IYCL Mekari Competition\n + Achieved Rank #23.', 
      objectfit: 'contain',
      linkText: 'Check Certificate',
    },
    { key: 11, 
      content: 'Silver Standard IAYP', 
      image: '/iayp.jpg', 
      details: '+ Achieved Silver Standard for International Award for Young People.', 
      objectfit: 'unset',
      linkText: 'Check Certificate',
    },
  ];

export default function ExpItems() {

    return (
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
                    <ElasticCarousel linkTextBack={item.linkText} objectfit={item.objectfit} key={item.key} imageUrl={item.image} title={item.content} details={item.details} />
                </Grid>
            ))}
        </Grid>
    );
}