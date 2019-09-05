import React from 'react'
import { FormBlueprint } from './form-blueprint'

export function FormWorkExperience({ title }) {
  return (
    <FormBlueprint title={title}>
      <div className='field'>
        <label>Job title</label>
        <input maxLength='100' type='text' name='jobTitle' />
      </div>
      <div className='field'>
        <label>Company name</label>
        <input maxLength='100' type='text' name='companyName' />
      </div>
      <div className='field'>
        <label>Start date</label>
        <input maxLength='100' type='text' name='startDate' />
        <span className='info'>Eg: Jan 2005</span>
      </div>
      <div className='field'>
        <label>End date</label>
        <input maxLength='100' type='text' name='endDate' />
        <span className='info'>Eg: Jan 2009, or Present</span>
      </div>
      <div className='field'>
        <label>Other information</label>
  
      </div>
    </FormBlueprint>
  )
}
