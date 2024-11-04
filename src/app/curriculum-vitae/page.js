'use client'; // This is necessary to indicate this component will use client-side rendering

import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { Button, makeStyles, Text } from '@fluentui/react-components';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';

const useStyles = makeStyles({
     canvas: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100vh',
          '@media (max-width: 1200px)': {
               height: '90vh',
               padding: '12px',
          },
          '@media (max-width: 900px)': {
               height: '80vh',
               padding: '10px',
          },
          '@media (max-width: 600px)': {
               height: '70vh',
               padding: '8px',
               flexDirection: 'column',
          },
     },
     pdfCanvas: {
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          maxHeight: '90vh',
          width: '794', 
          overflowY: 'auto',
          '@media (max-width: 1200px)': {
               maxWidth: '794px',
          },
          '@media (max-width: 900px)': {
               maxWidth: '90%', // Adjust max width for medium screens
          },
          '@media (max-width: 600px)': {
               maxWidth: '95%', // Adjust max width for mobile
               overflowX: 'auto' // Allow horizontal scrolling if needed
          },
     }
});

const CurriculumVitae = () => {
     const styles = useStyles();
     const [pageNumber, setPageNumber] = useState(1);
     const [numPages, setNumPages] = useState(null);
     const [error, setError] = useState(null);
     const pdfContainerRef = useRef(null);

     function onDocumentLoadSuccess({ numPages }) {
          setNumPages(numPages);
          setError(null);
     }

     function onDocumentLoadError(error) {
          setError(error);
     }

     const handleScroll = () => {
          if (pdfContainerRef.current) {
               const { scrollTop, scrollHeight, clientHeight } = pdfContainerRef.current;

               if (scrollTop + clientHeight >= scrollHeight - 10 && pageNumber < numPages) {
                    setPageNumber((prevPage) => prevPage + 1);
               }
          }
     };

     useEffect(() => {
          const container = pdfContainerRef.current;
          if (container) {
               container.addEventListener('scroll', handleScroll);
          }
          return () => {
               if (container) {
                    container.removeEventListener('scroll', handleScroll);
               }
          };
     }, [pageNumber, numPages]);

     const handleDownload = () => {
          const link = document.createElement('a');
          link.href = '/Fitriana-resume-english.pdf';
          link.download = 'Fitriana-resume-english.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
     };

     return (
          <Fragment>
               <div className={styles.canvas}>
                    <Button onClick={handleDownload} style={{ marginBottom: '16px' }}>
                         Download PDF
                    </Button>
                    <div ref={pdfContainerRef} className={styles.pdfCanvas}>
                         <Document
                              file="/Fitriana-resume-english.pdf"
                              onLoadSuccess={onDocumentLoadSuccess}
                              onLoadError={onDocumentLoadError}
                         >
                              <Page pageNumber={pageNumber} scale={1}/>
                         </Document>

                         {error && <Text style={{ color: 'red' }}>Error loading PDF: {error.message}</Text>}
                    </div>
               </div>
          </Fragment>
     );
};

export default CurriculumVitae;
