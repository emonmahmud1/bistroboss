import { FaCartArrowDown, FaRegCalendarCheck, FaShopify } from "react-icons/fa";
import { IoHome, IoMenu } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { MdReviews } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart]=useCart()
  return (
    <div className="flex h-screen">
      <div className="w-[250px] bg-[#D1A054] border text-center h-screen drawer">
        <ul className="menu uppercase">
          <li>
            <NavLink to="/dashboard/userhome">
              <IoHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaCartArrowDown />
              My Cart <span className="bg-green-300 rounded-lg text-black px-2">{cart.length}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <SlCalender />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addreview">
              <MdReviews />
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/mybookings">
              <FaRegCalendarCheck />
              My Bookings
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <IoHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <IoMenu /> menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactus">
              <IoIosContact />
              contact us
            </NavLink>
          </li>

          <li>
            <NavLink to="/order/salad">
              {" "}
              <FaShopify />
              shop
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="bg-[#F6F6F6] flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
