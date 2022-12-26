import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import classes from "../styles/ProgressBar.module.css";

const Progressbar = () => {
  return (
    <div className="w-[calc(100vw-100px)] h-16 left-0 right-0 top-auto mx-auto my-0 bg-white border border-solid border-[#e5e5e5] rounded-lg grid justify-between items-center">
      <div className={classes.backButton}>
        <span className="material-icons-outlined">
          {" "}
          <AiOutlineArrowLeft />{" "}
        </span>
      </div>
      {/* <div className={classes.rangeArea}>
        <div className={classes.tooltip}>24% Cimplete!</div>
        <div class="w-full bg-gray-200 rounded-full">
          <div
            className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
            style={{ width: "25%" }}
          >
            {" "}
            25%
          </div>
        </div>
      </div> */}
      <div className={classes.backButton}>
        <span className="">
          {" "}
          <AiOutlineArrowRight />{" "}
        </span>
      </div>
    </div>
  );
};

export default Progressbar;
