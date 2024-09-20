import React, { useState, useEffect } from 'react'
import { useAuth } from '../store/Auth';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
function AdminContacts() {
  const [contacts, setContacts] = useState([])
  const { AuthorizationToken,API } = useAuth();

  async function fetchContacts(){
     try {
       const response = await fetch(`${API}/api/admin/contacts`,{
         method:"GET",
         headers:{
           "Content-Type":"application/json",
           Authorization:AuthorizationToken,
         }
       })
       const data = await response.json();
       // console.log(data);
       setContacts(data)
     } catch (error) {
       console.log("Error from the Admin contact",error); 
     }
   }
  
  async function deleteContact(id){
    try {
      const response = await fetch(`${API}/api/admin/contacts/delete/${id}`,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json",
          Authorization:AuthorizationToken,
        }
      })
      if(response.ok){
        toast.success("Contact Deleted Successfully");
        fetchContacts();
      }
      // fetchContacts();
    } catch (error) {
      console.log("Error from the Admin contact",error);
      
    }
  }

   useEffect(()=>{
    fetchContacts();
  },[])
  
  return (
    <div className="flex flex-col p-4">
      <h1 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-8">Admin Contact Management</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-gray-800 bg-opacity-40 backdrop-blur-lg rounded-lg shadow-lg">
          <thead>
            <tr className="text-left text-gray-400">
              <th className="py-3 px-4 lg:px-6">Name</th>
              <th className="py-3 px-4 lg:px-6">Email</th>
              <th className="py-3 px-4 lg:px-6">Message</th>
              <th className="py-3 px-4 lg:px-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact,index) => (
              <tr key={index}  className="border-b border-gray-700">
                <td className="py-2 px-4 lg:py-4 lg:px-6">{contact.username}</td>
                <td className="py-2 px-4 lg:py-4 lg:px-6">{contact.email}</td>
                <td className="py-2 px-4 lg:py-4 lg:px-6 max-w-xs lg:max-w-sm break-words overflow-auto h-16 lg:h-20">{contact.message} </td>
                <td className="py-2 px-4 lg:py-4 lg:px-6">
                  <Link to={`/admin/contacts/${contact._id}`}>
                  <button className="bg-green-500 text-white px-3 lg:px-4 py-1 lg:py-2 rounded-full mr-2"
                  >Edit</button>
                  </Link>

                  <button
                    onClick={() => deleteContact(contact._id)}
                    className="bg-red-500 text-white px-3 lg:px-4 py-1 lg:py-2 rounded-full"
                  > Delete </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminContacts
