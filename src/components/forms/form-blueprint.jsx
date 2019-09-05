import React from 'react'
import './form-blueprint.scss'

export function FormBlueprint({ title, children }) {
  return (
    <form className='form-blueprint'>
      <h2 className='title'>
        <span className='name'>{title}</span>
      </h2>
      {children}
    </form>
  )
}
