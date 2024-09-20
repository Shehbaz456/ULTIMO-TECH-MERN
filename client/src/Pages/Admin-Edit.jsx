import React,{useState,useEffect} from 'react'
import { useNavigate,useParams} from 'react-router-dom';
import { useAuth } from '../store/Auth';
import { toast } from 'react-toastify';

function AdminEdit() {
    const { id } = useParams(); // get id from url
    const { AuthorizationToken,API } = useAuth();
    const navigate = useNavigate();
    let [formData, setFormData] = useState({
      username: '',
      email: '',
      phone: '',
    })

    useEffect(() => {
        async function fetchUserData() {
          try {
            const response = await fetch(`${API}/api/admin/users/${id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: AuthorizationToken,
              },
            });
            const data = await response.json();
            console.log(data);
            setFormData({
              username: data.username,
              email: data.email,
              phone: data.phone,
            });
          } catch (error) {
            toast.error('Error fetching user data:', error);
          }
        }
    
        fetchUserData();
      }, [id, AuthorizationToken]);

    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
   async function handleSubmit(e) {
      e.preventDefault();
      // make API call to update user data
      try {
        const response = await fetch(`${API}/api/admin/users/update/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: AuthorizationToken,
          },
          body: JSON.stringify(formData),
        })
        const data = await response.json();
        console.log("User after update", data);
        // toast.success('User updated successfully');
        if (response.ok) {
            toast.success('User updated successfully');
            navigate('/admin/users'); // Navigate back to the users list after successful update
        } else {
          // console.error('Error updating user:', data.message);
          toast.error('User not updated');
        }
      } catch (error) {
        // toast.error('Error updating user:', error);
        toast.error('Error updating user:');
      }
    //   navigate('/admin/users');
    }
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-8">Edit User</h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 text-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="username" className="block font-bold mb-2">Name</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3 bg-gray-700 "
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3  bg-gray-700 "
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block font-bold mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3 bg-gray-700"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update User
        </button>
      </form>
    </div>
  )
}

export default AdminEdit
