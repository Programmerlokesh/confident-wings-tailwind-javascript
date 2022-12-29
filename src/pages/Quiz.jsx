import { Answers, Progressbar } from "../components";

const Quiz = () => {
  return (
    <section className="t-40 md:pt-32 sm:pt-28 xsm:pt-[8rem]">
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />

      <Progressbar />
    </section>
  );
};

export default Quiz;
