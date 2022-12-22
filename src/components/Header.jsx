import Navbar from "./Navbar";

const navLinks = [
  {
    address: "/",
    name: "Home",
  },
  {
    address: "/about",
    name: "About",
  },
  {
    address: "/quiz",
    name: "Quiz",
  },
  {
    address: "/contact",
    name: "Contact",
  },
];

const Header = () => {
  return (
    <header>
      <Navbar navLinks={navLinks} />
    </header>
  );
};

export default Header;
