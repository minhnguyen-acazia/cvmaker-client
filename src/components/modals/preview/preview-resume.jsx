import React, { useEffect } from 'react'
import html2canvas from 'html2canvas'
import './preview-resume.scss'
import { ModalBlueprint } from '../modal-blueprint/modal-blueprint'

export function PreviewResume({ children }) {
  useEffect(() => {
    const resume = document.querySelector('.resume-experience')
    html2canvas(resume).then(canvas => {
      // remove old element
      resume.remove()
      // create an image of the canvas
      const imgData = canvas.toDataURL('image/png')
      const img = new Image()
      img.src = imgData
      img.classList.add('resume')
      // append that image
      document.querySelector('.modal-blueprint__content').appendChild(img)
    })
  }, [])

  return (
    <ModalBlueprint className='preview-resume'>
      {children}
    </ModalBlueprint>
  )
}
