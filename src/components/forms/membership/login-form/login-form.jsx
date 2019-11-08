import React, { Component } from 'react'
import './login-form.scss'
import { MembershipFormBlueprint } from '../membership-form-blueprint'
import { Button } from '../../../button/button'
import { customHistory } from '../../../../common/history'

export class LoginForm extends Component {
  render() {
    return (
      <MembershipFormBlueprint className='login-form'>
        <h2 className='title'>Member login</h2>
        <p className='field'>
          <label for='text-email1'>E-mail</label>
          <input maxlength='100' type='text' id='text-email1' name='email' class='text' value='' />
        </p>
        <p className='field'>
          <label for='password-password2'>Password</label>
          <input type='password' id='password-password2' name='password' value='' />
        </p>
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
