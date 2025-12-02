import React from "react";
import teacher1 from "../assets/teacher1.jpg";
import teacher2 from "../assets/teacher2.jpg";
import teacher3 from "../assets/teacher3.jpg";
import teacher4 from "../assets/teacher4.jpg";
import teacher5 from "../assets/teacher5.jpg";
import teacher6 from "../assets/teacher6.jpg";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import ExpertCard from "./expertCard";

const Experts = () => {
  return (
    <div className=" bg-linear-to-r from-[#ffc8dd] via-[#bde0fe] to-[#a2d2ff] mt-22">
      <div className="md:container mx-5 lg:hidden pt-10 flex flex-col items-center animate__animated  animate__fadeInUp">
        <h2 className="text-[#4361EE] text-lg font-semibold rounded-full bg-[#4362ee25] py-2 px-6 border boder-[#4361EE]">
          Top Rated Providers
        </h2>
        <h1 className="text-6xl font-bold mt-4 text-center">
          Learn from Industry Experts
        </h1>
        <p className="text-gray-600 w-2/3 text-center mt-4 text-lg">
          Our courses are crafted by industry professionals and subject matter
          experts. Benefit from their wealth of experience, practical insights,
          and real-world knowledge.
        </p>
      </div>
      <div className="md:container gap-7 mx-5 md:mx-auto py-14 sm:grid flex flex-col items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ExpertCard
          image={teacher1}
          rating={4.9}
          category={"Art & Design"}
          name={"John Lee"}
        ></ExpertCard>
        <div className="hidden col-span-2 lg:flex flex-col items-center animate__animated  animate__fadeInUp">
          <h2 className="text-[#4361EE] text-lg font-semibold rounded-full bg-[#4362ee25] py-2 px-6 border boder-[#4361EE]">
            Top Rated Providers
          </h2>
          <h1 className="text-6xl font-bold mt-4 text-center">
            Learn from Industry Experts
          </h1>
          <p className="text-gray-600 w-2/3 text-center mt-4 text-lg">
            Our courses are crafted by industry professionals and subject matter
            experts. Benefit from their wealth of experience, practical
            insights, and real-world knowledge.
          </p>
        </div>
        <ExpertCard
          image={teacher2}
          rating={4.9}
          category={"Digital Marketing Essentials"}
          name={"Luna Chowdhury"}
        ></ExpertCard>
        <ExpertCard
          image={teacher3}
          rating={4.8}
          category={"Photographer"}
          name={"Tom Richardson"}
        ></ExpertCard>
        <ExpertCard
          image={teacher4}
          rating={4.8}
          category={"Head Chef"}
          name={"Michael Smith"}
        ></ExpertCard>
        <ExpertCard
          image={teacher5}
          rating={4.7}
          category={"Digital Marketing Essentials"}
          name={"Clara Dupont"}
        ></ExpertCard>
        <ExpertCard
          image={teacher6}
          rating={4.9}
          category={"Language Expert"}
          name={"Rina Das"}
        ></ExpertCard>
      </div>
    </div>
  );
};

export default Experts;
