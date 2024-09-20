import React from "react";
import CardImg from "../assets/images/CardImg.png";
import { useAuth } from "../store/Auth";
import "./Service.css"; // Import custom CSS for animations

function Service() {
  const { services } = useAuth();

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white py-20 px-6">
        <h1 className="text-4xl font-bold text-center mb-10">Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((curElem, index) => {
            const { price, service, description, provider } = curElem;
            return (
              <div
                key={index}
                className="service-card bg-gray-800 bg-opacity-20 backdrop-blur-lg shadow-lg rounded-xl p-6 flex flex-col items-center justify-center"
              >
                {/* Image Placeholder */}
                <div className="mb-6 service-img">
                  <img
                    src={CardImg} // Replace with your image URL or handle it dynamically
                    alt={service}
                    className="w-100% h-48 object-cover rounded-lg"
                  />
                </div>

                <h3 className="text-xl font-bold mb-4">{service}</h3>
                <p className="text-gray-300 mb-4">{description}</p>
                <p className="text-gray-400 mb-4">{provider}</p>

                <p className="text-indigo-400 font-bold service-price">{price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Service;
