import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FcMenu } from "react-icons/fc";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import headerlogo from "../assets/headerlogo1.svg";
import avatarLogo from "../assets/success.png";
import { useAuth } from "../contexts/AuthContext";

const Navbar = ({ navLinks }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openAvatar, setOpenAvatar] = useState(false);
  const [beforeWebsite, setBeforeWebsite] = useState();

  const openNavbar = () => {
    setOpenMenu(!openMenu);
  };
  const openAvatarMenu = () => {
    setOpenAvatar(!openAvatar);
  };

  const { currentUser, logout } = useAuth();

  return (
    <header className="container max-w-full fixed z-50">
      <nav className="flex justify-between bg-[#FFCD00] p-3 items-center h-28 shadow-lg shadow-indigo-200 xsm:h-24">
        {/* NavLinks */}
        <div className="menubar transition-all duration-150">
          <span className="text-2xl cursor-pointer" onClick={openNavbar}>
            {openMenu ? <RxCross1 /> : <FcMenu />}
          </span>
        </div>
        {/* Logo */}
        <div className="logo pt-2">
          <img src={headerlogo} alt="" className="h-32 xsm:h-28" />
        </div>
        {/* Login Avatar */}
        <>
          {currentUser ? (
            <>
              <div className="avatar ring-2 rounded-full block relative ring-indigo-600 bg-slate-800 cursor-pointer">
                <img
                  src={avatarLogo}
                  alt="profileIcon"
                  className="h-10 mx-auto object-cover w-10"
                  onClick={openAvatarMenu}
                />
              </div>
              <div
                className={`avatar_box right-0 absolute w-40 h-28 bg-white shadow-lg shadow-indigo-200 top-24 ${
                  openAvatar ? "block" : "hidden"
                }`}
              >
                <ul className="flex flex-col justify-center items-center align-middle">
                  <li className="cursor-pointer text-xl pt-5">
                    {currentUser.displayName}
                  </li>
                  <li className="cursor-pointer text-xl pt-4" onClick={logout}>
                    Log Out
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="cursor-pointer text-3xl text-slate-600">
                <span onClick={() => setBeforeWebsite(!beforeWebsite)}>
                  <FaUserCircle />
                </span>
              </div>
              <div
                className={`avatar_box right-0 absolute w-40 h-28 bg-white shadow-lg shadow-indigo-200 top-24 ${
                  beforeWebsite ? "block" : "hidden"
                }`}
              >
                <ul className="flex flex-col justify-center items-center align-middle transition-all duration-150">
                  <li className="cursor-pointer text-xl pt-5 transition-all duration-150">
                    <NavLink
                      to="/login"
                      onClick={() => setBeforeWebsite(!beforeWebsite)}
                    >
                      Log in
                    </NavLink>
                  </li>
                  <li className="cursor-pointer text-xl pt-5 transition-all duration-150">
                    <NavLink
                      to="/signup"
                      onClick={() => setBeforeWebsite(!beforeWebsite)}
                    >
                      Sign up
                    </NavLink>
                  </li>
                </ul>
              </div>
            </>
          )}
        </>
      </nav>
      {/* Avatar box */}

      {/* NavLinks box */}
      <div
        className={`menulist h-screen max-h-screen bg-white shadow-lg shadow-indigo-200 block md:w-60 xsm:w-full sm:w-60 ${
          openMenu ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col justify-center text-center items-center pt-44 xsm:pt-20 ">
          {navLinks.map((link, i) => (
            <li
              key={i}
              className="text-xl xsm:text-2xl pb-16 hover:text-indigo-500 duration-200"
            >
              <NavLink to={link.address} onClick={() => setOpenMenu(false)}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
