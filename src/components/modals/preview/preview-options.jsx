import React from 'react'
import './preview-options.scss'
import { ModalBlueprint } from '../modal-blueprint/modal-blueprint'

const options = [
  {
    name: 'Elegant Modern'
  },
  {
    name: 'Experience'
  },
  {
    name: 'Minimal and Clean'
  },
  {
    name: 'Simple and Clean'
  }
]

export function PreviewOptions() {
  return (
    <ModalBlueprint className='preview-options' onConfirm={() => {}}>
        Style
        <div style={{clear: 'both'}} />
        <div className='options'>
          {options.map(n => (
            <p>
              <label>{n.name}</label>
              <input type='radio' value='test' />
            </p>
          ))}
        </div>
        <div className='preview-thumb'>img</div>
    </ModalBlueprint>
  )
}
