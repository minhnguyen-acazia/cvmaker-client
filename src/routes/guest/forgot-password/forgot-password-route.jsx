import React from 'react'
import './forgot-password-route.scss'
import { PageLayout } from '../../../components/page-layout/page-layout'
import { ForgotPasswordForm } from '../../../components/forms/membership/forgot-password-form/forgot-password-form'

export function ForgotPasswordRoute() {
  return (
    <PageLayout content={(
      <div className='forgot-password-route'>
        <ForgotPasswordForm />
      </div>
    )} />
  )
}
