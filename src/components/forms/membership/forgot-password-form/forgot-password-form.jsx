import React, { Component } from 'react'
import './forgot-password-form.scss'
import { MembershipFormBlueprint } from '../membership-form-blueprint'
import { Button } from '../../../button/button'

export class ForgotPasswordForm extends Component {
  render() {
    return (
      <MembershipFormBlueprint className='forgot-password'>
        <h2 className='title'>Forgot your password?</h2>
        <p class='field field_text-email1'>
          <label for='text-email1'>E-mail</label>
          <input maxlength='100' type='text' id='text-email1' name='email' class='text' value='' />
        </p>
        <p class='field field_submit-submit2'>
          <label for='submit-submit2'>&nbsp;</label>
          <Button text='Retrieve password' />
        </p>
      </MembershipFormBlueprint>
    )
  }
}
