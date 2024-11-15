import React, { useEffect, useState } from "react";
import { useAuth } from "../store/Auth";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';

const AdminContactEdit = () => {

    const { id } = useParams(); // get id from url
    const navigate = useNavigate();
    const { AuthorizationToken,API } = useAuth();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        message: "",
    })

    async function Contactdata() {
        try {
            const response = await fetch(`${API}/api/admin/contacts/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: AuthorizationToken,
                },
            })
            const data = await response.json();
            // console.log(data);
            setFormData({
                username: data.username,
                email: data.email,
                message: data.message,
            });
        } catch (error) {
            console.log("Error from the edit contact route",error);
        }
    }
    useEffect(()=>{
        Contactdata();
    },[id, AuthorizationToken])
    
    function handleInputChange(e){
        const {name , value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
    }

   const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API}/api/admin/contacts/update/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: AuthorizationToken,
                },
                body: JSON.stringify(formData),
            })
            const data = await response.json();
            console.log("update after Contact",data);
            
            if (response.ok) {
                toast.success("Contact updated successfully");
                navigate("/admin/contacts");
            } else {
                toast.error("Failed to update contact");
            }
            
        } catch (error) {
            console.log("Error from the edit contact route",error);
            
        }
    }





  return (
    <div className="flex flex-col p-4">
      <h1 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-8">
        Admin Contact Management
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6"
      >
        <div className="mb-4">
          <label className="block text-white">Name</label>
          <input
            type="text"
            name="username"
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Message</label>
          <textarea
            className="w-full p-2 rounded bg-gray-700 text-white"
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Update Contact
        </button>
      </form>
    </div>
  );
};

export default AdminContactEdit;
