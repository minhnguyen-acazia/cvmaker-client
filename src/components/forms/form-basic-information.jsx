import React from 'react'
import { FormBlueprint } from './form-blueprint'

export function FormBasicInformation({ title }) {
  return (
    <FormBlueprint title={title}>
      <div className='field'>
        <label>Full name</label>
        <input maxLength='100' type='text' name='fullName' />
      </div>
      <div className='field'>
        <label>E-mail address</label>
        <input maxLength='100' type='email' name='email' />
      </div>
      <div className='field'>
        <label>Phone numbers</label>
        <input maxLength='100' type='tel' name='phoneNumber' />
        <span className="info">If you have more than one number, separate with commas</span>
      </div>
      <div className='field'>
        <label>Websites</label>
        <input maxLength='100' type='text' name='websites' />
        <span className="info">If you have more than one URL, separate with commas</span>
      </div>

      <hr />

      <div className='field'>
        <label>Address line 1</label>
        <input maxLength='100' type='text' name='address1' />
      </div>
      <div className='field'>
        <label>Address line 2</label>
        <input maxLength='100' type='text' name='address2' />
      </div>
      <div className='field'>
        <label>Address line 3</label>
        <input maxLength='100' type='text' name='address3' />
      </div>

      <hr />

      You have to be logged in to upload your photo

      <hr />

    </FormBlueprint>
  )
}
