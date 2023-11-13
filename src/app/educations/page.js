'use client'

import { makeStyles } from '@fluentui/react-components';
import { Circle24Regular } from '@fluentui/react-icons'
import { motion } from 'framer-motion';
import React, { Fragment } from 'react'


const useStyles = makeStyles({
     container: {
          width: '150px',
          height: '150px',
          display: 'grid',
          overflow: 'hidden',
          margin: '0',
          listStyle: 'none',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: '15px',
          padding: '15px',
          background: ' rgba(255, 255, 255, 0.2)',
          borderRadius: '50px',
     },

     item: {
          background: 'white',
          borderRadius: ' 100%',
     }

})

const container = {
     hidden: { opacity: 1, scale: 0 },
     visible: {
          opacity: 1,
          scale: 1,
          transition: {
               delayChildren: 0.3,
               staggerChildren: 0.2
          }
     }
};

const item = {
     hidden: { y: 20, opacity: 0 },
     visible: {
          y: 0,
          opacity: 1
     }
};


const Educations = () => {
     const style = useStyles()
     return (
          <Fragment>
               <motion.ul
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className={style.container}
               >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                         <>
                              <motion.li key={index} className={style.item} variants={item} />

                         </>
                    ))}
               </motion.ul>

          </Fragment>
     )
}

export default Educations 