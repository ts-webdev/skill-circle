import React, { use } from "react";
import SkillCard from "./SkillCard";

const skillDataPromise = fetch("/skillData.json").then((res) => res.json());

const PopularSkills = () => {
  const skillData = use(skillDataPromise);
  return (
    <div className="my-12 sm:container mx-5 sm:mx-auto">
      <h2 className="flex justify-center">
        <span className="text-[#4361EE]  text-lg font-semibold rounded-full bg-[#4362ee25] py-2 px-6 border boder-[#4361EE]">
          {" "}
          Popular Skills
        </span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
        {/* Cards */}
        {skillData.map((skill) => (
          <SkillCard key={skill.skillId} skill={skill}></SkillCard>
        ))}
      </div>
    </div>
  );
};

export default PopularSkills;
