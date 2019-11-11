import React from 'react'
import { FormBlueprint } from './form-blueprint'
import { FormInput } from '../form-input/form-input'

const FormID = 'basicInformation'

export function FormBasicInformation({ title, data, handleInputChange }) {
  return (
    <FormBlueprint title={title}>
      <div className='sets'>
        <div className='set'>
          <FormInput className='field' label='Full name' maxLength='100' type='text' name='fullName' value={data.fullName} onChange={(e) => handleInputChange(e, FormID)} />
          <FormInput className='field' label='Job title' maxLength='100' type='email' name='jobTitle' value={data.jobTitle} onChange={(e) => handleInputChange(e, FormID)} />
          <FormInput className='field' label='E-mail address' maxLength='100' type='email' name='email' value={data.email} onChange={(e) => handleInputChange(e, FormID)} />
          <FormInput className='field' label='Phone number' maxLength='100' type='tel' name='phoneNumber' value={data.phoneNumber} onChange={(e) => handleInputChange(e, FormID)} />
          <FormInput className='field' label='Website' maxLength='100' type='text' name='website' value={data.websites} onChange={(e) => handleInputChange(e, FormID)} />
          <FormInput className='field' label='Address' maxLength='100' type='text' name='address' value={data.address} onChange={(e) => handleInputChange(e, FormID)} />

          <hr />

          <FormInput className='field max-width' label='About' type='text-area' name='about' value={data.about} onChange={(e) => handleInputChange(e, FormID)} />

          <hr />

          You have to be logged in to upload your photo
        </div>
      </div>
    </FormBlueprint>
  )
}
