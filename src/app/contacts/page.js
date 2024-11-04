'use client'

import { Button, LargeTitle, Link, MessageBar, MessageBarActions, MessageBarBody, MessageBarTitle, Subtitle1, Text, Title1, Title3, makeStyles, shorthands } from '@fluentui/react-components'
import { DismissRegular } from '@fluentui/react-icons';
import { Caveat, Karla } from 'next/font/google'
import React from 'react'
import { FaLinkedinIn, FaGithub, FaRegEnvelope } from "react-icons/fa";
import ReactTyped from 'react-typed';
const caveat = Caveat({ subsets: ['latin'] })
const karla = Karla({ subsets: ['latin'] })
 
const useStyles = makeStyles({
     buildImage: {
          backgroundColor: 'white',
          color: 'black',
     },
     container: {
          ...shorthands.gap("1em"),
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          justifyContent: 'center'
     },
     flex: {
          ...shorthands.gap("1em"),
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: 'center'
     }
})


const Contacts = () => {
     const styles = useStyles()
     return (
          <div>
               <div className={styles.buildImage} style={{ borderTopRightRadius: '5em', borderTopLeftRadius: '5em', alignItems: 'center', justifyContent: 'center', display: 'flex', padding: '2em' }}>
                    <Title1 align='center' style={caveat.style}>You Can Catch Me</Title1>
               </div>
               <div className={styles.flex} style={{ paddingTop: '2em', borderInline: ' 1px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '2em', width: '100%' }}>
                    <MessageBar style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }} intent='warning' shape='square'>
                         <MessageBarBody style={{ gap: '1em' }} >
                              <MessageBarTitle>Alert</MessageBarTitle>
                              <ReactTyped
                                   strings={["This is the place where you could find me."]}
                                   typeSpeed={100}
                                   showCursor={true}
                              />

                         </MessageBarBody>
                         {/* <MessageBarActions
                         containerAction={
                              <Button
                                   aria-label="dismiss"
                                   appearance="transparent"
                                   icon={<DismissRegular />}
                              />
                         }
                    ></MessageBarActions> */}
                    </MessageBar>
               </div>
               <div className={styles.container} style={{ borderInline: ' 1px solid white', borderBottom: '1px solid white', borderBottomRightRadius: '5em', borderBottomLeftRadius: '5em', minHeight: '60vh', display: 'flex', alignItems: 'center', gap: '1em' }}>
                    <div className={styles.flex} >
                         <Subtitle1><FaLinkedinIn /> <Link target={'_blank'} style={{ ...karla.style, color: 'white' }} href='https://www.linkedin.com/in/fitriana1601/'>fitriana1601</Link></Subtitle1>
                         <Subtitle1 ><FaGithub /> <Link target={'_blank'} style={{ ...karla.style, color: 'white' }} href='https://github.com/ftrianaa'>ftrianaa</Link></Subtitle1>
                         <Subtitle1 ><FaRegEnvelope /> <Link target={'_blank'} style={{ ...karla.style, color: 'white' }} href='https://mail.google.com/mail/?view=cm&fs=1&to=fitriana0116@gmail.com'>fitriana0116@gmail.com</Link></Subtitle1>
                    </div>
               </div>
          </div >
     )
}

export default Contacts 