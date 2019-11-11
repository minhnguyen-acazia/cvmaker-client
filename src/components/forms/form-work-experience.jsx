import React from 'react'
import { FormBlueprint } from './form-blueprint'
import { FormInput } from '../form-input/form-input'
import { Button } from '../button/button'

const FormID = 'workExperience'

const FormInstance = ({ idx, deleteEntry, data, handleInputChange }) => {
  return (
    <div className='set'>
      <FormInput className='field' label='Job title' maxLength='100' type='text' name='jobTitle' value={data.jobTitle} onChange={(e) => handleInputChange(e, FormID, idx)} />
      <FormInput className='field' label='Company name' maxLength='100' type='text' name='companyName' value={data.companyName} onChange={(e) => handleInputChange(e, FormID, idx)} />
      <FormInput className='field' label='Start date' description='Eg: Jan 2005' maxLength='100' type='text' name='startDate' value={data.startDate} onChange={(e) => handleInputChange(e, FormID, idx)} />
      <FormInput className='field' label='End date' description='Eg: Jan 2009, or Present' maxLength='100' type='text' name='endDate' value={data.endDate} onChange={(e) => handleInputChange(e, FormID, idx)} />
      <FormInput className='field max-width' label='Other information' type='text-area' description='Optional details such as job responsibilities, achievements etc.' name='otherInfo' value={data.otherInfo} onChange={(e) => handleInputChange(e, FormID, idx)} />
      {idx > 0 && <Button type='delete' text='Delete' onClick={() => deleteEntry(FormID, idx)} />}
    </div>
  )
}

export function FormWorkExperience({ title, data, addEntry, deleteEntry, handleInputChange }) {
  return (
    <FormBlueprint title={title}>
      <div className='sets'>
        {data.map((n, idx) => <FormInstance data={n} key={idx} idx={idx} deleteEntry={deleteEntry} handleInputChange={handleInputChange} />)}
      </div>
      <Button type='add' text='Add entry' onClick={() => addEntry(FormID)} />
    </FormBlueprint>
  )
}
