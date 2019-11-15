import React from 'react'
import { Formik } from 'formik'
import './register-form.scss'
import { MembershipFormBlueprint } from '../membership-form-blueprint'
import { FormInput } from 'components/form-input/form-input'
import { Button } from 'components/button/button'
import { isValidEmail } from 'utils/utils-validation'

const validate = (values) => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Empty'
  }
  if (values.email && !isValidEmail(values.email)) {
    errors.email = 'Invalid email'
  }
  if (!values.password) {
    errors.password = 'Empty'
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Empty'
  }
  if (values.password && values.confirmPassword && values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Invalid password'
  }
  return errors
}

export const RegisterForm = () => {
  return (
    <MembershipFormBlueprint className='register-form' right>
      <h2 className='title'>Not a member yet? Join now</h2>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: ''}}
        validate={values => validate(values)}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <>
            <FormInput className='field' label='E-mail' inlineLabel description='No verification e-mail will be sent' maxLength='100' type='email' name='email' value={values.email} handleChange={handleChange} error={errors.email} />
            <FormInput className='field' label='Password' inlineLabel type='password' name='password' value={values.password} handleChange={handleChange} error={errors.password} />
            <FormInput className='field' label='Confirm password' inlineLabel type='password' name='confirmPassword' value={values.confirmPassword} handleChange={handleChange} error={errors.confirmPassword} />
            <div className='field'>
              <Button className='button-authen' text='Signup' onClick={() => handleSubmit(values)} />
            </div>
          </>
        )}
      </Formik>
    </MembershipFormBlueprint>
  )
}
