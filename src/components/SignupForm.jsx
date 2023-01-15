import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FcLock, FcPrivacy } from "react-icons/fc";
import { MdAlternateEmail } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import signupimg from "../assets/signup.svg";
import { useAuth } from "../contexts/AuthContext";

import Button from "./Button";
import Checkbox from "./Checkbox";

const SignupForm = () => {
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { signup } = useAuth();
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // do validation
    if (password !== confirmPassword) {
      return setError("Passwords don't match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      history("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Failed to create an account!");
    }
  }
  return (
    <section className="pb-36">
      <h1 className="text-center text-5xl pb-16 xsm:pb-12 font-semibold">
        Signup to your account
      </h1>
      <div className="flex flex-row justify-between lg:mx-24 xsm:mx-10">
        {/* Image Section */}
        <div className="image flex-auto xsm:hidden sm:hidden md:block">
          <img
            src={signupimg}
            alt="SignupImage"
            className="items-center align-middle h-96 lg:h-80 md:h-64"
          />
        </div>

        <div className="flex-auto contact-form max-w-[50rem] lg:m-auto">
          <form
            className="contact-inputs flex flex-col gap-5"
            onSubmit={handleSubmit}
          >
            <div className="w-full h-12 flex items-center rounded-md ring-1 ring-slate-300 p-1">
              <input
                id="username"
                type="text"
                placeholder="Enter your name"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border-none outline-none h-full w-full px-3 py-2 text-base font-medium"
              />
              <span className="w-10 h-10 flex items-center justify-center cursor-pointer text-2xl">
                {<FaUserAlt />}
              </span>
            </div>

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

            <div className="w-full h-12 flex items-center rounded-md ring-1 ring-slate-300 p-1">
              <input
                id="password"
                type="text"
                placeholder="Confirm Password"
                autoComplete="off"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border-none outline-none h-full w-full px-3 py-2 text-base font-medium"
              />
              <span className="w-10 h-10 flex items-center justify-center cursor-pointer text-2xl">
                {<FcPrivacy />}
              </span>
            </div>

            <Checkbox
              text="I agree to the Terms &amp; Conditions"
              required
              value={agree}
              onChange={(e) => setAgree(e.target.value)}
            />

            <Button disabled={loading}>Sign up</Button>
            {error && <p className="error">{error}</p>}

            <div className="info mt-1 text-center">
              Don't have an account?{" "}
              <NavLink to="/login" className="text-blue-600">
                Login
              </NavLink>{" "}
              instead.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
