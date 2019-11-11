import React, { Component } from 'react'
import './login-form.scss'
import { MembershipFormBlueprint } from '../membership-form-blueprint'
import { FormInput } from '../../../form-input/form-input'
import { Button } from '../../../button/button'
import { customHistory } from '../../../../common/history'

export class LoginForm extends Component {
  render() {
    return (
      <MembershipFormBlueprint className='login-form'>
        <h2 className='title'>Member login</h2>
        <FormInput className='field' label='E-mail' inlineLabel maxLength='100' type='email' id='text-email1' name='email' value='' />
        <FormInput className='field' label='Password' inlineLabel type='password' id='password-password2' name='password' value='' />
        <p className='field'>
          <label for='submit-submit3'>&nbsp;</label>
          <Button text='Login' />
        </p>
        <p className='forgot' onClick={() => customHistory.push('/forgot')}>
          <small>Forgot your password?</small>
        </p>
        <div className='options'>
          <a className='fb-login-button' href='https://cvmkr.com/Member/?action=oauth&amp;provider=facebook'>Login with Facebook</a>
          <a className='google-login-button' href='https://cvmkr.com/Member/?action=oauth&amp;provider=google'>Login with Google</a>
          <div className='clear'> </div>
        </div>
      </MembershipFormBlueprint>
    )
  }
}
