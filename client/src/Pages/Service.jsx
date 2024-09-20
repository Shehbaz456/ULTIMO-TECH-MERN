import React, { useEffect, useState } from "react";
import CardImg from "../assets/images/CardImg.png";
import { useAuth } from "../store/Auth";

function Service() {
  const { services } = useAuth();

  // const [services, setServices] = useState([]);
  // useEffect(() => {
    // Define the async function inside the useEffect
    // const fetchServices = async () => {
    //   try {
    //     const response = await fetch("http://localhost:8000/api/data/service",{
    //       method: "GET",
    //     });
    //     const data = await response.json();

    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }

    //     setServices(data); // Assuming the API returns an array of services
    //     console.log(data);
    //   } catch (error) {
    //     console.error("Error fetching services:", error);
    //   }
    // };

  //   fetchServices(); // Call the async function
  // }, []); // Empty dependency array ensures it runs only once

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white py-20 px-6">
        <h1 className="text-4xl font-bold text-center mb-10">Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((curElem,index) => {
            const { price,service, description, provider } = curElem;
            return(
            <div
              key={index}
              className="bg-gray-800 bg-opacity-20 backdrop-blur-lg shadow-lg rounded-xl p-6 flex flex-col items-center justify-center"
            >
              {/* Image Placeholder */}
              <div className="mb-6">
                <img
                  src={CardImg} // Replace with your image URL or handle it dynamically
                  alt={service}
                  className="w-100% h-48 object-cover rounded-lg"
                />
              </div>

              <h3 className="text-xl font-bold mb-4">{service}</h3>
              <p className="text-gray-300 mb-4">{description}</p>
              <p className="text-gray-400 mb-4">{provider}</p>

              <p className="text-indigo-400 font-bold">{price}</p>
            </div>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default Service;
