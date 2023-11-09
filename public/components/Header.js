import React from 'react'
import { Caveat } from 'next/font/google'
import { LargeTitle, makeStyles } from '@fluentui/react-components'
import Link from 'next/link'


const caveat = Caveat({ subsets: ['latin'] })

const useStyles = makeStyles({
     container: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          // paddingRight: '80px',
          // paddingLeft: '80px',
          // paddingTop: '50px',
          // backgroundColor: 'black',

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
          <div className={styles.container} style={{ padding: '2em 5em 2em 5em' }}>
               <LargeTitle style={caveat.style}>Portofolio</LargeTitle>
               <div className={styles.header}>
                    <Link href="/experiences">Experiences</Link>
                    <Link href="/educations">Educations</Link>
                    <Link href='/contacts'>Contacts</Link>
                    <Link href="/">Home</Link>
               </div>
          </div>
     )
}

export default Header