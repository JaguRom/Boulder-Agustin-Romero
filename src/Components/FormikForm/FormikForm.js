// Render Prop
import React from 'react';
 import { Formik, Form, Field, ErrorMessage } from 'formik';

 const Basic = () => (
   <div>
     <h1 className='centered-flex'>Please fill in the form before confirming your purchase</h1>
     <Formik
       initialValues={{ email: '', name: '', address: '', phone: ''}}
       validate={values => {
         const errors = {};
         if (!values.email, !values.name, !values.address) {
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email, values.name, values.address)
          ) {
            errors.email = 'Invalid email address';
            errors.name = "Please enter your name"
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert("Now you can confirm your purchase");

            console.log("This is values", values)
            localStorage.setItem('values', JSON.stringify(values));

            setSubmitting(false);
          }, 100);
        }}
        >
       {({ isSubmitting }) => (
         <Form className='centered-flex'>
           <ul>

          <li>
            <label>Name</label>
           <Field type="name" name="name" />
           <ErrorMessage name="name" component="div" />
           </li>
           <li>
            <label>Email</label>
           <Field type="email" name="email" />
           <ErrorMessage name="email" component="div" />
           </li>
           <li>
            <label>Phone</label>
           <Field type="phone" name="phone" />
           <ErrorMessage name="address" component="div" />
           </li>
           <li>
            <label>Address</label>
           <Field type="address" name="address" />
           <ErrorMessage name="address" component="div" />
           </li>
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
           </ul>

         </Form>
       )}
     </Formik>
   </div>


 );

 export default Basic