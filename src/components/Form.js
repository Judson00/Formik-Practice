import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';

class MyForm extends React.Component {

  handleSubmit = (values, {
    props = this.props,
    setSubmitting
  }) => {

    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
    return;
  }

  render() {

    return(
      <Formik 
      initialValues = {{
        first_name: '',
        email: '',
        gender: '',
      }}
      validate = {(values) => {
        let errors = {};

        if(!values.email)
        errors.email = 'Email Address Required';

        return errors;
      }}
      onSubmit={this.handleSubmit}
      render={formProps => {
        return(
          <Form>
            <Field
              type='text'
              name='email'
              placeholder='Email Address'/>

            <ErrorMessage name='email' />

            <Field
              name='gender'
              component='select'
              placeholder='Your Gender'>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </Field>

            <ErrorMessage name='gender' />

            <button
              type='submit'
              disabled={formProps.isSubmitting}>
                Submit Form
              </button>
          </Form>
        );
      }}
    />)
  }
}

export default MyForm;