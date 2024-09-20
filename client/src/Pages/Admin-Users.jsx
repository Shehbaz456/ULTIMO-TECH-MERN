import React, { useEffect, useState } from 'react';
import { useAuth} from '../store/Auth';
import { Link } from 'react-router-dom'; 
import { toast } from 'react-toastify';
function AdminUsers() {
  const [user, SetUser] = useState([]);
  // const [isAdmin, setIsAdmin] = useState(false);
  const { AuthorizationToken,API } = useAuth();
 async function deleteUser(id) {
    try {
      const response = await fetch(`${API}/api/admin/users/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: AuthorizationToken,
        },
      });
      const data = await response.json();
      console.log("User Deleted", data);
      
      if (response.ok) {
        toast.success("User deleted successfully");
        getUsersinfo();
      }else{
        toast.error("User not deleted");
      }

    } catch (error) {
      console.log("Error from the user route",error);
    }
  }
  
  async function getUsersinfo() {
    try {
      const response = await fetch(`${API}/api/admin/users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: AuthorizationToken,
        },
      });
      const data = await response.json();
      
      SetUser(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUsersinfo();
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-8">Admin Users Data</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-gray-800 bg-opacity-40 backdrop-blur-lg rounded-lg shadow-lg">
          <thead>
            <tr className="text-left text-gray-400">
              <th className="py-3 px-4 lg:px-6">Name</th>
              <th className="py-3 px-4 lg:px-6">Email</th>
              <th className="py-3 px-4 lg:px-6">Phone</th>
              <th className="py-3 px-4 lg:px-6">Role</th>
              <th className="py-3 px-4 lg:px-6">Update</th>
              <th className="py-3 px-4 lg:px-6">Delete</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="py-2 px-4 lg:py-4 lg:px-6">{user.username}</td>
                <td className="py-2 px-4 lg:py-4 lg:px-6">{user.email}</td>
                <td className="py-2 px-4 lg:py-4 lg:px-6">{user.phone}</td>
                <td className="py-2 px-4 lg:py-4 lg:px-6">
                  {user.isAdmin ? <span className="text-blue-500 font-bold ">Admin</span> : <span>User</span>}
                </td>
                
                <td className="py-2 px-4 lg:py-4 lg:px-6">
                {!user.isAdmin ? (
                    <Link to={`/admin/users/${user._id}`}>
                      <button className="bg-green-500 text-white px-3 lg:px-4 py-1 lg:py-2 rounded-full">
                        Edit
                      </button>
                    </Link>
                  ) : (
                    <span className="text-gray-500">Not Editable</span> // Special color for admins
                  )}
                </td>
                <td className="py-2 px-4 lg:py-4 lg:px-6">
                {!user.isAdmin ? (
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="bg-red-500 text-white px-3 lg:px-4 py-1 lg:py-2 rounded-full"
                    >
                      Delete
                    </button>
                  ) : (
                    <span className="text-gray-500">Cannot Delete</span> // Special color for admins
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminUsers;
