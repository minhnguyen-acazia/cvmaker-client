import React from 'react'
import { FormBlueprint } from './form-blueprint'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

export function FormQualifications({ title, data, onEditorStateChange }) {
  return (
    <FormBlueprint title={title}>
      <div className='sets'>
        <div className='set'>
          <div className='field max-width'>
            <label>Qualifications</label>
            <Editor
              editorState={data.otherInformation}
              wrapperClassName='wysiwyg-wrapper'
              editorClassName='wysiwyg-editor'
              onEditorStateChange={onEditorStateChange}
            />
            <span className='info'>Certifications, accreditions etc. that you have received</span>
          </div>
        </div>
      </div>
    </FormBlueprint>
  )
}
