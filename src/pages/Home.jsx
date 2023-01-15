import { NavLink } from "react-router-dom";
import homeImg from "../assets/home.svg";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <section className="text-gray-600">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={homeImg}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Confident Wings
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              Confident Wings could be a language learning center that
              specializes in helping students improve their English language
              skills. It could offer a range of courses or programs designed to
              help students develop their speaking, listening, reading, and
              writing skills in English. These programs might include group
              classes, individual tutoring, or online courses, and could be
              tailored to different learning levels and goals. The center could
              also offer additional resources and support to help students
              succeed, such as language exchange programs, cultural workshops,
              or access to online learning materials. The goal of Confident
              Wings would likely be to help students feel more confident and
              capable in their English language abilities, and to provide the
              tools and support they need to achieve their language learning
              goals.
            </p>
            <div className="flex justify-center">
              <NavLink to="/quizhome">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Quiz
                </button>
              </NavLink>
              <NavLink to="/about">
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  About us
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default Home;
