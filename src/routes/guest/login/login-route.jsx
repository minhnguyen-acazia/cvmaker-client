import React, { Component } from 'react'
import './login-route.scss'
import { PageLayout } from '../../../components/page-layout/page-layout'
import { LoginForm } from '../../../components/forms/membership/login-form/login-form'
import { RegisterForm } from '../../../components/forms/membership/register-form/register-form'
import { Button } from '../../../components/button/button'
import { customHistory } from 'common/history'

export class LoginRoute extends Component {
  render() {
    return (
      <PageLayout content={(
        <div className='login-route'>
          <LoginForm />
          <RegisterForm />
          <div style={{ clear: 'both' }} />
          <div className='no-time'>
            No time to signup? <Button text='Create a resume without signing up' onClick={() => customHistory.push('/')} />
          </div>
        </div>
      )} />
    )
  }
}
