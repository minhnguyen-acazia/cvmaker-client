import React, { Component } from 'react'
import { Formik } from 'formik'
import './login-form.scss'
import { MembershipFormBlueprint } from '../membership-form-blueprint'
import { FormInput } from 'components/form-input/form-input'
import { Button } from 'components/button/button'
import { customHistory } from 'common/history'
import { isValidEmail } from 'utils/utils-validation'

const validate = (values) => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Empty'
  }
  if (values.email && !isValidEmail(values.email)) {
    errors.email = 'Invalid'
  }
  if (!values.password) {
    errors.password = 'Empty'
  }
  return errors
}

export class LoginForm extends Component {
  render() {
    return (
      <MembershipFormBlueprint className='login-form'>
        <h2 className='title'>Member login</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => validate(values)}
          onSubmit={values => console.log(values)}
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <>
              <FormInput className='field' label='E-mail' inlineLabel maxLength='100' type='email' name='email' value={values.email} handleChange={handleChange} error={errors.email} />
              <FormInput className='field' label='Password' inlineLabel type='password' name='password' value={values.password} handleChange={handleChange} error={errors.password} />
              <div className='field'>
                <Button text='Login' />
              </div>
              <p className='forgot' onClick={() => customHistory.push('/forgot')}>
                <small>Forgot your password?</small>
              </p>
            </>
          )}
        </Formik>
        <div className='options'>
          <a className='fb-login-button' href='https://cvmkr.com/Member/?action=oauth&amp;provider=facebook'>Login with Facebook</a>
          <a className='google-login-button' href='https://cvmkr.com/Member/?action=oauth&amp;provider=google'>Login with Google</a>
          <div className='clear'> </div>
        </div>
      </MembershipFormBlueprint>
    )
  }
}
