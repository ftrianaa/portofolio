'use client';

import { Card, Display, Image, LargeTitle, shorthands, Title3, makeStyles, Title1, Subtitle1 } from '@fluentui/react-components';
import { Caveat, Karla } from 'next/font/google';
import { imageBuild } from '../../public/data/imageBuilt';
import ReactTyped from 'react-typed';
import * as THREE from 'three';
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";

const caveat = Caveat({ subsets: ['latin'] });
const karla = Karla({ subsets: ['latin'] });

const useStyles = makeStyles({
  buildImage: {
    backgroundColor: 'white',
    color: 'black',
    borderTopRightRadius: '5em',
    borderTopLeftRadius: '5em',
    paddingTop: '2em',
    paddingBottom: '2em',
  },
  container: {
    ...shorthands.gap("1em"),
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    justifyContent: "center",
    "@media (max-width: 768px)": {
      padding: "0 2em", // Adjust padding for smaller screens
    },
  },
  gap: {
    '> :not(:last-child)': {
      marginRight: '5em',
    },
    '@media (max-width: 768px)': {
      flexDirection: "column", // Stack items on smaller screens
      alignItems: "center",
      '> :not(:last-child)': {
        marginRight: '0',
      },
    }
  },
  starContainer: {
    height: '90vh',
    marginBottom: '5em',
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 768px)': {
      flexDirection: 'column', // Stack on smaller screens
      alignItems: 'center',
      height: 'auto', // Adjust height for mobile
    },
  },
  canvasWrapper: {
    width: '60%',
    zIndex: 100,
    '@media (max-width: 768px)': {
      height: '50vh', // Adjust height for mobile
    },
  },
  textWrapper: {
    width: '40%',
    '@media (max-width: 768px)': {
      width: '100%', // Full width on mobile
      textAlign: 'center', // Center text on mobile
    },
  },
  containerImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    flexWrap: 'wrap', // Allows images to wrap to the next line
    gap: '2em', // Adds space between items
    padding: '0 5em',
    '@media (max-width: 768px)': {
      padding: '0 2em',
    },
  },
  gapImage: {
    flex: '1 1 150px', // Flex-grow, flex-shrink, and flex-basis for responsive resizing
    maxWidth: '200px', // Maximum width for each item
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    '@media (max-width: 768px)': {
      maxWidth: '150px', // Adjust maximum width on smaller screens
    },
    '@media (max-width: 480px)': {
      maxWidth: '100px', // Further reduce on extra small screens
    }
  },
  image: {
    width: '100%', // Makes the image take up the full width of its container
    height: 'auto', // Maintains the aspect ratio
    objectFit: 'contain', // Ensures image fits without cropping
  },
});

const color = "white";

const Icosahedron = () => (
  <mesh rotation-x={0.35}>
    <icosahedronGeometry args={[1, 0]} />
    <meshBasicMaterial wireframe color={color} />
  </mesh>
);

const Star = ({ p }) => {
  const ref = useRef();

  useLayoutEffect(() => {
    const distance = mix(2, 3.5, Math.random());
    const yAngle = mix(degreesToRadians(80), degreesToRadians(100), Math.random());
    const xAngle = degreesToRadians(360) * p;
    ref.current.position.setFromSphericalCoords(distance, yAngle, xAngle);
  }, [p]);

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.05, 0.05, 0.05]} />
      <meshBasicMaterial wireframe color={color} />
    </mesh>
  );
};

function Scene({ numStars = 100 }) {
  const gl = useThree((state) => state.gl);
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(scrollYProgress, [0, 1], [0.001, degreesToRadians(180)]);
  const distance = useTransform(scrollYProgress, [0, 1], [10, 3]);
  const time = useTime();

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(distance.get(), yAngle.get(), time.get() * 0.0005);
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  useLayoutEffect(() => gl.setPixelRatio(0.3));

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Star p={progress(0, numStars, i)} key={i} />);
  }

  return (
    <>
      <Icosahedron />
      {stars}
    </>
  );
}

export default function Home() {
  const styles = useStyles();
  const name = <LargeTitle style={caveat.style}>Fitriana</LargeTitle>;

  return (
    <div>
      <div className={styles.starContainer}>
        <div className={styles.canvasWrapper}>
          <Canvas gl={{ antialias: false }}>
            <Scene />
          </Canvas>
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.container} style={{ marginBottom: '3em' }}>
            <LargeTitle style={karla.style}>Welcome to my site!</LargeTitle>
            <Title1 style={karla.style}>Hi, I'm {name} as {' '}
              <ReactTyped
                strings={["Front-end Developer", "Back-end Developer", "Full-stack Developer"]}
                typeSpeed={100}
                loop
                backSpeed={20}
                showCursor={true}
              />
            </Title1>
          </div>
          <Subtitle1 align='justify' style={karla.style}>
            I am very interested in the development of technology, especially in website development. That's why from the beginning, I decided to learn and work according to my passion and interests. I know that the advancement of technology is limitless, so the new things I have been learning include React.js, PHP, Express.js, PostgreSQL, MySQL, Firebase, and Next.js. I hope to gain new experiences and learnings if given the opportunity.
          </Subtitle1>
        </div>
      </div>

      <div className={styles.buildImage}>
        <div style={{ paddingInline: '5em', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1em' }}>
          <Title3 style={caveat.style}>This website is built with</Title3>
        </div>
        <div className={styles.containerImage}>
          {imageBuild.flatMap((item, index) => {
            return (
              <div className={styles.gapImage} key={index}>
                <Image className={styles.image} src={item.logo} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
