import {useState} from "react";
import {close, menu} from "../assets";
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const handleLinkClick = () => {
    // Close the toggle when a link is clicked
    if (toggle) {
      setToggle(false);
    }
  };

  const navLinks = [
    {
      title: "Home",
      path: "/home"
    },
    {
      title: "Heat map",
      path: "/heatmap"
    },
    {
      title: "Volunteer",
      path: "/volunteer"
    },
    {
      title: "Log in",
      path: "/login"
    }
  ];

  return (
    // Navigation Menu
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <Link to="/home">
        {/* <img src={logo} alt="res" className="w-[124px] h-[32px]" /> */}
      </Link>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <NavLink
            to={nav.path}
            key={index}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-blue-600" : "text-white"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => {
              setActive(nav.title);
              handleLinkClick(); // Call the handleLinkClick function
            }}
          >
            {nav.title}
          </NavLink>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center z-[100]">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[280px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <NavLink
                to={nav.path}
                key={index}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  active === nav.title ? "text-blue-600" : "text-white"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-5"}`}
                onClick={() => {
                  setActive(nav.title);
                  handleLinkClick();
                }}
              >
                {nav.title}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;