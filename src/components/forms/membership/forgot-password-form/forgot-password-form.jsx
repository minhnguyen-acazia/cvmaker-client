import React, { Component } from 'react'
import { Formik } from 'formik'
import './forgot-password-form.scss'
import { FormInput } from '../../../form-input/form-input'
import { MembershipFormBlueprint } from '../membership-form-blueprint'
import { Button } from '../../../button/button'
import { isValidEmail } from 'utils/utils-validation'

const validate = (values) => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Empty'
  }
  if (values.email && !isValidEmail(values.email)) {
    errors.email = 'Invalid'
  }
  return errors
}

export class ForgotPasswordForm extends Component {
  render() {
    return (
      <MembershipFormBlueprint className='forgot-password'>
        <h2 className='title'>Forgot your password?</h2>
        <Formik
          initialValues={{ email: '' }}
          validate={values => validate(values)}
          onSubmit={values => console.log(values)}
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <>
              <FormInput className='field' label='E-mail' inlineLabel maxLength='100' type='email' name='email' value={values.email} handleChange={handleChange} error={errors.email} />
              <div className='field'>
                <Button text='Retrieve password' onClick={() => handleSubmit(values)} />
              </div>
            </>
          )}
        </Formik>
      </MembershipFormBlueprint>
    )
  }
}
