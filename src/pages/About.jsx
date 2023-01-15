import { NavLink } from "react-router-dom";
import aboutImg from "../assets/about.svg";
import Contact from "./Contact";

const About = () => {
  return (
    <>
      <section className="text-gray-600">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              src={aboutImg}
              alt="aboutImg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Confident Wings
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              Confident Wings is a career coaching services located in Basirhat,
              West Bengal. Confident Wings is a phrase that could refer to a
              number of different things, depending on the context in which it
              is used. It could be the name of a business, organization, or
              program that focuses on helping people develop confidence and
              self-assurance in their abilities or actions. It could also be
              used more broadly as a metaphor for feeling strong and capable, as
              if you have wings that allow you to soar and accomplish your
              goals. In either case, the idea behind Confident Wings is to
              provide support, guidance, and resources to help people feel more
              confident and capable in their endeavors. This could involve
              providing education or training, offering encouragement and
              motivation, or helping people develop the skills and resources
              they need to succeed. Ultimately, the goal of Confident Wings
              would be to help people feel empowered and capable of achieving
              their goals, whatever they may be.
            </p>
            <div className="flex justify-center">
              <NavLink to="/quizhome">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Quiz
                </button>
              </NavLink>
              <NavLink to="/">
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Home
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

export default About;
