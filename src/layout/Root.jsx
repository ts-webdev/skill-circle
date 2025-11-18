import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import "animate.css";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <div>
        <Toaster />
      </div>
    </>
  );
};

export default Root;
