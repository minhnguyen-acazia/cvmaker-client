import React, { useState } from 'react'
import './add-section.scss'
import { ModalBlueprint } from '../modal-blueprint/modal-blueprint'

export function AddSection({ onConfirm }) {
  const [section, setSection] = useState('')
  const [special, setSpecial] = useState(false)

  return (
    <ModalBlueprint onConfirm={() => onConfirm(section, special)}>
      <label>Section name</label>
      <br />
      <input type='text' placeholder='New section' maxLength='75' onChange={(e) => setSection(e.target.value)} />
      <br />
      <br />
      <input type='checkbox' id='special-section' checked={special} onChange={(e) => setSpecial(e.target.checked)} />
      <label htmlFor='special-section'>Special section (like Education, Work)</label>
    </ModalBlueprint>
  )
}
