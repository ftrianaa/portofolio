import { Body1, Subtitle1, Text, Title1, Title3, makeStyles } from '@fluentui/react-components'
import React from 'react'
import { Heart24Regular } from '@fluentui/react-icons';
import { Caveat, Karla } from 'next/font/google';

const caveat = Caveat({ subsets: ['latin'] })
const karla = Karla({ subsets: ['latin'] })


const useStyles = makeStyles({
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center ',
    '> :not(:last-child)': {
      marginRight: '0.2em',
    },
    // paddingRight: '80px',
    // paddingLeft: '80px',
    // paddingTop: '50px',
    // backgroundColor: '',

  }
})
const Footer = () => {
  const styles = useStyles()

  return (
    <div style={{ padding: '2em 5em 2em 5em' }}>
      <div className={styles.footer} style={karla.style}>
        <Text>Made With Love</Text> <Heart24Regular color='red' /> <Text>by</Text> <Subtitle1 style={caveat.style}>Fitriana</Subtitle1>
      </div>
    </div>
  )
}

export default Footer