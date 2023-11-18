'use client'
import { Body1, Card, CardFooter, CardHeader, CardPreview, Image, Skeleton, SkeletonItem, Tag, Title1, Toast, ToastBody, ToastTitle, Toaster, useId, useToastController } from '@fluentui/react-components'
import { Caveat } from 'next/font/google'
import React, { Fragment, useEffect, useState } from 'react'
// import { experiences } from '../../../public/data/experience'
import experiencesService from '../../../public/services/experiencesServices'

const caveat = Caveat({ subsets: ['latin'] })

const Experiences = () => {
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
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '2em', padding: '2em 5em 2em 5em' }}>

        {loadExperiences && experiences.length === 0 ?
          [1, 2, 3, 4, 5, 6, 7, 8].map((x) => (
            <Skeleton >
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

          : experiences.length > 0 ? experiences?.map((item, index) => {
            return (
              <Card key={index}>
                <CardPreview>
                  <Image src={item?.preview} />

                </CardPreview>
                <CardHeader
                  header={<Title1 style={{ ...caveat.style, color: 'white' }}>{item?.title}</Title1>}
                  description={<Body1 align='justify' >{item?.desc}</Body1>
                  }
                />
                <CardFooter>
                  {item.tags.map((label, id) => {
                    return (
                      <Tag value={label} key={id}>{label}</Tag>
                    )
                  })}
                </CardFooter>
              </Card>
            )
          }) :
            <Body1>Experiences Not Found</Body1>
        }
      </div>
    </Fragment>
  )
}

export default Experiences