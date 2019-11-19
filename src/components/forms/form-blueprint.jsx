import React from 'react'
import classnames from 'classnames'
import './form-blueprint.scss'

export function FormBlueprint({ title, children, className }) {
  return (
    <form className={classnames('form-blueprint', className ? className : '')}>
      <h2 className='title'>
        <span className='name'>{title}</span>
      </h2>
      {children}
    </form>
  )
}
