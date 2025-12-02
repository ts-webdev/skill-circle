import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CgShapeZigzag } from "react-icons/cg";
import {
  FaDollarSign,
  FaFacebook,
  FaMailBulk,
  FaStar,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";
import { Link, useLoaderData, useParams } from "react-router";

const ViewDetails = () => {
  const allData = useLoaderData();
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const filteredData = allData.find(
      (singleData) => singleData.skillId === Number(id)
    );
    setData(filteredData);
  }, [allData, id]);

  const {
    skillName,
    category,
    image,
    providerName,
    description,
    providerEmail,
    price,
    rating,
    slotsAvailable,
  } = data;

  const handleBookSession = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    toast.success(`Hello ${name}, Your Session Booked Successfully!`);
    e.target.email.value = "";
    e.target.name.value = "";
  };

  return (
    <div>
      <section className="pt-20 sm:pt-32 bg-linear-to-tl from-[#7209B7] via-[#3A0CA3] to-[#3F37C9]">
        <div className="animate__bounceIn sm:container mx-5 sm:mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="py-10 text-center text-white">
            <div className=" flex justify-center">
              <TiStarFullOutline
                className="hidden sm:block animate-pulse"
                color="orange"
                size={50}
              />
            </div>
            <div className="sm:my-10">
              <h1 className="font-bold text-4xl sm:text-6xl my-3">
                {skillName}
              </h1>
              <p className="text-2xl">{category}</p>
            </div>
            <div>
              <CgShapeZigzag
                className="hidden sm:block"
                color="orange"
                size={70}
              />
            </div>
          </div>
          <div className="mb-10 md:mb-0">
            <Link
              to={"/"}
              className="btn sm:text-3xl sm:p-10 bg-amber-500 border-none flex items-center"
            >
              <IoMdArrowRoundBack className="sm:hidden" size={20} />
              <IoMdArrowRoundBack className="hidden sm:block" size={37} />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-20">
        <div className="grid md:grid-cols-3 gap-7 sm:container mx-5 sm:mx-auto">
          <div className="col-span-2">
            <img className="w-full rounded-2xl" src={image} alt="" />
            <div className="border-b border-gray-300 pb-3 ">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <h2 className="my-5 text-3xl font-semibold text-center">
                  Provider: <br className="sm:hidden" /> {providerName}
                </h2>
                <p className="flex items-center gap-2 text-xl">
                  <FaMailBulk></FaMailBulk> {providerEmail}
                </p>
              </div>
              <div className="flex mt-7 sm:mt-0 flex-col sm:flex-row items-center justify-between bg-gray-300 p-3 rounded-lg">
                <div>
                  <p className="flex items-center text-2xl lg:text-4xl font-bold">
                    Price : <FaDollarSign></FaDollarSign> {price}
                  </p>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-xl">
                    Total Ratings: <FaStar></FaStar> {rating}
                  </p>
                </div>
                <div>
                  <p className="text-xl">Available Slots: {slotsAvailable}</p>
                </div>
              </div>
            </div>
            <p className="border-b border-gray-300 py-5">{description}</p>
            <div className="border-b border-gray-300 py-3 ">
              <h3 className="text-2xl font-semibold mb-3">Book Session</h3>
              <form onSubmit={handleBookSession}>
                <fieldset className="fieldset">
                  <label className="label ">Your Name</label>
                  <input
                    type="text"
                    className="input  w-full md:w-2/3 text-gray-600"
                    placeholder="Enter Your Name"
                    name="name"
                    required
                  />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input w-full md:w-2/3 text-gray-600"
                    placeholder="Enter Your Email"
                    name="email"
                    required
                  />
                  <button className="btn w-1/2 bg-linear-to-r border-none shadow-none text-white from-[#F72585] to-[#B5179E] mt-4">
                    Book Session
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
          <div className="space-y-9 col-span-2 md:col-span-1">
            <div className="bg-white p-7 rounded-xl shadow-xl">
              <h3 className="border-b text-2xl font-bold pb-4 border-gray-300">
                Subscribe To Our Newsletter
              </h3>
              <input
                className="w-full bg-gray-200 py-3 my-5 p-2 rounded-lg"
                type="email"
                placeholder="Enter Email Address:"
              />
              <button className="btn btn-primary text-white w-full">
                Subscribe Now
              </button>
            </div>
            <div className="bg-white p-7 rounded-xl shadow-xl">
              <h3 className="border-b text-2xl font-bold pb-4 border-gray-300">
                Category
              </h3>
              <ul className="my-3 list-disc ml-4 text-lg space-y-2">
                <li className="hover:text-blue-700 cursor-pointer">
                  Business & Marketing
                </li>
                <li className="hover:text-blue-700 cursor-pointer">Cooking</li>
                <li className="hover:text-blue-700 cursor-pointer">
                  Art & Design
                </li>
                <li className="hover:text-blue-700 cursor-pointer">Language</li>
                <li className="hover:text-blue-700 cursor-pointer">
                  Programming
                </li>
                <li className="hover:text-blue-700 cursor-pointer">
                  Health & Fitness
                </li>
                <li className="hover:text-blue-700 cursor-pointer">Music</li>
                <li className="hover:text-blue-700 cursor-pointer">Sports</li>
              </ul>
            </div>
            <div className="bg-white p-7 rounded-xl shadow-xl">
              <h3 className="text-2xl font-semibold mb-3">Social Share</h3>
              <p className="text-gray-600  flex gap-4">
                <FaFacebook
                  className="border p-2 rounded-lg hover:text-blue-700"
                  size={40}
                ></FaFacebook>
                <FaTwitter
                  className="border p-2 rounded-lg hover:text-blue-700"
                  size={40}
                ></FaTwitter>
                <FaYoutube
                  className="border p-2 rounded-lg hover:text-blue-700"
                  size={40}
                ></FaYoutube>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewDetails;
