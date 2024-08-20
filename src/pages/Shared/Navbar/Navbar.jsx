import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../contextProvider/AuthProvider";
import toast from "react-hot-toast";
import { BsCart4 } from "react-icons/bs";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { logout, user } = useContext(AuthContext);
  const [cart]= useCart()
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropDown = () => {
    setShowDropdown(!showDropdown);
  };
  const logoutUser = () => {
    logout()
      .then(() => {
        toast.success("User logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

      {user ? (
        <></>
      ) : (
        <li>
          {" "}
          <NavLink
            to="/login"
            className="border text-green-200 border-green-200"
          >
            login
          </NavLink>{" "}
        </li>
      )}
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
          <div
            onClick={handleDropDown}
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
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
          {showDropdown && (
            <ul
              tabIndex={0}
              className="menu menu-sm uppercase dropdown-content rounded-box z-[1] mt-3 w-52 p-2 bg-slate-500 shadow mx-3"
            >
              {navOptions}
            </ul>
          )}
        </div>
        <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal uppercase mx-3">{navOptions}</ul>
      </div>
      <div className="navbar-end gap-4">
        <NavLink to='/dashboard/cart' className="btn">
        <BsCart4 className="text-green-700 text-xl"/>
          <div className="badge badge-success">{cart?.length}</div>
        </NavLink>
        {user && (
          <button
            onClick={logoutUser}
            className="btn btn-ghost btn-outline text-red-300"
          >
            logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
