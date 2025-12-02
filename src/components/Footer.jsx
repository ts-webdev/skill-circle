import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaTwitch, FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" bg-primary text-neutral-content py-11 ">
      <nav>
        <div className="container mx-auto flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between items-center">
          <div>
            <a className="text-2xl flex items-center italic">
              <img className="w-8 mr-1 animate-spin" src={logo} alt="" />{" "}
              <span className="text-[#4CC9F0] font-bold">Skill</span>Circle
            </a>
          </div>
          <ul className="flex flex-col sm:flex-row items-center gap-5 sm:gap-10">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 underline"
                    : "text-white hover:text-yellow-400"
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
                    ? "text-yellow-400 underline"
                    : "text-white hover:text-yellow-400"
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
                    ? "text-yellow-400 underline"
                    : "text-white hover:text-yellow-400"
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
                    ? "text-yellow-400 underline"
                    : "text-white hover:text-yellow-400"
                }
                to={"/login"}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 underline"
                    : "text-white hover:text-yellow-400"
                }
                to={"/signUp"}
              >
                Sign up
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="border-b-2 border-[#4361EE]/50 mt-7"></div>
      </nav>
      {/* contact */}
      <div className="md:flex grid sm:grid-cols-2 gap-5 md:gap-0 justify-center md:justify-between py-20 mx-5 sm:container sm:mx-auto">
        <div className=" md:inline">
          <h3 className="text-yellow-400 text-xl mb-3">Postal Address:</h3>
          <p className="text-white/60">
            PO Box 16122 Collins Street West <br /> Victoria 8007 Australia
          </p>
        </div>
        <div className=" md:inline">
          <h3 className="text-yellow-400 text-xl mb-3">Phone:</h3>
          <p className="text-white/60">
            +1 234 567 89 <br /> +0800 123 456 78
          </p>
        </div>
        <div className=" md:inline">
          <h3 className="text-yellow-400 text-xl mb-3">Email:</h3>
          <p className="text-white/60">
            skilcirclet@gmail.com <br /> skillcircle@yahoo.com
          </p>
        </div>
        <div className=" md:inline">
          <h3 className="text-yellow-400 text-xl mb-3">Follow Us:</h3>
          <p className="text-white/60  flex gap-4">
            <a href="https://www.facebook.com/dev.tanvirmahtab">
              <FaFacebook
                className="border p-2 rounded-lg hover:text-white/90 cursor-pointer"
                size={40}
              ></FaFacebook>
            </a>
            <a href="https://github.com/ts-webdev">
              <FaGithub
              className="border p-2 rounded-lg hover:text-white/90 cursor-pointer"
              size={40}
            ></FaGithub>
            </a>
            <a href="https://www.linkedin.com/m/in/tanvirmahtab-dev">
              <FaLinkedin
                className="border p-2 rounded-lg hover:text-white/90 cursor-pointer"
                size={40}
              ></FaLinkedin>
            </a>
          </p>
        </div>
      </div>
      {/* copyright */}
      <div className="bg-white/20 py-5">
        <div className="container mx-auto px-5 sm:px-0 text-center md:flex md:justify-center md:items-center gap-3">
          <p>Copyright © 2024 SkillCircle All Rights Reserved. ~</p>{" "}
          <a className="hover:text-yellow-400 cursor-pointer">Privacy Policy</a>{" "}
          I{" "}
          <a className="hover:text-yellow-400 cursor-pointer">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
