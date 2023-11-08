import React from 'react'
import { Caveat, Dancing_Script, Playpen_Sans } from 'next/font/google'
import { LargeTitle, Text, Title2, makeStyles } from '@fluentui/react-components'
import Link from 'next/link'


const ovo = Caveat({ subsets: ['latin'] })

const useStyles = makeStyles({
     container: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          // paddingRight: '80px',
          // paddingLeft: '80px',
          // paddingTop: '50px',
          backgroundColor: 'black',

     },
     header: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          '> :not(:last-child)': {
               marginRight: '20px',
          },
     }
})

const Header = () => {
     const styles = useStyles()
     return (
          <div className={styles.container} style={{ padding: '2em 5em 0em 5em' }}>
               <LargeTitle style={ovo.style}>Portofolio</LargeTitle>
               <div className={styles.header}>
                    <Link href="/experience">Experiences</Link>
                    <Link href="/experience">Educations</Link>
                    <Link href='/portofolio'>Portofolio</Link>
                    <Link href="/">Home</Link>
               </div>
          </div>
     )
}

export default Header