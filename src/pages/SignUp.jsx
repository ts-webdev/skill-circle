import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../auth/AuthProvider";
import toast from "react-hot-toast";
import logo from "../assets/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, updateUser, loginWithGoogle } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      toast(
        "ℹ️ Password must have at least one uppercase letter, one lowercase letter, and be 6 characters long.",
        {
          duration: 4000,
        }
      );
      return;
    }
    createUser(email, password)
      .then(() => {
        updateUser({ displayName: name, photoURL: photo });
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        if (location.state) {
          navigate(location.state);
        } else {
          navigate("/");
        }

        toast.success(
          `Welcome to SkillCircle, Mr/Mrs${result.user.displayName}`
        );
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return (
    <div className="bg-linear-to-br from-[#3A0CA3] via-[#3F37C9] to-[#4361EE]">
      <div className="pt-20">
        <div className="hero min-h-[80vh]">
          <div className="hero-content container flex-col justify-between lg:flex-row">
            <div className=" lg:w-1/2 flex flex-col items-center text-white lg:text-left">
              <img className="w-20 sm:w-36" src={logo} alt="" />
              <h1 className="text-5xl sm:text-7xl font-bold text-center">
                Register Now!
              </h1>
              <p className="py-6 w-2/3 text-center">
                Join our growing community of learners and creators today!
                Create your account to share your skills, learn from others,
                book sessions, and unlock endless opportunities for personal and
                professional growth.
              </p>
            </div>
            <div className="card bg-base-100/20 text-white w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <h2 className="text-center text-4xl font-bold">Register</h2>
                <form onSubmit={handleRegister}>
                  <fieldset className="fieldset">
                    <label className="label ">Name</label>
                    <input
                      type="text"
                      className="input  w-full text-gray-600"
                      placeholder="Name"
                      name="name"
                      required
                    />
                    <label className="label ">Email</label>
                    <input
                      type="email"
                      className="input  w-full text-gray-600"
                      placeholder="Email"
                      name="email"
                      required
                    />
                    <label className="label ">Photo URL</label>
                    <input
                      type="text"
                      className="input  w-full text-gray-600"
                      placeholder="Photo URL"
                      name="photo"
                      required
                    />
                    <label className="label">Password</label>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="input w-full text-gray-600"
                      placeholder="Password"
                      name="password"
                      required
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      type="button"
                      className="absolute z-50 right-8 bottom-59 text-black cursor-pointer hover:bg-gray-400 bg-gray-300 p-2 rounded-sm"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    <button className="btn bg-linear-to-r border-none shadow-none text-white from-[#F72585] to-[#B5179E] mt-4">
                      Register
                    </button>
                  </fieldset>
                </form>
                <div className="flex items-center justify-center gap-2 my-3">
                  <span className="w-20 h-px border border-white/50"></span>
                  <span>or</span>
                  <span className="w-20 h-px border border-white/50"></span>
                </div>
                <button
                  onClick={handleGoogleLogin}
                  className="btn bg-white text-black border-[#e5e5e5]"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
                <p className="mt-2 text-center">
                  Already have account?
                  <Link className="text-[#4CC9F0] font-semibold" to={"/login"}>
                    Login
                  </Link>
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
