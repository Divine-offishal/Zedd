import React, { FormEvent, useState } from "react";
// import Form from "../../Components/Form";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { toast } from "react-hot-toast";

import { Formik, Form, Field, ErrorMessage, FormikHelpers} from 'formik'
import { validationSchema } from './validationSchema'

const Login = () => {

  const navigate = useNavigate()

  interface FormValues {
    email: string;
    password: string;
  }

  const handleSubmit = async (values: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    try {
      const { email, password } = values;
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Logged in successfully!');
      navigate('/saved')
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorCode, errorMessage)
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <div className="w-screen h-screen fixed z-[9999] top-0 bg-primary">
        <h1 className=" text-4xl text-center text-seconndary font-medium mt-7">
          Log In
        </h1>
        <span>
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({isSubmitting}) => (
              <Form className=" grid justify-items-center mb-4">
                <div className="grid justify-items-center mt-20">
                  <Field type="email" name="email" placeholder="Email" className="md:w-[45em] w-[20em] h-12 border-2 border-secondary bg-primary px-6 text-secondary"/>
                  <ErrorMessage name="email" component="div" className='text-red-500 text-xl font-bold mx-auto'/>
                </div>
                <div className='w-full grid justify-items-center my-4 mt-10'>
                  <Field type="password" name="password" placeholder="password" className="md:w-[45em] w-[20em] h-12 border-2 border-secondary bg-primary px-6 text-secondary"/>
                  <ErrorMessage name="password" component="div" className='text-red-500 text-xl font-bold'/>
                </div>
                
                <span>
                  <button type='submit' className=" px-3 py-1 mt-6 bg-secondary text-accent w-[10em] rounded-md disabled:text-accent/30" disabled={isSubmitting}>Submit</button>
                </span>
              </Form>
            )}
            </Formik>
        </span>
      </div>
    </div>
  );
};

export default Login;
