import React, { useEffect } from 'react'
import html2canvas from 'html2canvas'
import Spinner from 'react-spinkit'
import './preview-resume.scss'
import { ModalBlueprint } from '../modal-blueprint/modal-blueprint'

export function PreviewResume({ children }) {
  useEffect(() => {
    const resume = document.querySelector('.mock-data').children[0]
    html2canvas(resume, {
      allowTaint: true
    }).then(canvas => {
      // remove old element
      document.querySelector('.mock-data').remove()
      // create an image of the canvas
      const imgData = canvas.toDataURL('image/png')
      const img = new Image()
      img.src = imgData
      img.classList.add('resume')
      // append that image
      document.querySelector('.place-holder').remove()
      document.querySelector('.modal-blueprint__content').appendChild(img)
    })
  }, [])

  return (
    <>
      <div className='mock-data'>
        {children}
      </div>
      <ModalBlueprint className='preview-resume'>
        <div className='place-holder'>
          <Spinner name='ball-spin-fade-loader' color='#07A9C5' />
        </div>
      </ModalBlueprint>
    </>
  )
}
