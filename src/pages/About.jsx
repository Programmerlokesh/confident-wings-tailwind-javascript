import aboutImg from "../assets/about.svg";
import Contact from "./Contact";

const About = () => {
  return (
    <>
      <section className="pt-36 px-16 xsm:px-8">
        <div className="flex xsm:flex-wrap lg:flex-nowrap xsm:gap-11 md:flex-nowrap">
          <div className="details flex flex-col justify-center flex-auto">
            <h1 className="uppercase font-semibold text-5xl text-indigo-500">
              About us
            </h1>
            <p className="mt-6 mb-14 max-w-4xl font-sans text-justify">
              Confident Wings is a career coaching services located in Basirhat,
              WB. Offering a variety of services, Confident Wings seeks to help
              individuals identify the career path that is most suited for them.
              Through assessments, career mapping and personalized guidance,
              Confident Wings helps individuals achieve their goals. I recently
              began utilizing the services of Confident Wings to help me develop
              a career roadmap that is tailored to my individual needs. With the
              assistance of their knowledgeable and experienced staff, I have
              been able to identify the best route to take in order to achieve
              my professional goals. My experience has been positive, and I am
              confident that Confident Wings has given me the tools and guidance
              I need to succeed. Highly recommended.
            </p>
          </div>
          {/* img */}
          <div className="img flex justify-center items-center">
            <img src={aboutImg} alt="aboutImg" className="max-w-[90%]" />
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default About;
