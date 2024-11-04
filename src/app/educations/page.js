'use client';

import { makeStyles, Text, Title2 } from '@fluentui/react-components';
import { FaUniversity } from 'react-icons/fa';
import { motion } from 'framer-motion';
import React, { Fragment } from 'react';
import { educations } from '../../../public/data/educations';

const useStyles = makeStyles({
     container: {
          display: 'grid',
          overflow: 'hidden',
          margin: '0',
          listStyle: 'none',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: '15px',
          padding: '15px',
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '50px',
     },
     item: {
          background: 'white',
          borderRadius: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%', // Ensures the item takes full height of the grid cell
          paddingBottom: '20px' // Move padding to the item itself
     }
});

const container = {
     hidden: { opacity: 0 },
     visible: {
          opacity: 1,
          transition: {
               duration: 1,
               delayChildren: 0.2,
               staggerChildren: 0.2,
          },
     },
};

const animation = {
     hidden: { y: 20, opacity: 0 },
     visible: {
          y: 0,
          opacity: 1,
          transition: {
               duration: 1,
          },
     },
};

const Educations = () => {
     const style = useStyles();

     return (
          <Fragment>
               <motion.ul
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className={style.container}
               >
                    {educations.map((item, index) => (
                         <motion.li key={index} className={style.item} variants={animation}>
                              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                   <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaUniversity size={20} style={{ marginRight: '10px' }} />
                                        <Title2>{item?.title}</Title2>
                                   </div>
                                   <Text>{item?.date}</Text>
                                   <Text>{item?.desc}</Text>
                              </div>
                         </motion.li>
                    ))}
               </motion.ul>
          </Fragment>
     );
};

export default Educations;
