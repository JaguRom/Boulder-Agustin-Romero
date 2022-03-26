// Render Prop
import React from 'react';
import "./FormikForm.css";
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

 const Basic = () => (

   <div className='form-div'>

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
            toast.success('Form Sent', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
            localStorage.setItem('values', JSON.stringify(values));
           document.querySelector('.toShow').classList.toggle('show');

           setSubmitting(false);
          }, 0);
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
           <button className='submit-button' type="submit" disabled={isSubmitting}>
             Submit
           </button>
           </ul>
           <ToastContainer 
            position="top-center"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover />
         </Form>
       )}
     </Formik>
   </div>
 );

 export default Basic