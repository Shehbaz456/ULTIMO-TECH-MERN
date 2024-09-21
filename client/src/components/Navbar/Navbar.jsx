import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // If you're using react-router
import { useAuth } from '../../store/Auth';
import './Navbar.css'; // Import for additional CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-white text-2xl font-bold tracking-wide transition-transform duration-500 transform hover:scale-105">
              ULTIMO TECH
            </h1>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white transition duration-300"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation Links for Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 text-lg font-medium relative group transition duration-300"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500"></span>
                </NavLink>
              ))}
              {isLoggedIn ? (
                <NavLink to="/logout" className="text-gray-300 hover:text-white px-3 py-2 text-lg font-medium relative group transition duration-300">
                  Logout
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500"></span>
                </NavLink>
              ) : (
                <>
                  <NavLink to="/register" className="text-gray-300 hover:text-white px-3 py-2 text-lg font-medium relative group transition duration-300">
                    Register
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500"></span>
                  </NavLink>
                  <NavLink to="/login" className="text-gray-300 hover:text-white px-3 py-2 text-lg font-medium relative group transition duration-300">
                    Login
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500"></span>
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Sliding in and out) */}
      {isOpen && (
        <div className="md:hidden transition-transform duration-500 ease-out" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium relative group transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500"></span>
              </NavLink>
            ))}
            {isLoggedIn ? (
              <NavLink to="/logout" className="text-gray-300  bg-red-500 hover:text-white px-3 py-2 text-lg font-medium relative group transition duration-300">
                Logout
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500"></span>
              </NavLink>
            ) : (
              <>
              <div className="flex flex-col space-y-5">
                <NavLink to="/register" className="text-gray-300 bg-blue-600 hover:text-white px-3 py-2 text-lg text-center font-medium relative group transition duration-300">
                  Register
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500"></span>
                </NavLink>
                <NavLink to="/login" className="text-gray-300  bg-blue-600 hover:text-white px-3 py-2 text-lg text-center font-medium relative group transition duration-300">
                  Login
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500"></span>
                </NavLink>
              </div>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
