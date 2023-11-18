'use client'

import { Card, Display, Image, LargeTitle, shorthands, Title3, makeStyles, Title2, Title1, Subtitle1 } from '@fluentui/react-components'
import { Caveat, Karla } from 'next/font/google'
import { imageBuild } from '../../public/data/imageBuilt'
import ReactTyped from 'react-typed'
import * as THREE from 'three';
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";

const caveat = Caveat({ subsets: ['latin'] })
const karla = Karla({ subsets: ['latin'] })

const useStyles = makeStyles({
  buildImage: {
    backgroundColor: 'white',
    color: 'black',
  },
  '> :not(:last-child)': {
    marginRight: '5em',
  },
  container: {
    ...shorthands.gap("1em"),
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    justifyContent: 'center'
  },
  gap: {
    '> :not(:last-child)': {
      marginRight: '5em',
    }
  }
})


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
    const yAngle = mix(
      degreesToRadians(80),
      degreesToRadians(100),
      Math.random()
    );
    const xAngle = degreesToRadians(360) * p;
    ref.current.position.setFromSphericalCoords(distance, yAngle, xAngle);
  });

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
  const yAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [0.001, degreesToRadians(180)]
  );
  const distance = useTransform(scrollYProgress, [0, 1], [10, 3]);
  const time = useTime();

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      time.get() * 0.0005
    );
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
  const styles = useStyles()
  const name = <LargeTitle style={caveat.style}>Fitriana</LargeTitle>

  return (
    <div >
      <div style={{ marginBottom: '5em', height: '90vh', paddingRight: '5em', display: 'flex', justifyContent: 'space-between', }}>
        <div style={{ width: '100%', zIndex: 100 }}>
          <Canvas gl={{ antialias: false }}>
            <Scene />
          </Canvas>
        </div>
        <div style={{ width: '40%' }} className={styles.container} >
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
          <Subtitle1 align='justify' style={karla.style}>I am very interested in the development of technology, especially in website development. That's why from the beginning, I decided to learn and work according to my passion and interests. I know that the advancement of technology is limitless, so the new things I have been learning include React.js, PHP, Express.js, PostgreSQL, MySQL, Firebase, and Next.js. I hope to gain new experiences and learnings if given the opportunity.</Subtitle1>
        </div>
      </div>

      <div className={styles.buildImage} style={{ borderTopRightRadius: '5em', borderTopLeftRadius: '5em', paddingTop: '2em', paddingBottom: '2em' }}>
        <div style={{ paddingInline: '5em', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1em' }}>
          <Title3 style={caveat.style}>This website is built with</Title3>
        </div>
        <div style={{ paddingInline: '5em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {imageBuild.flatMap((item, index) => {
            return (
              <div className={styles.gap}>
                <Image style={{ height: 100, width: 200, paddingLeft: item?.style }} fit='contain' src={item.logo} key={index} />
              </div>
            )
          })}
        </div>
      </ div>
    </div >
  )
}
