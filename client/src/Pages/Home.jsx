import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import { FaDesktop, FaMobileAlt, FaBullhorn, FaRocket } from 'react-icons/fa';
import CountUp from 'react-countup';

function Home() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const statRefs = useRef([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect(); // Once animated, stop observing
        }
      });
    });

    statRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  const renderCountUp = (end, index) => (
    <div ref={(el) => statRefs.current[index] = el}>
      <CountUp end={hasAnimated ? end : 0} duration={3} />
    </div>
  );

  return (
    <div className="home-container bg-gray-900 text-white min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="hero-section relative flex items-center justify-center h-screen bg-fixed text-center">
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div className="hero-content relative z-10 animate-fadeInUp">
          <h1 className="hero-title text-5xl md:text-7xl font-bold text-indigo-400 mb-4">
            ULTIMO TECH
          </h1>
          <p className="hero-subtitle text-2xl md:text-3xl text-gray-300 mb-8">
            Leading the Digital Future
          </p>
          <a href="#services" className="hero-btn animate-pulse">Discover Our Solutions</a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-16 px-6 text-center bg-gradient-to-r from-gray-800 to-gray-900">
        <h2 className="section-title text-4xl font-bold text-indigo-400 mb-10">Our Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="stat-card animate-fadeInUp">
            <div className="stat-number">{renderCountUp(100, 0)}</div>
            <p className="stat-text">Projects Completed</p>
          </div>
          <div className="stat-card animate-fadeInUp delay-1s">
            <div className="stat-number">{renderCountUp(200, 1)}</div>
            <p className="stat-text">Satisfied Clients</p>
          </div>
          <div className="stat-card animate-fadeInUp delay-2s">
            <div className="stat-number">{renderCountUp(50, 2)}</div>
            <p className="stat-text">Professional Developers</p>
          </div>
          <div className="stat-card animate-fadeInUp delay-3s">
            <div className="stat-number">{renderCountUp(24, 3)}</div>
            <p className="stat-text">24/7 Support</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section py-16 px-6 bg-gray-900 text-center">
        <h2 className="section-title text-4xl font-bold text-indigo-400 mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="service-card transform hover:scale-105 transition-transform duration-300 ease-in-out animate-fadeInUp">
            <FaDesktop className="service-icon" />
            <h3 className="service-title">Web Development</h3>
            <p className="service-description">High-performance websites tailored to your needs.</p>
          </div>
          <div className="service-card transform hover:scale-105 transition-transform duration-300 ease-in-out animate-fadeInUp delay-1s">
            <FaMobileAlt className="service-icon" />
            <h3 className="service-title">Mobile Apps</h3>
            <p className="service-description">Engaging native mobile apps for iOS and Android.</p>
          </div>
          <div className="service-card transform hover:scale-105 transition-transform duration-300 ease-in-out animate-fadeInUp delay-2s">
            <FaBullhorn className="service-icon" />
            <h3 className="service-title">Digital Marketing</h3>
            <p className="service-description">Strategic marketing to grow your digital presence.</p>
          </div>
          <div className="service-card transform hover:scale-105 transition-transform duration-300 ease-in-out animate-fadeInUp delay-3s">
            <FaRocket className="service-icon" />
            <h3 className="service-title">Web Apps</h3>
            <p className="service-description">Scalable web applications for all businesses.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section py-16 px-6 bg-gradient-to-r from-gray-800 to-gray-900 text-center">
        <h2 className="section-title text-4xl font-bold text-indigo-400 mb-10">About ULTIMO TECH</h2>
        <p className="about-description text-lg text-gray-300 max-w-4xl mx-auto mb-4">
          ULTIMO TECH specializes in creating digital experiences that drive growth for businesses across the globe. We focus on innovation, security, and performance to deliver top-notch solutions.
        </p>
        <p className="about-description text-lg text-gray-300 max-w-4xl mx-auto">
          Our dedicated team is passionate about building meaningful digital products, with a strong focus on the latest technologies and user-centered design.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-16 px-6 text-center">
        <h2 className="section-title text-4xl font-bold text-indigo-400 mb-10">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="testimonial-card animate-slideInUp">
            <blockquote className="text-gray-300 text-lg italic">
              "ULTIMO TECH transformed our online presence. Their attention to detail and customer service is exceptional."
            </blockquote>
            <p className="mt-4 text-indigo-400 font-semibold">- CEO, Digital Solutions Inc.</p>
          </div>
          <div className="testimonial-card animate-slideInUp delay-1s">
            <blockquote className="text-gray-300 text-lg italic">
              "Our mobile app development was smooth, thanks to ULTIMO TECH's expertise and dedication."
            </blockquote>
            <p className="mt-4 text-indigo-400 font-semibold">- CTO, Mobile Enterprises</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section py-16 px-6 text-center bg-gray-900">
        <h2 className="section-title text-4xl font-bold text-indigo-400 mb-10">Get in Touch</h2>
        <p className="contact-text text-lg text-gray-300 mb-6">
          Let's collaborate on your next project. Contact us today to start a conversation.
        </p>
        <a href="/contact" className="contact-btn">Contact Us</a>
      </section>
    </div>
  );
}

export default Home;
