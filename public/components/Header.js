'use client';

import React, { useState, useEffect } from 'react';
import { Caveat } from 'next/font/google';
import { Button, LargeTitle, makeStyles } from '@fluentui/react-components';
import Link from 'next/link';
import { Navigation16Regular, Dismiss16Regular } from '@fluentui/react-icons';

const caveat = Caveat({ subsets: ['latin'] });

const useStyles = makeStyles({
     container: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
     },
     header: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          '> :not(:last-child)': {
               marginRight: '20px',
          },
          fontSize: '18px',
     },
     menu: {
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          top: '0',
          right: '0',
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          border: 'none',
          zIndex: 10,
          paddingTop: '20px',
          paddingBottom: '20px',
          paddingLeft: '20px',
          paddingRight: '20px',
          borderRadius: '0',
          boxShadow: 'none',
          opacity: 0,
          transform: 'translateY(-10px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          pointerEvents: 'none',
          '&.open': {
               opacity: 1,
               transform: 'translateY(0)',
               pointerEvents: 'auto',
          },
     },
     menuItem: {
          marginTop: '5px',
          marginBottom: '5px',
          color: 'white',
          textDecoration: 'none',
          textTransform: 'uppercase',
          fontSize: '25px',
          paddingTop: '20px',
          paddingBottom: '20px',
          '&:hover': {
               backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
     },
     burger: {
          display: 'none',
          '@media (max-width: 768px)': {
               display: 'block',
          },
     },
     links: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          '> :not(:last-child)': {
               marginRight: '20px',
          },
          '@media (max-width: 768px)': {
               display: 'none',
          },
     },
     closeButton: {
          alignSelf: 'flex-end',
          background: 'transparent',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          fontSize: '24px',
          marginBottom: '20px',
     },
});

const Header = () => {
     const styles = useStyles();
     const [menuOpen, setMenuOpen] = useState(false);

     // Handle window resize to close menu if screen width exceeds 768px
     useEffect(() => {
          const handleResize = () => {
               if (window.innerWidth > 768) {
                    setMenuOpen(false);
               }
          };

          window.addEventListener('resize', handleResize);
          return () => {
               window.removeEventListener('resize', handleResize);
          };
     }, []);

     const toggleMenu = () => {
          setMenuOpen((prev) => !prev);
     };

     const handleMenuItemClick = () => {
          setMenuOpen(false);
     };

     return (
          <div style={{ position: 'sticky', top: '0', zIndex: 10000, marginBottom: '2em' }}>
               <div className={styles.container}>
                    <LargeTitle style={caveat.style}>Portofolio</LargeTitle>
                    <Button
                         className={styles.burger}
                         onClick={toggleMenu}
                         icon={<Navigation16Regular />}
                         aria-label="Toggle menu"
                    />
                    <div className={styles.links}>
                         <Link href="/experiences">Experiences</Link>
                         <Link href="/educations">Educations</Link>
                         <Link href='/contacts'>Contacts</Link>
                         <Link href='/curriculum-vitae'>Curriculum Vitae</Link>
                         <Link href="/">Home</Link>
                    </div>
                    <div className={`${styles.menu} ${menuOpen ? 'open' : ''}`}>
                         <Button className={styles.closeButton} onClick={() => setMenuOpen(false)} aria-label="Close menu" icon={<Dismiss16Regular />} />
                         <Link className={styles.menuItem} href="/experiences" onClick={handleMenuItemClick}>Experiences</Link>
                         <Link className={styles.menuItem} href="/educations" onClick={handleMenuItemClick}>Educations</Link>
                         <Link className={styles.menuItem} href='/contacts' onClick={handleMenuItemClick}>Contacts</Link>
                         <Link className={styles.menuItem} href='/curriculum-vitae' onClick={handleMenuItemClick}>Curriculum Vitae</Link>
                         <Link className={styles.menuItem} href="/" onClick={handleMenuItemClick}>Home</Link>
                    </div>
               </div>
          </div>
     );
};

export default Header;
