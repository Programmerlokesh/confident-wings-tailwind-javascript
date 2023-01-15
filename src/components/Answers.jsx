import React, { Fragment } from "react";
import Checkbox from "./Checkbox";

const Answers = ({ options = [], handleChange, input }) => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:px-40 px-4 justify-center items-center gap-3 py-11">
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <Checkbox
              key={index}
              className={`bg-slate-200 hover:bg-slate-300 w-full flex items-center gap-8 font-medium py-5 cursor-pointer rounded px-5 transition-all duration-100`}
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(e) => handleChange(e, index)}
            />
          ) : (
            <Checkbox
              key={index}
              className={`bg-slate-200 hover:bg-slate-300 w-full flex items-center gap-8 font-medium py-5 cursor-pointer rounded px-5 ${
                option.correct
                  ? `bg-[#00ff84]`
                  : option.checked
                  ? `bg-[#ffc0c7]`
                  : null
              }`}
              text={option.title}
              defaultChecked={option.checked}
              disabled
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Answers;
