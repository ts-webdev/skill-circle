import React from "react";

const HowItWorks = () => {
  return (
    <div className="my-24 mx-5 sm:container sm:mx-auto">
      <h2 className="flex justify-center">
        <span className="text-[#4361EE] text-lg font-semibold rounded-full bg-[#4362ee25] py-2 px-6 border boder-[#4361EE]">
          How It Works
        </span>
      </h2>
      {/* all cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 justify-between mt-10 gap-10">
        <div className="bg-[#480CA8]  p-7 rounded-lg relative">
          <div className="flex flex-col items-center">
            <img
              src="https://img.icons8.com/?size=100&id=3qI5SQi7Ho8x&format=png&color=000000"
              alt=""
            />
            <h3 className="text-[#4CC9F0] font-bold text-2xl text-center">
              Create a Profile
            </h3>
            <p className="text-[#bc92ff] text-center">
              Sign up and let people know what you can teach and want to learn.
            </p>
            <p className="text-white font-semibold mt-2 text-center">
              Sign up and set up your profile with skills you offer and want to
              learn.
            </p>
          </div>
          <span className="bg-[#480CA8] border-8 absolute -top-2 -left-2 border-white rounded-full p-2 w-16 text-xl h-16 text-white font-bold text-center">
            01
          </span>
        </div>
        <div className="bg-[#480CA8]  p-7 rounded-lg relative">
          <div className="flex flex-col items-center">
            <img
              src="https://img.icons8.com/?size=100&id=mJLKR8aleEVk&format=png&color=000000"
              alt=""
            />
            <h3 className="text-[#4CC9F0] font-bold text-2xl text-center">
              Browse Users
            </h3>
            <p className="text-[#bc92ff] text-center">
              Use filters and search to find users who match your learning or
              teaching goals.
            </p>
            <p className="text-white font-semibold mt-2 text-center">
              Sign up and set up your profile with skills you offer and want to
              learn.
            </p>
          </div>
          <span className="bg-[#480CA8] border-8 absolute -top-2 -left-2 border-white rounded-full p-2 w-16 text-xl h-16 text-white font-bold text-center">
            02
          </span>
        </div>
        <div className="bg-[#480CA8]  p-7 rounded-lg relative">
          <div className="flex flex-col items-center">
            <img
              src="https://img.icons8.com/?size=100&id=ssRp7izhImZ4&format=png&color=000000"
              alt=""
            />
            <h3 className="text-[#4CC9F0] font-bold text-2xl text-center">
              Send Connection Requests
            </h3>
            <p className="text-[#bc92ff] text-center">
              Reach out to users you'd like to connect with.
            </p>
            <p className="text-white font-semibold mt-2 text-center">
              Send a request to start a skill swap. You both must accept to
              start chatting.
            </p>
          </div>
          <span className="bg-[#480CA8] border-8 absolute -top-2 -left-2 border-white rounded-full p-2 w-16 text-xl h-16 text-white font-bold text-center">
            03
          </span>
        </div>
        <div className="bg-[#480CA8]  p-7 rounded-lg relative">
          <div className="flex flex-col items-center">
            <img
              src="https://img.icons8.com/?size=100&id=T1QW8IOStas3&format=png&color=000000"
              alt=""
            />
            <h3 className="text-[#4CC9F0] font-bold text-2xl text-center">
              Learn & Teach Together
            </h3>
            <p className="text-[#bc92ff] text-center">
              Swap skills, help each other grow, and keep the cycle going.
            </p>
            <p className="text-white font-semibold mt-2 text-center">
              Enjoy teaching what you know and learning something new—it's a
              win-win.
            </p>
          </div>
          <span className="bg-[#480CA8] border-8 absolute -top-2 -left-2 border-white rounded-full p-2 w-16 text-xl h-16 text-white font-bold text-center">
            04
          </span>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
