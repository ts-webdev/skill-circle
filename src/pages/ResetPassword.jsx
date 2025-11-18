import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../auth/AuthProvider";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const { email, setEmail, resetPassword } = use(AuthContext);
  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    resetPassword(email)
      .then(() => {
        window.open(`https://mail.google.com/mail/u/${email}`, "_blank");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return (
    <div className="bg-linear-to-tl from-[#480CA8] via-[#560BAD] to-[#7209B7]">
      <div className="flex flex-col justify-center items-center  min-h-[80vh] pt-20 bg-linear-to-b from-[#3F37C9] to-[#4361EE] animate__animated animate__fadeInDownBig">
        <h1 className="text-center text-4xl sm:text-6xl font-bold text-white mb-8">
          Reset Your Password
        </h1>
        <form onSubmit={handleResetPassword}>
          <fieldset className="fieldset bg-white/20 text-white p-10 rounded-2xl sm:w-108">
            <label className="label">Enter Your Email</label>
            <input
              type="email"
              className="input  w-full text-gray-600"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div></div>
            <button className="btn btn-primary shadow-none text-white mt-4">
              Reset Password
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
