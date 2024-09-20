import React, { useState } from "react";
import { useAuth,API } from "../store/Auth";


const URL = `${API}/api/form/contact`;
const defaultContactForm = {
  username:"",
  email:"",
  message:"",
}
function Contact() {
const [formData, setFormData] = useState(defaultContactForm);

  const [userData,setUserData] = useState(true)
  const {user} = useAuth();

  if( userData && user) {
    setFormData({
      username:user.username,
      email:user.email,
      message:""
    })
    setUserData(false)
  }

  const hendleInputChange=(e)=>{
    let {name,value}=e.target;
    setFormData({
      ...formData,
      [name]:value
    })
  }
  const handleSubmit= async(e)=>{
    e.preventDefault();
    // console.log("User Msg : ",formData);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      // console.log(response);
      if(response.ok){
        console.log("Message Delivered");
        setFormData(defaultContactForm);
      }else{
        console.log("Message Not Delivered");
      }
    } catch (error) {
      console.log("Message Not Delivered",error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center py-20">
    <div className="w-full max-w-lg bg-gray-800 bg-opacity-30 backdrop-blur-lg rounded-xl p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-center text-indigo-400 mb-8">Contact Us</h2>

      <form onSubmit={handleSubmit} method="POST" className="space-y-6">
        {/* Username */}
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-300">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={hendleInputChange}
            placeholder="Enter your username"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={hendleInputChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={hendleInputChange}
            placeholder="Enter your message"
            className="w-full h-32 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Contact
