import React from "react";
import { NavLink } from "react-router-dom";
import errorImage from "../assets/error.svg";
import Button from "../components/Button";

const Error = () => {
  return (
    <section className="">
      <div className="flex justify-center items-center flex-col pb-40">
        <img src={errorImage} alt="error" className="pb-12" />
        <NavLink to="/">
          <Button>Go Back</Button>
        </NavLink>
      </div>
    </section>
  );
};

export default Error;
