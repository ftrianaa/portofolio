import React from 'react'

import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import('../../../public/components/Pdf'), {
     ssr: false
});

const CurriculumVitae = () => {
     return (
          <PDFViewer />
     )
}

export default CurriculumVitae