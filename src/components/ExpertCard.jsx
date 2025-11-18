import React from "react";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ExpertCard = ({name, category, rating, image}) => {
  return (
    <div className="lg:w-64 flex flex-col items-center">
      <img className="rounded-full rounded-tl-none" src={image} alt="" />
      <p className="bg-white  py-1 px-4 inline-block text-center -mt-5 font-semibold rounded-xl border border-white hover:border-amber-300">
        <span className="text-2xl font-bold">{rating}</span>
        <span className="flex">
          <FaStar color={"orange"}></FaStar>
          <FaStar color={"orange"}></FaStar>
          <FaStar color={"orange"}></FaStar>
          <FaStar color={"orange"}></FaStar>
          <FaStarHalfAlt color={"orange"} />
        </span>
      </p>
      <h2 className="mt-2 text-3xl font-semibold">{name}</h2>
      <p className="text-gray-500">{category}</p>
    </div>
  );
};

export default ExpertCard;
