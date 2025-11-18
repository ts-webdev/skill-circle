import React from "react";
import PopularSkills from "../components/PopularSkills";
import Experts from "../components/Experts";
import HowItWorks from "../components/HowItWorks";
import Banner from "../components/Banner";
import Collaborate from "../components/Collaborate";
import Faqs from "../components/Faqs";
import SubBanner from "../components/SubBanner";


const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Collaborate></Collaborate>
      <PopularSkills></PopularSkills>
      <Experts></Experts>
      <HowItWorks></HowItWorks>
      <Faqs></Faqs>
      <SubBanner></SubBanner>
    </div>
  );
};

export default Home;
