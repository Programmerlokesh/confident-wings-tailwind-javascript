import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import footerlogo from "../assets/footerlogo.svg";

const Footer = () => {
  return (
    <footer className="bottom-0 w-full pt-40">
      <section className="grid items-center grid-cols-3 justify-items-center  bg-[#FFCD00] pt-5">
        {/* Logo */}
        <div className="logo">
          <NavLink to="/">
            <div className="logo">
              <img src={footerlogo} alt="" className="h-32 xsm:h-24" />
            </div>
          </NavLink>
        </div>
        {/* Why us */}
        <div className="about flex flex-col justify-center items-center">
          <h2 className="text-xl lg:text-base xsm:text-sm uppercase font-semibold">
            Support
          </h2>
          <ul className="text-center">
            <li className="font-mono text-sm sm:text-xs hover:underline cursor-pointer">
              <NavLink to="/">Why Condident Wings?</NavLink>
            </li>
            <li className="font-mono text-sm sm:text-xs hover:underline cursor-pointer">
              <NavLink to="/about">About US</NavLink>
            </li>
            <li className="font-mono text-sm sm:text-xs hover:underline cursor-pointer">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        {/* Icon */}
        <div className="">
          <h2 className="text-lg font-medium text-black">Follow us</h2>
          <ul className="flex gap-7 xsm:gap-6 xsm:flex-col lg:flex-row md:flex-row sm:flex-row justify-center items-center">
            <li className="lg:text-2xl text-black xsm:text-lg">
              <a
                href="https://www.facebook.com/susanta.mondal.3958"
                target="_blank"
                rel="noreferrer"
              >
                {<FaFacebook />}
              </a>
            </li>

            <li className="lg:text-2xl text-black xsm:text-lg">
              <a
                href="https://www.instagram.com/susanta4201/"
                target="_blank"
                rel="noreferrer"
              >
                {<FaInstagram />}
              </a>
            </li>

            <li className="text-black lg:text-2xl xsm:text-lg">
              <a
                href="https://www.youtube.com/@confidentwings1017/"
                target="_blank"
                rel="noreferrer"
              >
                {<FaYoutube />}
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* bottom section  */}
      <div className="bg-[#FFCD00] pt-7">
        <hr />
        <div className="text-center">
          <p className="font-semibold">
            @{new Date().getFullYear()} Lokesh Debnath. All Rights Reserved
          </p>
          <div className="text-base font-bold">
            <p>PRIVACY POLICY</p>
            <p>TERMS & CONDITIONS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
