import React, { useState } from "react";
import loginImg from "../assets/auth.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth,API } from "../store/Auth";
import { toast } from 'react-toastify';
function Login() {
  let URL = `${API}/api/auth/login`;

  let [user, setUser] = useState({ email: "", password: "" });

  let navigate = useNavigate();
  const { storeTokenInLS } = useAuth();
  const handelInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handelForm = async (e) => {
    e.preventDefault();
    console.log(user);
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
        console.log(response);
        toast.success("Login succesfully");
        setUser({ email: "", password: "" });
        navigate("/");

        console.log("res from server",res_data);
        storeTokenInLS(res_data.token);

      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails:res_data.message);
        console.error("Login failed:", res_data);
      }
    } catch (error) {
      console.log("Login Failed : ", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="flex flex-col lg:flex-row items-center bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
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
          <h2 className="text-3xl font-bold mb-6 text-center text-indigo-400">
            Login Form
          </h2>
          <form onSubmit={handelForm} className="space-y-6">
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
                onChange={handelInput}
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
                onChange={handelInput}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
