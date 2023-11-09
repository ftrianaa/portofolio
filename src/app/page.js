'use client'

import { Card, Image, Title2, Title3, makeStyles } from '@fluentui/react-components'
import { Caveat } from 'next/font/google'
import { imageBuild } from '../../public/imageBuilt/imageBuilt'

const caveat = Caveat({ subsets: ['latin'] })

const useStyles = makeStyles({
  buildImage: {
    backgroundColor: 'white',
    color: 'black',
  },
  '> :not(:last-child)': {
    marginRight: '5em',
  },
})

export default function Home() {
  const styles = useStyles()

  return (
    <div>
      <div>

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
    </div>
  )
}
