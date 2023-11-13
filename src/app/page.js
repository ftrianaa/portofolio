'use client'

import { Card, Display, Image, LargeTitle, shorthands, Title3, makeStyles, Title2, Title1, Subtitle1 } from '@fluentui/react-components'
import { Caveat, Karla } from 'next/font/google'
import { imageBuild } from '../../public/data/imageBuilt'
import ReactTyped from 'react-typed'

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
})

export default function Home() {
  const styles = useStyles()
  const name = <LargeTitle style={caveat.style}>Fitriana</LargeTitle>

  return (
    <div >
      <div className={styles.container} style={{ marginBottom: '5em', height: '90vh', paddingRight: '5em' }}>
        <div style={{ width: '35%' }} className={styles.container} >
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
            return <Image style={{ height: 100, width: 200, paddingLeft: item?.style }} fit='contain' src={item.logo} key={index} />
          })}
        </div>
      </ div>
    </div >
  )
}
