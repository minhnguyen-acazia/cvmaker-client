import React from 'react'
import { FormBlueprint } from './form-blueprint'
import { Button } from '../button/button'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

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
      <div className='field max-width'>
        <label>Other information</label>
        <Editor wrapperClassName='wysiwyg-wrapper' editorClassName='wysiwyg-editor' />
        <span class='info'>Optional details such as job responsibilities, achievements etc.</span>
      </div>
      <Button type='delete' text='Delete' />

      <hr />

      <Button type='add' text='Add entry' />
    </FormBlueprint>
  )
}
