import React from "react";

const About = () => {
  return (
    <div className="mt-40 mb-45 container mx-auto">
      <h1 className="text-center text-5xl font-bold animate__animated animate__fadeInDown">About Us</h1>
      <p className="text-center mt-3">Last Updated : October 2025</p>
      <div className="w-2/3 mx-auto mt-5">
        <h2 className="text-blue-800 text-2xl font-bold mb-2 animate__animated animate__fadeInLeft">Who We Are</h2>
        <p className="text-lg mb-10 animate__animated animate__fadeInLeft">
          SkillCircle is a platform built to connect learners and teachers
          through the power of skill exchange. We believe that everyone has
          something valuable to offer and something new to learn.
        </p>
        <h2 className="text-blue-800 text-2xl font-bold mb-2 animate__animated animate__fadeInRight">Our Mission</h2>
        <p className="text-lg mb-10 animate__animated animate__fadeInRight">
          Our mission is to make learning accessible, affordable, and
          community-driven. By enabling users to swap skills, we encourage
          collaboration, personal growth, and a culture of sharing knowledge.
        </p>
        <h2 className="text-blue-800 text-2xl font-bold mb-2 animate__animated animate__fadeInLeft">What We Offer</h2>
        <ul className="mb-10 list-disc ml-5 animate__animated animate__fadeInLeft">
          <li className="text-lg ">
            Browse and connect with people who share skills.
          </li>
          <li className="text-lg">
            Offer your expertise in exchange for learning something new.
          </li>
          <li className="text-lg">
            Build meaningful connections within a global learning community.
          </li>
        </ul>
        <h2 className="text-blue-800 text-2xl font-bold mb-2 animate__animated animate__fadeInRight">Our Values</h2>
        <ul className="mb-10 list-disc ml-5 animate__animated animate__fadeInRight">
          <li className="text-lg ">
            Collaboration: Learning works best when shared.
          </li>
          <li className="text-lg">
            Accessibility: Knowledge should be available to everyone,
            everywhere.
          </li>
          <li className="text-lg">
            Trust: We promote safe, respectful, and fair exchanges between
            users.
          </li>
        </ul>
        <h2 className="text-blue-800 text-2xl font-bold mb-2 animate__animated animate__fadeInLeft">Contact Us</h2>
        <p className="text-lg mb-10 animate__animated animate__fadeInLeft">
          Have questions or feedback? Reach out at skill@circle.com
        </p>
      </div>
    </div>
  );
};

export default About;
