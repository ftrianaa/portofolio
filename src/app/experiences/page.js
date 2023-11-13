'use client'
import { Body1, Card, CardFooter, CardHeader, CardPreview, Image, Title1 } from '@fluentui/react-components'
import { Caveat } from 'next/font/google'
import React, { Fragment } from 'react'
import { experiences } from '../../../public/data/experience'

const caveat = Caveat({ subsets: ['latin'] })

const Experiences = () => {
  return (
    <Fragment>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '2em', padding: '2em 5em 2em 5em' }}>

        {experiences.map((item, index) => {
          return (
            <Card key={index}>
              <CardPreview>
                <Image src={item.preview} />

              </CardPreview>
              <CardHeader
                header={<Title1 style={{ ...caveat.style, color: 'white' }}>{item.title}</Title1>}
                description={<Body1 align='justify' >{item.desc}</Body1>
                }
              />
              <CardFooter>

              </CardFooter>
            </Card>
          )
        })}
      </div>
    </Fragment>
  )
}

export default Experiences