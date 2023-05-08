import React, { FormEvent, useState } from "react";
import { auth, provider, gitProvider } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useAuth, useGoogle, useGithub } from "../../App/hooks";
import { NavLink, useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage, FormikHelpers} from 'formik'
import { validationSchema } from './validationSchema'

const SignUp = () => {
  const navigate = useNavigate()

  const { handleGoogleAuth } = useGoogle(auth, provider);
  const { handleGitAuth } = useGithub(auth, gitProvider);

  interface FormValues {
    email: string;
    password: string;
  }
  

  const handleSubmit= async (values: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void })=> {

    try {
      const { email, password } = values;
      await createUserWithEmailAndPassword(auth, email, password);
      // toast.success('Logged in successfully!');
      navigate('/login')
    } catch (error) {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // toast.error(errorCode, errorMessage)
    } finally {
      setSubmitting(false);
    }
  }


  return (
    <div>
      <div className="w-screen h-screen fixed z-[9999] top-0 bg-primary">
        <h1 className=" text-4xl text-center text-seconndary font-medium mt-7">
          Create an account
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

                <span className="flex mt-4 text-secondary">Signed up already? <NavLink to='/login'><h1 className="text-accent ml-2">login</h1></NavLink></span>
                
                <span>
                  <button type='submit' className=" px-3 py-1 mt-6 bg-secondary text-accent w-[10em] rounded-md disabled:text-accent/30" disabled={isSubmitting}>Submit</button>
                </span>
              </Form>
            )}
            </Formik>

          <span className="mt-6">
            <h1 className="text-center text-xl text-secondary">Or</h1>
            <button
              className=" px-3 py-1 mt-4 flex justify-center bg-secondary mx-auto h-10 rounded-md text-accent w-[20em] pt-2"
              onClick={handleGoogleAuth}
            >
              <span className="mr-2 mt-1">
                <FcGoogle />
              </span>
              Sign up with Google
            </button>

            <button
              className=" px-3 py-1 mt-4 flex justify-center bg-secondary mx-auto h-10 rounded-md text-accent w-[20em] pt-2 mb-10"
              onClick={handleGitAuth}
            >
              <span className="mr-2 mt-1">
                <BsGithub />
              </span>
              Sign up with Github
            </button>
          </span>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
