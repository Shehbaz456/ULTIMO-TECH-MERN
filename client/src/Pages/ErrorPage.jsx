import React from 'react'
import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        {/* Error Code */}
        <h1 className="text-9xl font-bold text-indigo-500 mb-4 animate-pulse">404</h1>
        
        {/* Error Message */}
        <h2 className="text-3xl font-semibold text-white mb-8">Oops! Page Not Found</h2>
        
        {/* Additional Message */}
        <p className="text-lg text-gray-400 mb-12">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        {/* Back to Home Button */}
        <Link to="/">
          <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300">
            Go Back Home
          </button>
        </Link>
        <Link to="/contact" className="ml-4">
          <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300">
            Report Problem
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
