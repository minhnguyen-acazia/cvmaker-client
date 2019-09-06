import React from 'react'
import { FormBlueprint } from './form-blueprint'

export function FormBasicInformation({ title, data, handleInputChange }) {
  return (
    <FormBlueprint title={title}>
      <div className='sets'>
        <div className='set'>
          <div className='field'>
            <label>Full name</label>
            <input maxLength='100' type='text' name='fullName' value={data.fullName} onChange={(e) => handleInputChange(e, title)} />
          </div>
          <div className='field'>
            <label>E-mail address</label>
            <input maxLength='100' type='email' name='email' value={data.email} onChange={(e) => handleInputChange(e, title)} />
          </div>
          <div className='field'>
            <label>Phone numbers</label>
            <input maxLength='100' type='tel' name='phoneNumber' value={data.phoneNumber} onChange={(e) => handleInputChange(e, title)} />
            <span className='info'>If you have more than one number, separate with commas</span>
          </div>
          <div className='field'>
            <label>Websites</label>
            <input maxLength='100' type='text' name='websites' value={data.websites} onChange={(e) => handleInputChange(e, title)} />
            <span className='info'>If you have more than one URL, separate with commas</span>
          </div>

          <hr />

          <div className='field'>
            <label>Address line 1</label>
            <input maxLength='100' type='text' name='address1' value={data.address1} onChange={(e) => handleInputChange(e, title)} />
          </div>
          <div className='field'>
            <label>Address line 2</label>
            <input maxLength='100' type='text' name='address2' value={data.address2} onChange={(e) => handleInputChange(e, title)} />
          </div>
          <div className='field'>
            <label>Address line 3</label>
            <input maxLength='100' type='text' name='address3' value={data.address3} onChange={(e) => handleInputChange(e, title)} />
          </div>

          <hr />

          You have to be logged in to upload your photo
        </div>
      </div>
    </FormBlueprint>
  )
}
