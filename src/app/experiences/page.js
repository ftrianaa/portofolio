'use client'
import { Body1, Card, CardFooter, CardHeader, CardPreview, Image, Overflow, Skeleton, SkeletonItem, Tag, Title1, Toast, ToastBody, ToastTitle, Toaster, makeStyles, useId, useToastController } from '@fluentui/react-components'
import { Caveat } from 'next/font/google'
import React, { Fragment, useEffect, useState } from 'react'
import experiencesService from '../../../public/services/experiencesServices'

const caveat = Caveat({ subsets: ['latin'] })

const useStyles = makeStyles({
  card: {
    transition: 'transform 0.2s ease, background-color 0.2s ease',
    marginRight: '1em', // Add right margin
    marginTop: '1em', // Add top margin
    ':hover': {
      transform: 'scale(1.02)',
      cursor: 'pointer',
      backgroundColor: '#444',
    },
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // 4 columns by default
    padding: '2em 5em 2em 5em',
    '@media (max-width: 1200px)': {
      gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns for medium screens
      padding: '2em 5em 2em 5em'
    },
    '@media (max-width: 900px)': {
      gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns for smaller screens
      padding: '2em 5em 2em 5em'
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr', // 1 column for mobile screens
      padding: '2em 5em 2em 5em'
    },
  },
});





const Experiences = () => {
  const style = useStyles()

  const toasterId = useId('toaster')
  const { dispatchToast } = useToastController(toasterId);

  const [experiences, setExperiences] = useState([])
  const [loadExperiences, setLoadExperiences] = useState(false)

  const fetchExperience = async () => {
    setLoadExperiences(true)
    try {
      const responseExperience = await experiencesService.getAllExperiences()

      if (responseExperience.success) {
        setExperiences(responseExperience.data)
      } else {
        dispatchToast(
          <Toast>
            <ToastTitle>Error</ToastTitle>
            <ToastBody>Failed to get data</ToastBody>
          </Toast>,
          { intent: "error" }
        );
      }
    } catch (error) {
      throw error
    } finally {
      setLoadExperiences(false)
    }
  }
  useEffect(() => {
    fetchExperience()
    return () => {
      setExperiences([])
    }
  }, [])

  return (
    <Fragment>
      <Toaster toasterId={toasterId} />
      <div className={style.gridContainer}>

        {loadExperiences && experiences.length === 0 ? (
          [1, 2, 3, 4, 5, 6, 7, 8].map((x) => (
            <Skeleton key={x} className={style.card}>
              <SkeletonItem style={{ height: '10em', marginBottom: '1em' }} />
              <SkeletonItem style={{ marginBottom: '1em' }} />
              <SkeletonItem style={{ marginBottom: '1em' }} />
              <div style={{ display: 'flex' }}>
                <SkeletonItem style={{ width: '15%', marginRight: '1em' }} />
                <SkeletonItem style={{ width: '15%', marginRight: '1em' }} />
                <SkeletonItem style={{ width: '15%' }} />
              </div>
            </Skeleton>
          ))
        ) : experiences.length > 0 ? (
          experiences.map((item, index) => (
            <Card
              key={index}
              className={style.card}
              onClick={() => window.open(item.link, '_blank')}
              style={{ marginRight: (index + 1) % 4 === 0 ? '0' : '1em', marginTop: '1em' }} // Set margins conditionally
            >
              <CardPreview>
                <Image src={item?.preview} />
              </CardPreview>
              <CardHeader
                header={<Title1 style={{ ...caveat.style, color: 'white' }}>{item?.title}</Title1>}
                description={<Body1 align='justify'>{item?.desc}</Body1>}
              />
              <CardFooter>
                {item.tags.map((label, id) => (
                  <Tag value={label} key={id}>{label}</Tag>
                ))}
              </CardFooter>
            </Card>
          ))
        ) : (
          <Body1>Experiences Not Found</Body1>
        )}
      </div>
    </Fragment>
  )
}

export default Experiences;
