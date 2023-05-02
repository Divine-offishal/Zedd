import React, { FormEvent, useState } from "react";
import { auth, provider, gitProvider } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useAuth, useGoogle, useGithub } from "../../App/hooks";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleSubmit } = useAuth(auth, email, password);

  const { handleGoogleAuth } = useGoogle(auth, provider);
  const { handleGitAuth } = useGithub(auth, gitProvider);

  return (
    <div>
      <div className="w-screen h-screen fixed z-[9999] top-0 bg-primary">
        <h1 className=" text-4xl text-center text-seconndary font-medium mt-7">
          Create an account
        </h1>
        <span>
          <form
            className=" grid justify-items-center mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mt-20">
              <label className="block text-secondary" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="md:w-[45em] w-[20em] h-12 border-2 border-secondary bg-primary px-6 text-secondary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mt-20">
              <label className="block text-secondary" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="md:w-[45em] w-[20em] h-12 border-2 border-secondary bg-primary px-6 text-secondary"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className=" px-3 py-1 mt-6 bg-secondary text-accent w-[10em] rounded-md">
              Sign Up
            </button>
          </form>

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
              className=" px-3 py-1 mt-4 flex justify-center bg-secondary mx-auto h-10 rounded-md text-accent w-[20em] pt-2"
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
