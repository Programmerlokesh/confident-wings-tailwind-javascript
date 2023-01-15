import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Answers from "./Answers";

const Report = ({ answers = [] }) => {
  return answers.map((answer, index) => (
    <div className="bg-white p-3 mx-8 rounded my-8" key={index}>
      <div className="flex items-center gap-1">
        <span className="text-green-400 font-semibold text-xl px-2">
          <AiOutlineQuestionCircle />
        </span>
        {answer.title}
      </div>
      <Answers input={false} options={answer.options} />
    </div>
  ));
};

export default Report;
