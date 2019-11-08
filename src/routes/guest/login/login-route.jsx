import React, { Component } from 'react'
import './login-route.scss'
import { GuestLayout } from '../guest-layout'
import { LoginForm } from '../../../components/forms/membership/login-form/login-form'
import { RegisterForm } from '../../../components/forms/membership/register-form/register-form'
import { Button } from '../../../components/button/button'

export class LoginRoute extends Component {
  render() {
    return (
      <GuestLayout content={(
        <div className='login-route'>
          <LoginForm />
          <RegisterForm />
          <div style={{ clear: 'both' }} />
          <p class='no-time'>
            No time to signup? <Button text='Create a resume without signing up' />
          </p>
        </div>
      )} />
    )
  }
}
