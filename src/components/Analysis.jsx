import React from "react";
import Report from "./Report";

const Analysis = ({ answers }) => {
  return (
    <div className="mx-auto my-8">
      <h1 className="text-4xl xsm:text-3xl text-slate-600 font-semibold ml-8">
        Question Analysis
      </h1>
      <Report answers={answers} />
    </div>
  );
};

export default Analysis;
