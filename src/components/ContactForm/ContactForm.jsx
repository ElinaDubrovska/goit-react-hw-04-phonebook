import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Btn, ErrorMessage, Form, FormField } from './ContactForm.styled';
import PropTypes from 'prop-types';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Required field!'),
  number: Yup.number().positive().required('Required field!'),
  
});

export const ContactForm = ({ onSave }) => {
    return (
      <Formik
        initialValues={{
            contacts: [],
            name: '',
            number: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          onSave({ ...values, id: nanoid() });
          actions.resetForm();
        }}
       >
        
        <Form>
          <FormField>
            Name
          <Field name="name" />
          Number
          <Field type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required/>
          <ErrorMessage name="name" component="div" />
          </FormField>
          
          <Btn type="submit">Add contact</Btn>
        </Form>
      </Formik>
    );
  };
  ContactForm.propTypes = {
    
    onSubmit: PropTypes.func
  }