import React, { useState } from 'react'
import { ModalBlueprint } from '../modal-blueprint/modal-blueprint'
import { FormInput } from 'components/form-input/form-input'

export function AddSkill({ onConfirm }) {
  const [skill, setSkill] = useState('')
  const [attempted, setAttempted] = useState(false)

  return (
    <ModalBlueprint onConfirm={() => {
      if (skill.trim()) {
        onConfirm(skill)
      } else {
        setAttempted(true)
      }
    }}>
      <FormInput type='text' label='Skill name' error={attempted && !skill.trim()} value={skill} onChange={e => setSkill(e.target.value)} />
    </ModalBlueprint>
  )
}
