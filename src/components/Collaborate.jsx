import React from "react";
import Marquee from "react-fast-marquee";
import partner1 from "../assets/partner1.png"
import partner2 from "../assets/partner2.png"
import partner3 from "../assets/partner3.png"
import partner4 from "../assets/partner4.png"
import partner5 from "../assets/partner5.png"

const Collaborate = () => {
  return (
    <div className="bg-[#caf0f8] -mt-16 rounded-2xl py-5 sm:container mx-5 sm:mx-auto animate__animated animate__fadeInUpBig">
      <h2 className="text-center font-semibold text-2xl">We Collaborate With <span className="text-primary">200+</span> Leading Universities And Companies</h2>
      <Marquee className="mt-5">
        <div>
            <img className="h-10 mr-5 sm:mr-48" src={partner1} alt="" />
        </div>
        <div>
            <img className="h-10 mr-5 sm:mr-48" src={partner2} alt="" />
        </div>
        <div>
            <img className="h-10 mr-5 sm:mr-48" src={partner3} alt="" />
        </div>
        <div>
            <img className="h-10 mr-5 sm:mr-48" src={partner4} alt="" />
        </div>
        <div>
            <img className="h-10 mr-5 sm:mr-48" src={partner5} alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default Collaborate;
