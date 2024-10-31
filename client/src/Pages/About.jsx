import React from "react";
import { useAuth } from "../store/Auth";
function About() {
  const { user } = useAuth(); 

  return (
    <div className="relative min-h-screen bg-gray-900 text-white py-20 px-6 flex flex-col items-center justify-center">
      
      
      <div className="relative bg-gray-800 bg-opacity-20 backdrop-blur-lg shadow-lg rounded-xl p-10 max-w-5xl w-full">
     
    <p className="text-indigo-400 text-2xl font-bold" id="AboutUsername">Welcome , 
    {user ? user.username:`to our website`}</p>
        <div className="relative z-10 text-center space-y-8"> 
          <h1 className="text-2xl lg:text-4xl font-bold text-white animate-fadeInUp">
            About <span className="text-indigo-400">ULTIMO TECH</span>
          </h1>
          <p className="text-xl lg:text-xl text-gray-300 animate-fadeInUp delay-200">
            Shaping the Future of Digital Innovation
          </p>
          <div className="border-t-2 border-gray-600 w-2/3 mx-auto animate-fadeInUp delay-400"></div>
          <div className="text-gray-400 text-lg lg:text-xl leading-relaxed space-y-6 animate-fadeInUp delay-600">
            <p>
              At <span className="text-indigo-400 font-bold">ULTIMO TECH</span>, we are committed to delivering cutting-edge digital solutions
              that help businesses thrive in the digital age. With a focus on <strong>web development</strong>, <strong>mobile applications</strong>, 
              and <strong>digital marketing</strong>, we harness the power of technology to create products that elevate your brand and enhance user experiences.
            </p>

            <p>
              Our mission is to bridge the gap between your business and your customers by providing innovative solutions that drive 
              <span className="font-bold text-indigo-400"> engagement</span>, <span className="font-bold text-indigo-400">growth</span>, and <span className="font-bold text-indigo-400">success</span>.
            </p>

            <p>
              With a team of passionate experts and a collaborative approach, we are always exploring new ways to make your digital presence world-class.
              Welcome to <strong>ULTIMO TECH</strong> – where innovation meets impact.
            </p>
          </div>

      
          <button className="mt-10 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out animate-fadeInUp delay-800">
            Learn More About Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
