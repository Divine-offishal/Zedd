import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './Store'
import { FormEvent, MouseEvent } from 'react';
import { SignInAuth, GoogleAuth, GitAuth } from '../Components/Types/types';
import { useNavigate } from 'react-router-dom'


import {  GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, GithubAuthProvider, getRedirectResult, signInWithEmailAndPassword } from "firebase/auth";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()



// Email and password auth
export const useAuth = (auth: any, email: string, password: string): SignInAuth => {

  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate('/login')
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

export const useAutLogin = (auth: any, email: string, password: string): SignInAuth => {

  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate('/saved')
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

// Google Signin
export const useGoogle = (auth: any, provider: GoogleAuthProvider): GoogleAuth => {

  const navigate = useNavigate()

  const handleGoogleAuth = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      navigate('/saved')
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorMessage)
      // ...
    });
  }

  return {
    handleGoogleAuth,
  }
}


export const useGithub = ( auth: any, gitProvider: GithubAuthProvider): GitAuth => {

  const navigate = useNavigate()

  const handleGitAuth = (e: MouseEvent<HTMLButtonElement>) => {


    signInWithPopup(auth, gitProvider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
    
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        navigate('/saved')
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        console.log(errorCode. errorMessage)
        // ...
    });
  }

  return {handleGitAuth}
}

