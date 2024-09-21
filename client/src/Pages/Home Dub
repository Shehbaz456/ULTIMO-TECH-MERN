import React, { useEffect, useRef } from 'react';
import landingBgImg from '../assets/images/keyboardImg2.jpg';
import { FaDesktop, FaMobileAlt, FaBullhorn, FaRocket } from "react-icons/fa";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function Home() {
  const countUpRef = useRef(true); // To manage visibility state for animations

  // Function to render CountUp component with visibility sensor
  const renderCountUp = (end) => (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible) {
          countUpRef.current = true;
        }
      }}
      delayedCall
      active={!countUpRef.current}
    >
      <CountUp end={end} duration={2} />
    </VisibilitySensor>
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${landingBgImg})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-indigo-400 mb-4 animate-fadeIn">
            ULTIMO TECH
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-fadeIn delay-2s">
            Leading the way in Digital Solutions
          </p>
          <a href="#services" className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-8 rounded-lg font-semibold transition-transform duration-300 hover:scale-105">
            Explore Our Services
          </a>
        </div>
      </section>

      {/* Stats Section - Animated Bar Counter */}
      <section className="py-16 px-4 md:px-16 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl text-indigo-400 font-semibold">
              {renderCountUp(50)}
            </span>
            <span>Registered Companies</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl text-indigo-400 font-semibold">
              {renderCountUp(100000)}
            </span>
            <span>Happy Clients</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl text-indigo-400 font-semibold">
              {renderCountUp(500)}
            </span>
            <span>Well Known Developers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl text-indigo-400 font-semibold">
              {renderCountUp(24)}
            </span>
            <span>24/7 Service</span>
          </div>
        </div>
      </section>

       {/* Services Section */}
      <hr className="border-t border-gray-700 m-4 pb-6 text-center text-gray-400 text-sm" />

       <section id="services" className="py-16 px-4 md:px-16 text-center">
        <h2 className="text-4xl font-bold text-indigo-400 mb-10 animate-fadeIn">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-opacity-20 animate-fadeInUp">
            <FaDesktop className="text-4xl text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-300">Cutting-edge websites crafted for performance and usability.</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-opacity-20 animate-fadeInUp delay-1s">
            <FaMobileAlt className="text-4xl text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
            <p className="text-gray-300">High-performance mobile apps for iOS and Android.</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-opacity-20 animate-fadeInUp delay-2s">
            <FaBullhorn className="text-4xl text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
            <p className="text-gray-300">Marketing solutions to amplify your digital presence.</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-opacity-20 animate-fadeInUp delay-3s">
            <FaRocket className="text-4xl text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Web Apps</h3>
            <p className="text-gray-300">Progressive web apps tailored to your business needs.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-16 px-4 md:px-16 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto glassmorphism p-10 rounded-lg backdrop-blur-md bg-opacity-10 shadow-2xl">
          <h2 className="text-4xl font-bold text-indigo-400 mb-6">About ULTIMO TECH</h2>
          <p className="text-gray-300 text-lg mb-4">
            ULTIMO TECH is at the forefront of innovation, delivering world-class digital solutions for clients globally. Whether it's web development, mobile apps, or digital marketing, we help businesses scale and achieve their goals through technology.
          </p>
          <p className="text-gray-300 text-lg">
            Our team of experts is passionate about creating seamless user experiences with a focus on performance, security, and modern design principles.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-16 text-center">
        <h2 className="text-4xl font-bold text-indigo-400 mb-10">What Our Clients Say</h2>
        <div className="space-y-8">
          <div className="animate-slideInUp">
            <blockquote className="text-lg text-gray-300 italic max-w-3xl mx-auto">
              "ULTIMO TECH has transformed our digital presence. Their web development and digital marketing services are top-notch!"
            </blockquote>
            <p className="mt-4 text-indigo-400 font-semibold">- John Doe, CEO of Tech Innovators</p>
          </div>
          <div className="animate-slideInUp delay-1s">
            <blockquote className="text-lg text-gray-300 italic max-w-3xl mx-auto">
              "Our mobile app is a huge success thanks to ULTIMO TECH. Their attention to detail and design is remarkable."
            </blockquote>
            <p className="mt-4 text-indigo-400 font-semibold">- Jane Smith, CTO of Mobile Solutions</p>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <hr className="border-t border-gray-700 m-4 pb-6 text-center text-gray-400 text-sm" />
      <section className="py-16 px-4 md:px-16 bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-indigo-400 mb-8">Get in Touch</h2>
          <p className="text-gray-300 mb-6">We'd love to help your business thrive in the digital age. Reach out to us for a consultation.</p>
          <a href="/contact" className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-8 rounded-lg font-semibold transition-transform duration-300 hover:scale-105">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home;
