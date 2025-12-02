import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import "animate.css";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "../components/ScrollToTop";

const Root = () => {
  return (
    <>
      <ScrollToTop />
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
