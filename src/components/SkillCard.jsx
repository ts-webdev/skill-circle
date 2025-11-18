import React from "react";
import { FaDollarSign, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const SkillCard = ({ skill }) => {
  return (
    <div className="rounded-br-4xl bg-base-100 hover:bg-blue-50  shadow-lg md:max-h-112 hover:scale-102 transition ease-in-out">
      <figure>
        <img
          className="rounded-tl-4xl"
          src={skill.image}
          alt="Shoes"
        />
      </figure>
      <div className="p-7 flex h-64 flex-col">
        <h2 className="text-2xl font-bold flex-1">{skill.skillName}</h2>
        <div className="flex justify-between items-center my-5 bg-[#e6eaff] rounded-full">
          <p className="flex items-center gap-1 text-xl bg-[#4361EE] text-white rounded-l-full py-2 px-3">
            <FaDollarSign />
            {skill.price}
          </p>
          <p className="flex items-center gap-1 pr-4">
            <FaStar color="orange" />
            {skill.rating}
          </p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/viewDetails/${skill.skillId}`} className="btn text-white bg-[#560BAD]">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
