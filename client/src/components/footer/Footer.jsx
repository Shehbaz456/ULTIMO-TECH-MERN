import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"; // Social Icons
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
    
    <hr className="border-t border-gray-700 m-4 pb-6 text-center text-gray-400 text-sm" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* About Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold text-indigo-400">About Us</h3>
            <p className="text-sm">
              At Ultimo Tech, we provide cutting-edge digital solutions tailored to help your business thrive in the modern world. From web development to mobile apps, we've got you covered.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold text-indigo-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-indigo-500 transition-colors">Home</Link></li>
              
              <li><Link to="/services" className="hover:text-indigo-500 transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-indigo-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-500 transition-colors">Contact</Link></li>
              <li><Link to="/Admin" className="hover:text-indigo-500 transition-colors">Admin</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold text-indigo-400">Contact Us</h3>
            <p className="text-sm">
              Email: <Link href="iamshehbaz01@gmail.com" className="hover:text-indigo-500 transition-colors">iamshehbaz01@gmail.com</Link>
            </p>
            <p className="text-sm">Phone: +91 8700963385</p>
            <p className="text-sm">Location: 123 Digital St, Web City, IN</p>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold text-indigo-400">Follow Us</h3>
            <div className="flex space-x-4">
              <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-500 transition-colors">
                <FaFacebookF size={24} />
              </Link>
              <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-500 transition-colors">
                <FaTwitter size={24} />
              </Link>
              <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-500 transition-colors">
                <FaLinkedinIn size={24} />
              </Link>
              <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-500 transition-colors">
                <FaInstagram size={24} />
              </Link>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Ultimo Tech. All Rights Reserved.</p>
          <p className="mt-2">Designed with 💡 by Ultimo Tech's Creative Team</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
