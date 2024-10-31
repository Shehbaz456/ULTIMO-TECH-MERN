import React, { useState } from "react";
import loginImg from "../assets/auth.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";
import { toast } from 'react-toastify';

function Login() {
  const { storeTokenInLS, API } = useAuth();
  const URL = `${API}/api/auth/login`;
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      if (response.ok) {
        toast.success("Login successfully");
        setUser({ email: "", password: "" });
        storeTokenInLS(res_data.token);
        console.log("Stored token:", res_data.token); // Log the token
        navigate("/");
      } else {
        toast.error(res_data.extraDetails || res_data.message);
      }
    } catch (error) {
      console.error("Login Failed: ", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="flex flex-col lg:flex-row items-center bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden transition-transform duration-500 transform hover:scale-105">
        {/* Left Image Section */}
        <div className="hidden lg:block lg:w-1/2">
          <img
            src={loginImg}
            alt="Login illustration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 px-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-indigo-400 transition-transform duration-300">
            Login Form
          </h2>
          <form onSubmit={handleForm} className="space-y-6">
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
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
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
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              >
                Login Now
              </button>
            </div>
          </form>
          {/* Register */}
          <div className="text-sm mt-4">
            <Link
              to="/register"
              className="text-indigo-400 hover:text-indigo-500 transition duration-300"
            >
              Don't have an account? Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
