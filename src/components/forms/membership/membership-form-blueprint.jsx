import React from 'react'
import classnames from 'classnames'
import './membership-form-blueprint.scss'

export const MembershipFormBlueprint = ({ children, className, right }) => (
  <div
    className={classnames('membership-form', className ? className : '')}
    style={{ float: right ? 'right' : 'left' }}
  >
    <div className='form'>
      {children}
    </div>
  </div>
)
