import { useState } from "react";
import { FcLock } from "react-icons/fc";
import { MdAlternateEmail } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import loginimg from "../assets/securelogin.svg";
import { useAuth } from "../contexts/AuthContext";

import Button from "./Button";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { login } = useAuth();
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Failed to login");
    }
  }

  return (
    <section className="pb-36">
      <h1 className="text-center text-5xl pb-16 xsm:pb-12 font-semibold">
        Login to your account
      </h1>
      <div className="flex flex-row justify-between lg:mx-24 xsm:mx-10">
        {/* Image Section */}
        <div className="image flex-auto xsm:hidden sm:hidden md:block">
          <img
            src={loginimg}
            alt="LoginImage"
            className="items-center align-middle h-96 lg:h-80 md:h-64"
          />
        </div>
        {/* Form Section */}
        <div className="form flex-auto pt-11">
          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <div className="w-full h-12 flex items-center rounded-md ring-1 ring-slate-300 p-1">
              <input
                id="username"
                type="text"
                placeholder="Enter Email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-none outline-none h-full w-full px-3 py-2 text-base font-medium"
              />
              <span className="w-10 h-10 flex items-center justify-center cursor-pointer text-2xl">
                {<MdAlternateEmail />}
              </span>
            </div>

            <div className="w-full h-12 flex items-center rounded-md ring-1 ring-slate-300 p-1">
              <input
                id="password"
                type="text"
                placeholder="Enter Password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-none outline-none h-full w-full px-3 py-2 text-base font-medium"
              />
              <span className="w-10 h-10 flex items-center justify-center cursor-pointer text-2xl">
                {<FcLock />}
              </span>
            </div>
            <Button disabled={loading}>Log in</Button>

            {error && <p className="error">{error}</p>}

            <div className="info mt-4 text-center">
              Don't have an account?{" "}
              <NavLink to="/signup" className="text-blue-600">
                Signup
              </NavLink>{" "}
              instead.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
