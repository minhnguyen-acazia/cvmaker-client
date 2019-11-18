import React, { useState } from 'react'
import { FormBlueprint } from './form-blueprint'
import { FormInput } from '../form-input/form-input'
import { Button } from '../button/button'

const FormID = 'skills'

const FormInstance = ({ idx, data, handleInputChange }) => {
  return (
    <div className='set'>
      <FormInput className='field' label='Full name' maxLength='100' type='text' name='fullName' value={data.fullName || ''} onChange={(e) => handleInputChange(e, FormID)} />

    </div>
  )
}

export function FormSkills({ title, data, handleInputChange }) {
  const [resumeType, setResumeType] = useState()

  return (
    <FormBlueprint title={title}>
      <div className='sets'>
        {/* {formType
          ? data.map((n, idx) => <FormInstance data={n} key={idx} idx={idx} handleInputChange={handleInputChange} />)
          : <FormInput className='field' label='Choose' />}
         */}
      </div>
    </FormBlueprint>
  )
}
