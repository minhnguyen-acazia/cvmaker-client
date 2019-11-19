import React from 'react'
import classnames from 'classnames'
import './form-input.scss'

const generateRandomID = () => {
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10)
}

export function FormInput({ className, handleChange, type, label, inlineLabel, description, options, error, ...otherProps }) {
  const id = generateRandomID()

  const renderInput = () => {
    switch (type) {
      case 'text':
      case 'password':
      case 'tel':
      case 'email':
        return <input id={id} className='form-input' type={type} onChange={handleChange} {...otherProps} />
      case 'text-area':
        return <textarea id={id} className='form-input' onChange={handleChange} {...otherProps} />
      case 'select':
        return (
          <select id={id} className='form-input' onChange={handleChange} {...otherProps}>
            {options.map((n, idx) => (
              <option key={idx} value={n.value}>{n.label}</option>
            ))}
          </select>
        )
      // case 'skill':
      //   return (
      //     <div className='double-input-wrapper'>
      //       <input id={id} className='form-input' type='text' onChange={handleChange} {...otherProps} />
      //       <input className='form-input' type='number' min='1' max='100' onChange={handleChange} {...otherProps} />
      //     </div>
      //   )
      case 'range':
        return <input id={id} className='form-input-slider' type={type} onChange={handleChange} {...otherProps} />
      default:
        return <input id={id} className='form-input' type={type} onChange={handleChange} {...otherProps} />
    }
  }

  return (
    <div className={classnames('form-input-field', className ? className : '', inlineLabel ? 'inline-label' : '', error ? 'error' : '')}>
      {label && <label htmlFor={id}>{label}</label>}
      {renderInput()}
      {description && <span className='description'>{description}</span>}
    </div>
  )
}
