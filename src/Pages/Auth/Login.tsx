import React, { FormEvent, useState } from "react";
import Form from "../../Components/Form";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAutLogin } from "../../App/hooks";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleSubmit } = useAutLogin(auth, email, password);

  return (
    <div>
      <div className="w-screen h-screen fixed z-[9999] top-0 bg-primary">
        <h1 className=" text-4xl text-center text-seconndary font-medium mt-7">
          Create an account
        </h1>
        <span>
          <form
            className=" grid justify-items-center"
            onSubmit={(e) => handleSubmit(e)}
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

            <button className=" px-3 py-1 mt-4 bg-secondary text-accent w-[10em] rounded-md">
              Log In
            </button>
          </form>
        </span>
      </div>
    </div>
  );
};

export default Login;
