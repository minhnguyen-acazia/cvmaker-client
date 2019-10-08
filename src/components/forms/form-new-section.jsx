import React from 'react'
import { FormBlueprint } from './form-blueprint'
import { Button } from '../button/button'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

export function FormNewSection({ title, data, handleInputChange, deleteEntry, original }) {
  const onEditorStateChange = (editorState) => {
    handleInputChange(null, title, null, editorState, title)
  }

  return (
    <FormBlueprint title={title}>
      <div className='sets'>
        <div className='set'>
          <label>{title}</label>
          <Editor
            editorState={data[title]}
            wrapperClassName='wysiwyg-wrapper'
            editorClassName='wysiwyg-editor'
            onEditorStateChange={onEditorStateChange}
          />
        </div>
        {!original && <Button type='delete' text='Delete' onClick={() => deleteEntry(title)} />}
      </div>
    </FormBlueprint>
  )
}
