// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // If you're using react-router
import { useAuth } from '../../store/Auth';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {isLoggedIn} = useAuth();
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    // { name: 'Logout', href: '/Logout' },
    // { name: 'Register', href: '/register' },
    // { name: 'Login', href: '/login' },
  ];

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Title */}
          <div className="flex-shrink-0">
            <h1 className="text-white text-xl font-bold">ULTIMO TECH</h1>
          </div>
          {/* Hamburger Menu for Mobile */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
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
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <NavLink 
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium relative group"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-transparent group-hover:bg-white transition-all"></span>
                </NavLink>
              ))}
              {
                isLoggedIn ?( <NavLink to={"/logout"} className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium relative group">Logout <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-transparent group-hover:bg-white transition-all"></span>
              </NavLink>) : ( <>
              <NavLink to={"/register"} className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium relative group"> Register <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-transparent group-hover:bg-white transition-all"></span>
              </NavLink>
              <NavLink to={"/login"} className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium relative group">
               Login
               <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-transparent group-hover:bg-white transition-all"></span>
              </NavLink>
              </>)
              }
              
              
              
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium relative group"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-transparent group-hover:bg-white transition-all"></span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
