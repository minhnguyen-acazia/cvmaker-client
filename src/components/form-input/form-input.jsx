import React from 'react'
import classnames from 'classnames'
import './form-input.scss'

export function FormInput({ className, handleChange, type, label, inlineLabel, description, options, ...otherProps }) {
  const renderInput = () => {
    switch (type) {
      case 'text':
      case 'password':
      case 'tel':
      case 'email':
        return <input className='form-input' type={type} onChange={handleChange} {...otherProps} />
      case 'text-area':
        return <textarea className='form-input' onChange={handleChange} {...otherProps} />
      case 'select':
        return (
          <select className='form-input' onChange={handleChange} {...otherProps}>
            {options.map(n => (
              <option value={n.value}>{n.label}</option>
            ))}
          </select>
        )
      default:
        return <input className='form-input' type={type} onChange={handleChange} {...otherProps} />
    }
  }

  return (
    <div className={classnames('form-input-field', className ? className : '', inlineLabel ? 'inline-label' : '')}>
      {label && <label>{label}</label>}
      {renderInput()}
      {description && <span className='description'>{description}</span>}
    </div>
  )
}
