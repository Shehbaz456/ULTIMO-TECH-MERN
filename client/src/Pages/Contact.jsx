import React, { useState, useEffect } from "react";
import { useAuth } from "../store/Auth";
import { toast } from "react-toastify";
import "./Contact.css"; // Import custom CSS for animations

const defaultContactForm = {
  username: "",
  email: "",
  message: "",
};

function Contact() {
  const { API, user } = useAuth(); // Get the user data from Auth
  const URL = `${API}/api/form/contact`;
  const [formData, setFormData] = useState(defaultContactForm);

  // Use useEffect to auto-fill username and email if user is logged in
  useEffect(() => {
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        username: user.username || "",
        email: user.email || "",
      }));
    }
  }, [user]);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success("Your Message Delivered");
        // Reset only the message field, keep username and email auto-filled
        setFormData((prevData) => ({
          ...prevData,
          message: "",
        }));
      } else {
        toast.error("Your Message Not Delivered");
      }
    } catch (error) {
      console.error("Message Not Delivered", error);
      toast.error("There was an issue delivering your message.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center py-20 contact-container">
      <div className="w-full max-w-lg bg-gray-800 bg-opacity-30 backdrop-blur-lg rounded-xl p-8 shadow-lg contact-form">
        <h2 className="text-3xl font-bold text-center text-indigo-400 mb-8 form-title">Contact Us</h2>

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
              onChange={handleInputChange}
              placeholder="Enter your username"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out hover:shadow-lg"
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
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out hover:shadow-lg"
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
              onChange={handleInputChange}
              placeholder="Enter your message"
              className="w-full h-32 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out hover:shadow-lg"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out button-submit hover:shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
