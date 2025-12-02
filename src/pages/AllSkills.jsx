import React from "react";
import { useLoaderData } from "react-router";
import SkillCard from "../components/SkillCard";

const AllSkills = () => {
  const skillData = useLoaderData();
  return (
    <div className="">
      <section className="pt-20 pb-10 sm:pt-32 bg-linear-to-tl from-[#7209B7] via-[#3A0CA3] to-[#3F37C9]">
        <h1 className="sm:text-5xl text-3xl px-5 text-center font-bold text-white">Discover Skills, Build Your Future</h1>
      <p className="text-white text-center mt-5">Browse all skills shared by learners, creators, and experts across the platform.</p>
      </section>
      <div className="sm:container mx-5 sm:mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-20">
        {/* Cards */}
        {skillData.map((skill) => (
          <SkillCard key={skill.skillId} skill={skill}></SkillCard>
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
