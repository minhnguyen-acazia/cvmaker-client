import React from 'react'
import { FormBlueprint } from './form-blueprint'
import { Button } from '../button/button'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const FormInstance = ({ idx, deleteEntry }) => {
  return (
    <div className='set'>
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
      <div className='field max-width'>
        <label>Other information</label>
        <Editor wrapperClassName='wysiwyg-wrapper' editorClassName='wysiwyg-editor' />
        <span className='info'>Optional details such as job responsibilities, achievements etc.</span>
      </div>
      <Button type='delete' text='Delete' onClick={() => deleteEntry('Work experience', idx)} />
    </div>
  )
}

export function FormWorkExperience({ title, data, addEntry, deleteEntry }) {
  return (
    <FormBlueprint title={title}>
      <div className='sets'>
        {data.map((n, idx) => <FormInstance data={n} key={idx} idx={idx} deleteEntry={deleteEntry} />)}
      </div>
      <Button type='add' text='Add entry' onClick={() => addEntry('Work experience')} />
    </FormBlueprint>
  )
}
