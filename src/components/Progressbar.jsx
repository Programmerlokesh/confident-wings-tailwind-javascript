import React, { useRef, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Progressbar = ({ next, prev, submit, progress }) => {
  const [tooltip, setTooltip] = useState(false);
  const tooltipRef = useRef();

  // eslint-disable-next-line no-unused-vars
  function toggleTooltip() {
    if (tooltip) {
      setTooltip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setTooltip(true);
      tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
      tooltipRef.current.style.display = "block";
    }
  }
  return (
    <div className="w-[calc(100vw-100px)] h-16 left-0 right-0 top-auto mx-auto my-0 bg-white border border-solid border-[#e5e5e5] rounded-lg flex justify-between items-center relative">
      <div
        className="left-0 absolute h-full flex items-center px-4 bg-[#FFCD00] hover:scale-95 cursor-pointer"
        onClick={prev}
      >
        <span className="text-xl">
          <AiOutlineArrowLeft />
        </span>
      </div>
      <div className="w-full relative my-0">
        <div ref={tooltipRef} className="text-center font-medium font-sans">
          {Math.floor(progress)}% Complete!
        </div>
        {/* <div className="w-full bg-[#FFCD00] rounded-full h-[4px] mb-4">
          <div
            className="absolute h-4 rounded-full"
            style={{ width: `${progress}%` }}
            onMouseOver={toggleTooltip}
            onMouseOut={toggleTooltip}
          ></div>
        </div> */}
      </div>
      <div
        className="right-0 absolute h-full flex items-center px-4 bg-[#FFCD00] cursor-pointer hover:scale-95"
        onClick={progress === 100 ? submit : next}
      >
        <span className="lg:block md:block sm:hidden xsm:hidden">
          {progress === 100 ? "Submit Quiz" : "Next Question"}
        </span>
        <span className="text-xl">
          <AiOutlineArrowRight />
        </span>
      </div>
    </div>
  );
};

export default Progressbar;
