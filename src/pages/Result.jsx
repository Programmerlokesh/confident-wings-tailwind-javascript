import { useLocation, useParams } from "react-router-dom";
import { Analysis, Summary } from "../components";
import useAnswers from "../hooks/useAnswers";

const Result = () => {
  const { id } = useParams();
  const { answers, error, loading } = useAnswers(id);
  const location = useLocation();
  // console.log(location.state);

  // const { state } = location;

  // console.log(state);

  // function calculate() {
  //   let score = 0;

  //   answers.forEach((question, index1) => {
  //     let correctIndexes = [],
  //       checkedIndexes = [];

  //     question.options.forEach((option, index2) => {
  //       if (option.correct) correctIndexes.push(index2);
  //       if (qna[index1].options[index2].checked) {
  //         checkedIndexes.push(index2);
  //         option.checked = true;
  //       }
  //     });

  //     if (_.isEqual(correctIndexes, checkedIndexes)) {
  //       score = score + 5;
  //     }
  //   });

  //   return score;
  // }

  // const userScore = calculate();
  return (
    <>
      {loading && <div className="text-green-400 text-xl">Loading ...</div>}
      {error && <div className="text-red-500 text-xl">There was an error!</div>}
      <section className="bg-slate-100 -mt-6 h-full">
        {answers && answers.length > 0 && (
          <>
            <Summary noq={answers.length} />
            <Analysis answers={answers} />
          </>
        )}
      </section>
    </>
  );
};

export default Result;
