import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './Store'
import { FormEvent } from 'react';
import { SignInAuth } from '../Components/Types/types';

import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()


// e: FormEvent<HTMLFormElement>

export const useAuth = (auth: any, email: string, password: string): SignInAuth => {

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return { handleSubmit }
}

