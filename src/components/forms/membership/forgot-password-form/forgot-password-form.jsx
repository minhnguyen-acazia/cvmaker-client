import React, { Component } from 'react'
import './forgot-password-form.scss'
import { FormInput } from '../../../form-input/form-input'
import { MembershipFormBlueprint } from '../membership-form-blueprint'
import { Button } from '../../../button/button'

export class ForgotPasswordForm extends Component {
  render() {
    return (
      <MembershipFormBlueprint className='forgot-password'>
        <h2 className='title'>Forgot your password?</h2>
        <FormInput className='field' label='E-mail' inlineLabel maxLength='100' type='email' id='text-email1' name='email' value='' />
        <p class='field field_submit-submit2'>
          <label for='submit-submit2'>&nbsp;</label>
          <Button text='Retrieve password' />
        </p>
      </MembershipFormBlueprint>
    )
  }
}
