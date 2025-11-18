import React from "react";

const SubBanner = () => {
  return (
    <div className="sm:container mx-5 sm:mx-auto bg-[#4361EE] p-10 flex flex-col items-center my-24 rounded-2xl">
      <h2 className="text-3xl font-bold text-white my-3 text-center">Sign up today for a risk-free, 30-day trial for up to 4 learners.</h2>
      <p className="text-gray-300 mb-3 text-lg text-center">
        After a free 30-day trial, subscribe for $19/month for the first learner
        and $12/month for each additional learner. You may cancel at any time.
      </p>
      <button className="btn md:w-1/3 p-7 text-blue-700 text-xl">Start 30-day free trial</button>
    </div>
  );
};

export default SubBanner;
