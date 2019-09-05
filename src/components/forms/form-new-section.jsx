import React from 'react'
import { FormBlueprint } from './form-blueprint'
import { Button } from '../button/button'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

export function FormNewSection({ title, deleteEntry }) {
  return (
    <FormBlueprint title={title}>
      <div className='sets'>
        <div className='set'>
          <Editor wrapperClassName='wysiwyg-wrapper' editorClassName='wysiwyg-editor' />
        </div>
        <Button type='delete' text='Delete' onClick={() => deleteEntry(title)} />
      </div>
    </FormBlueprint>
  )
}
