import success from "../assets/success.png";

const Summary = ({ noq }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-40 xsm:px-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:px-24 md:px-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mt-12">
          <p className="text-3xl font-semibold">Your score is </p>
          <p className="text-3xl font-semibold text-center">
            {noq * Math.floor(5)} out of {noq * 5}
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={success}
          />
        </div>
      </div>
    </section>
  );
};

export default Summary;
