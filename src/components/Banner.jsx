import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./banner.css";
import lang from "../assets/lang.png";
import coding from "../assets/coding.png";
import yoga from "../assets/yoga.png";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="h-[70vh] bg-linear-to-tl pt-14 from-[#7209B7] via-[#3F37C9] to-[#4361EE] pb-16">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper container mx-auto"
      >
        <SwiperSlide>
          <div className=" flex flex-col sm:flex-row justify-around items-center">
            <div className="w-2/4 md:w-1/4 relative animate__animated animate__backInDown">
              <img className="rounded-full rounded-tl-none" src={lang} alt="" />
              <p className="absolute bg-white/80 border border-blue-500 right-0 -bottom-5 rounded-tr-4xl rounded-bl-4xl font-semibold text-blue-600 p-2 sm:p-4">
                Soft Skills
              </p>
            </div>
            <div className="sm:text-left text-center  mx-10 sm:w-1/2 mt-10 text-white animate__animated animate__backInUp">
              <p>Welcome to SkillCircle</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold my-2  sm:w-3/4 sm:border-l-8 sm:pl-3 text-[#edff9d]">
                Unlock Your Communication Skill
              </h1>
              <p className="hidden sm:block text-2xl">
                Master languages, build confidence, and connect with the world.
              </p>
              <button className="hidden lg:block btn mt-3 btn-success text-white">
                Explore All Skills
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col sm:flex-row justify-around items-center">
            <div className="w-2/4 md:w-1/4 relative animate__animated animate__backInDown">
              <img
                className="rounded-full rounded-tl-none"
                src={coding}
                alt=""
              />
              <p className="absolute bg-white/80 border border-blue-500 right-0 -bottom-5 rounded-tr-4xl rounded-bl-4xl font-semibold text-blue-600 p-2 sm:p-4">
                Technology
              </p>
            </div>
            <div className="sm:text-left text-center  mx-10 sm:w-1/2 mt-10 text-white animate__animated animate__backInUp">
              <p>Welcome to SkillCircle</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold my-2  sm:w-3/4 sm:border-l-8 sm:pl-3 text-[#22e2e6]">
                Confidenly Code Your Future
              </h1>
              <p className="hidden sm:block text-2xl">
                Learn modern programming skills and shape tomorrow’s innovations
                today.
              </p>
              <button className="hidden lg:block btn mt-3">Explore All Skills</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col sm:flex-row justify-around items-center">
            <div className="w-2/4 md:w-1/4 relative animate__animated animate__backInDown">
              <img className="rounded-full rounded-tl-none" src={yoga} alt="" />
              <p className="absolute bg-white/80 border border-blue-500 right-0 -bottom-5 rounded-tr-4xl rounded-bl-4xl font-semibold text-blue-600 p-2 sm:p-4">
                Life style
              </p>
            </div>
            <div className="sm:text-left text-center  mx-10 sm:w-1/2 mt-10 text-white animate__animated animate__backInUp">
              <p>Welcome to SkillCircle</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold my-2  sm:w-3/4 sm:border-l-8 sm:pl-3 text-[#ff6ceb]">
                Balance Your Mind, Body & Skills
              </h1>
              <p className="hidden sm:block text-2xl">
                Discover wellness, focus, and growth through mindful learning
                experiences.
              </p>
              <button className="hidden lg:block btn btn-error mt-3 text-white">
                Explore All Skills
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
