import React, { use, useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../auth/AuthProvider";
import toast from "react-hot-toast";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { IoMdPersonAdd } from "react-icons/io";
import defaultPhoto from "../assets/defaultPhoto.jpg"

const Navbar = () => {
  const { user, setUser, logout } = use(AuthContext);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-purple-700 rounded-full px-5 py-2 text-white"
              : "hover:rounded-full px-5 py-2"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-purple-700 rounded-full px-5 py-2 text-white"
              : "hover:rounded-full px-5 py-2"
          }
          to={"/all-skills"}
        >
          All Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-purple-700 rounded-full px-5 py-2 text-white"
              : "hover:rounded-full px-5 py-2"
          }
          to={"/profile"}
        >
          My Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-purple-700 rounded-full px-5 py-2 text-white"
              : "hover:rounded-full px-5 py-2"
          }
          to={"/about"}
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-purple-700 rounded-full px-5 py-2 text-white"
              : "hover:rounded-full px-5 py-2"
          }
          to={"/contact"}
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Successfully Logout!");
        setUser(null);
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <nav className={`fixed z-50 w-full top-3 px-5 transition-all duration-300 ease-in-out ${isScroll? "" : "bg-white -mt-3 pt-2"}`}>
      <div
        className={`${
          isScroll ? "bg-white/70 shadow-lg backdrop-blur-md" : "bg-transparent"
        } navbar container transition-all duration-300 ease-in-out mx-auto rounded-full px-5`}
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            to={"/"}
            className="text-2xl flex items-center italic cursor-pointer"
          >
            <img
              className="w-8 mr-1 animate-spin hidden sm:block"
              src={logo}
              alt=""
            />
            <span className="text-[#560BAD] font-bold">Skill</span>Circle
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-2">{links}</ul>
        </div>
        {user ? (
          <div className="navbar-end flex gap-2">
            <div title={user.displayName} className="hidden sm:block avatar">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                <img src={user.photoURL || defaultPhoto}  />
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="bg-purple-700 btn rounded-full px-5 py-5 text-white"
            >
              <BiLogOutCircle size={20} />
              Logout
            </button>
          </div>
        ) : (
          <div className="navbar-end flex gap-2">
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                isActive
                  ? "bg-purple-700 rounded-full px-5 py-2 text-white flex items-center gap-1"
                  : "hover:rounded-full px-5 btn rounded-full flex items-center gap-1"
              }
            >
              {/* btn rounded-full  */}
              <BiLogInCircle size={20} />
              Log in
            </NavLink>
            <NavLink
              to={"/signUp"}
              className={({ isActive }) =>
                isActive
                  ? "bg-purple-700 rounded-full px-5 py-2 text-white sm:flex items-center gap-1 hidden"
                  : "hover:rounded-full px-5 btn rounded-full btn-primary sm:flex items-center gap-1 hidden"
              }
            >
              <IoMdPersonAdd size={20} />
              Sign up
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
