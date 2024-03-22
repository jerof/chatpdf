import { String } from 'aws-sdk/clients/acm'
import React from 'react'

type Props = {pdf_url: String}

const PDFViewer = ({pdf_url}: Props) => {
  return (
    <iframe src={`https://docs.google.com/gview?url=${pdf_url}&embedded=true`} className='w-full h-full'>

    </iframe>
  )
}

export default PDFViewer