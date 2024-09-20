import React from 'react';
import { Navigate, NavLink, Outlet } from 'react-router-dom';
import { FaUsers, FaPhone, FaServicestack, FaHome } from 'react-icons/fa';
import { useAuth } from '../../store/Auth';

function AdminLayout() {
  const {isLoading,user} =  useAuth();
  if(isLoading){
    return <h1>Loading...</h1>
  }

  if(!user.isAdmin){
    return <Navigate to="/" />
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 md:h-auto bg-gray-800 bg-opacity-40 backdrop-blur-lg shadow-lg flex flex-col items-center p-4 lg:py-8">
      <div style={{display:"flex",justifyContent:"space-around",margin:"20px", flexDirection:"column", alignItems:"center"}} >

        <div>
        <h2 className="text-xl lg:text-2xl font-bold mb-4">Admin Panel</h2>
        </div>
        <div>
        <ul className="space-y-4 lg:space-y-6 w-full px-2 lg:px-4">
          <li>
            <NavLink
              to="/admin/users"
              className="flex items-center space-x-2 lg:space-x-3 text-base lg:text-xl hover:text-indigo-400"
            >
              <FaUsers />
              <span>Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/contacts"
              className="flex items-center space-x-2 lg:space-x-3 text-base lg:text-xl hover:text-indigo-400"
            >
              <FaPhone />
              <span>Contacts</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className="flex items-center space-x-2 lg:space-x-3 text-base lg:text-xl hover:text-indigo-400"
            >
              <FaServicestack />
              <span>Services</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="flex items-center space-x-2 lg:space-x-3 text-base lg:text-xl hover:text-indigo-400"
            >
              <FaHome />
              <span>Home</span>
            </NavLink>
          </li>
        </ul>
        </div>
                
      </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-4 lg:p-8 bg-gray-900 text-white">
        {/* This is where the dashboard content will be rendered */}
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
