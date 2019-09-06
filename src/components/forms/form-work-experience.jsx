import React from 'react'
import { FormBlueprint } from './form-blueprint'
import { Button } from '../button/button'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const FormInstance = ({ idx, deleteEntry, title, data, handleInputChange }) => {
  const onEditorStateChange = (editorState) => {
    handleInputChange(null, title, idx, editorState, 'otherInformation')
  }

  return (
    <div className='set'>
      <div className='field'>
        <label>Job title</label>
        <input maxLength='100' type='text' name='jobTitle' value={data.jobTitle} onChange={(e) => handleInputChange(e, title, idx)} />
      </div>
      <div className='field'>
        <label>Company name</label>
        <input maxLength='100' type='text' name='companyName' value={data.companyName} onChange={(e) => handleInputChange(e, title, idx)} />
      </div>
      <div className='field'>
        <label>Start date</label>
        <input maxLength='100' type='text' name='startDate' value={data.startDate} onChange={(e) => handleInputChange(e, title, idx)} />
        <span className='info'>Eg: Jan 2005</span>
      </div>
      <div className='field'>
        <label>End date</label>
        <input maxLength='100' type='text' name='endDate' value={data.endDate} onChange={(e) => handleInputChange(e, title, idx)} />
        <span className='info'>Eg: Jan 2009, or Present</span>
      </div>
      <div className='field max-width'>
        <label>Other information</label>
        <Editor
          editorState={data.otherInformation}
          wrapperClassName='wysiwyg-wrapper'
          editorClassName='wysiwyg-editor'
          onEditorStateChange={onEditorStateChange}
        />
        <span className='info'>Optional details such as job responsibilities, achievements etc.</span>
      </div>
      <Button type='delete' text='Delete' onClick={() => deleteEntry(title, idx)} />
    </div>
  )
}

export function FormWorkExperience({ title, data, addEntry, deleteEntry, handleInputChange }) {
  return (
    <FormBlueprint title={title}>
      <div className='sets'>
        {data.map((n, idx) => <FormInstance data={n} key={idx} idx={idx} deleteEntry={deleteEntry} title={title} handleInputChange={handleInputChange} />)}
      </div>
      <Button type='add' text='Add entry' onClick={() => addEntry(title)} />
    </FormBlueprint>
  )
}
