import React, { Component } from 'react'
import './register-form.scss'
import { MembershipFormBlueprint } from '../membership-form-blueprint'
import { FormInput } from '../../../form-input/form-input'
import { Button } from '../../../button/button'

export class RegisterForm extends Component {
  render() {
    return (
      <MembershipFormBlueprint className='register-form' right>
        <h2 className='title'>Not a member yet? Join now</h2>
        <FormInput className='field' label='E-mail' inlineLabel description='No verification e-mail will be sent' maxLength='100' type='email' id='text-email5' name='email' value='' />
        <FormInput className='field' label='Password' inlineLabel type='password' id='password-password6' name='password' value='' />
        <FormInput className='field' label='Confirm password' inlineLabel type='password' id='password-password_confirm7' name='password_confirm' value='' />
        <p class='field field_submit-submit9'>
          <label for='submit-submit9'>&nbsp;</label>
          <Button text='Signup' />
        </p>
      </MembershipFormBlueprint>
    )
  }
}
