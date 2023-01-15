import React from "react";

const Quiz = ({ title, noq }) => {
  return (
    <div className="bg-slate-200 hover:shadow-md h-fit border-0 p-3 rounded cursor-pointer pb-4 text-center">
      <span className="font-normal px-4 py-3 text-2xl uppercase">{title}</span>

      <p className="font-light">{noq} of questions</p>
      <p className="font-light">Total points : {noq * 5} </p>
    </div>
  );
};

export default Quiz;
