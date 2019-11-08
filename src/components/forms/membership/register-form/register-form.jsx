import React, { Component } from 'react'
import './register-form.scss'
import { MembershipFormBlueprint } from '../membership-form-blueprint'
import { Button } from '../../../button/button'

export class RegisterForm extends Component {
  render() {
    return (
      <MembershipFormBlueprint className='register-form' right>
        <h2 className='title'>Not a member yet? Join now</h2>
        <p class='field field_text-email5'>
          <label for='text-email5'>E-mail</label>
          <input maxlength='100' type='text' id='text-email5' name='email' class='text' value='' />
          <span class='info'>No verification e-mail will be sent</span></p>
        <p class='field field_password-password6'>
          <label for='password-password6'>Password</label>
          <input type='password' id='password-password6' name='password' value='' />
        </p>
        <p class='field field_password-password_confirm7'>
          <label for='password-password_confirm7'>Confirm password</label>
          <input type='password' id='password-password_confirm7' name='password_confirm' value='' />
        </p>
        {/* <p class='field field_checkbox-terms8'>
          <label for='checkbox-terms8'>I agree to the <a href='/Pages/privacy' target='_blank' style='text-decoration: underline'>terms</a></label><input type='checkbox' id='checkbox-terms8' name='terms' class='chk' value='1' />
        </p> */}
        <p class='field field_submit-submit9'>
          <label for='submit-submit9'>&nbsp;</label>
          <Button text='Signup' />
        </p>
      </MembershipFormBlueprint>
    )
  }
}
