import React from 'react'
import { FormBlueprint } from './form-blueprint'
import { Button } from '../button/button'

export function FormNewSectionSpecial({ title, addEntry, deleteEntry }) {
  // return (
  //   <FormBlueprint title={title}>
  //     <div className='sets'>
  //       <div className='set'>
  //         <label>{title}</label>
  //         <Editor
  //           editorState={data[title]}
  //           wrapperClassName='wysiwyg-wrapper'
  //           editorClassName='wysiwyg-editor'
  //           onEditorStateChange={onEditorStateChange}
  //         />
  //       </div>
  //       {!original && <Button type='delete' text='Delete' onClick={() => deleteEntry(title)} />}
  //     </div>
  //   </FormBlueprint>
  // )
  return (
    <FormBlueprint title={title}>
      <div className='buttons' style={{display:'flex'}} >
        <Button type='add' text='Add entry' onClick={() => addEntry(title)} />
        <Button type='delete' text='Delete' onClick={() => deleteEntry(title)} />
      </div>
    </FormBlueprint>
  )
}
