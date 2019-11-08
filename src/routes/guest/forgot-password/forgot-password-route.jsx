import React from 'react'
import './forgot-password-route.scss'
import { GuestLayout } from '../guest-layout'
import { ForgotPasswordForm } from '../../../components/forms/membership/forgot-password-form/forgot-password-form'

export function ForgotPasswordRoute() {
  return (
    <GuestLayout content={(
      <div className='forgot-password-route'>
        <ForgotPasswordForm />
      </div>
    )} />
  )
}
