import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navOptions = (
    <>
      <li>
        <NavLink to="/">home</NavLink>
      </li>
      <li>
        <NavLink to="/contactus">contact us</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/menu">our menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">our shop</NavLink>
      </li>
      <li>
        <NavLink to="/login">login</NavLink>
      </li>
    </>
  );

  return (
    // <div className="navbar fixed z-10 bg-opacity-30 text-white max-w-screen-xl bg-base-100">
    <div
      className={`navbar fixed z-10 text-white max-w-screen-xl transition-all duration-300 ${
        scrollPosition > 50
          ? "bg-opacity-100 bg-[#D99904]"
          : "bg-opacity-30 bg-base-100"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow mx-3"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal uppercase mx-3">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
