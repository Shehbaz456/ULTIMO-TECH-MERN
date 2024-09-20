import React, { useState } from "react";
import authImg from "../assets/auth.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth,API } from "../store/Auth";
import { toast } from 'react-toastify';

function Register() {
  let [user, setUser] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    // console.log(user);
    try {
      const response = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(response);
      
      const res_data = await response.json();
      console.log("res from server",res_data);
      
      if (response.ok) {
        // localStorage.setItem("token", res_data.token);
        storeTokenInLS(res_data.token);

        toast.success("Registration successful");
        setUser({ username: "", phone: "", email: "", password: "" });
        navigate("/");
      } else {
        // const errorData = await response.json();
        toast.error(res_data.extraDetails ? res_data.extraDetails:res_data.message);
        // console.error("Registration failed:", errorData);
      }
    } catch (error) {
      console.log("Registraction Fail : ", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="flex flex-col lg:flex-row items-center bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Image Section */}
        <div className="hidden lg:block lg:w-1/2 bg-cover">
          <img
            src={authImg}
            alt="Register illustration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 px-8 py-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-indigo-400">
            Registration Form
          </h2>
          <form onSubmit={handleForm} method="POST" className="space-y-6">
            {/* Username */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="username"
                placeholder="Enter your name"
                value={user.username}
                onChange={handleInput}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                autoComplete="number"
                value={user.phone}
                onChange={handleInput}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
                value={user.email}
                onChange={handleInput}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                value={user.password}
                onChange={handleInput}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              >
                Register Now
              </button>
            </div>
          </form>
          <div className="text-sm mt-4">
            <Link
              to="/login"
              className="text-indigo-400 hover:text-indigo-500 transition duration-300"
            >
              if you already have an account , please Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
