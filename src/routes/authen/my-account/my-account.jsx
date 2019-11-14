import React from 'react'
import { Formik } from 'formik'
import './my-account.scss'
import { PageLayout } from 'components/page-layout/page-layout'
import { FormInput } from 'components/form-input/form-input'
import { Button } from 'components/button/button'
import { isValidEmail } from 'utils/utils-validation'

const validate = (values) => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Empty'
  }
  if (!values.email) {
    errors.email = 'Empty'
  }
  if (values.email && !isValidEmail(values.email)) {
    errors.email = 'Invalid'
  }
  return errors
}

export function MyAccount() {
  return (
    <PageLayout authenticated content={(
      <div className='my-account'>
        <h1>My Account</h1>
        <Formik
          initialValues={{ name: '', email: '' }}
          validate={values => validate(values)}
          onSubmit={(values) => console.log(values)}
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <div className='account-form'>
              <FormInput type='text' name='name' value={values.name} error={errors.name} label='Name' inlineLabel handleChange={handleChange} />
              <FormInput type='email' name='email' value={values.email} error={errors.email} label='Email' inlineLabel handleChange={handleChange} />
              <Button onClick={() => handleSubmit(values)} text='Save changes' />
            </div>
          )}
        </Formik>
        <div className='delete-account'>
          <strong>× Delete my account</strong> (Warning: Deletes all CVs and personal information irrevocably)
        </div>
      </div>
    )} />
  )
}
