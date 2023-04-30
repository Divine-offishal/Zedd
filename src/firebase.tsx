
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWb4gDt_yKb45LhwPd66c2O3X-B2fP8ls",
  authDomain: "zedd-3584e.firebaseapp.com",
  projectId: "zedd-3584e",
  storageBucket: "zedd-3584e.appspot.com",
  messagingSenderId: "331834100819",
  appId: "1:331834100819:web:46f5f27fe6badb6e8e4aa6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();