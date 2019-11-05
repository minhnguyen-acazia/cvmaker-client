import React from 'react'
import { FormBlueprint } from './form-blueprint'
import { Button } from '../button/button'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const FormID = 'education'

const FormInstance = ({ idx, deleteEntry, data, handleInputChange }) => {
  return (
    <div className='set'>
      <div className='field'>
        <label>Course name</label>
        <input maxLength='100' type='text' name='courseName' value={data.courseName} onChange={(e) => handleInputChange(e, FormID, idx)} />
      </div>
      <div className='field'>
        <label>Institution name</label>
        <input maxLength='100' type='text' name='institutionName' value={data.institutionName} onChange={(e) => handleInputChange(e, FormID, idx)} />
      </div>
      <div className='field'>
        <label>Start date</label>
        <input maxLength='100' type='text' name='startDate' value={data.startDate} onChange={(e) => handleInputChange(e, FormID, idx)} />
        <span className='info'>Eg: Jan 2005</span>
      </div>
      <div className='field'>
        <label>End date</label>
        <input maxLength='100' type='text' name='endDate' value={data.endDate} onChange={(e) => handleInputChange(e, FormID, idx)} />
        <span className='info'>Eg: Jan 2009, or Present</span>
      </div>
      <div className='field max-width'>
        <label>Other information</label>
        <textarea name='otherInfo' value={data.otherInfo} onChange={(e) => handleInputChange(e, FormID, idx)} />
        <span className='info'>Optional details such as job responsibilities, achievements etc.</span>
      </div>
      {idx > 0 && <Button type='delete' text='Delete' onClick={() => deleteEntry(FormID, idx)} />}
    </div>
  )
}

export function FormEducation({ title, data, addEntry, deleteEntry, handleInputChange }) {
  return (
    <FormBlueprint title={title}>
      <div className='sets'>
        {data.map((n, idx) => <FormInstance data={n} key={idx} idx={idx} deleteEntry={deleteEntry} handleInputChange={handleInputChange} />)}
      </div>
      <Button type='add' text='Add entry' onClick={() => addEntry(FormID)} />
    </FormBlueprint>
  )
}
