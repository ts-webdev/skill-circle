import React, { use, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user, updateUser, setUser } = use(AuthContext);
  const [showForm, setShowForm] = useState(false);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    if (showForm) {
      const name = e.target.name.value;
      const photo = e.target.photo.value;
      const updateProfile = {
        displayName: name,
        photoURL: photo,
      };
      updateUser(updateProfile)
        .then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          toast.success("Successfully Update Your Profile");
        })
        .catch((error) => {
          toast.error(error);
        });
    }
    setShowForm(!showForm);
  };
  return (
    <div className="py-44 flex items-center justify-center bg-linear-to-b from-[#0077b6] via-[#00b4d8] to-[#90e0ef]">
      <div className=" bg-white rounded-2xl p-5 mt-20 min-w-1/4">
        <div className=" -mt-25 flex justify-center animate__animated animate__bounceIn">
          <img
            src={user?.photoURL}
            className={`rounded-full w-40 h-40  ${
              user.photoURL || "bg-white"
            } border-2 p-1`}
            alt=""
          />
        </div>
        <h2 className="text-center text-4xl font-bold mt-3">
          {user?.displayName}
        </h2>
        <p className="text-center">{user.email}</p>
        <form onSubmit={handleUpdateUser}>
          <fieldset className={showForm ? "fieldset" : "hidden"}>
            <label className="label ">Name</label>
            <input
              type="text"
              className="input  w-full text-gray-600 animate__animated animate__fadeInLeft"
              placeholder="Enter Your Name"
              name="name"
              required={showForm}
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input w-full text-gray-600 animate__animated animate__fadeInRight"
              placeholder="Enter Your Photo URL"
              name="photo"
              required={showForm}
            />
          </fieldset>
          <button className="btn bg-linear-to-r w-full border-none shadow-none text-white from-[#F72585] to-[#B5179E] mt-4">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
