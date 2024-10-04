// Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="container min-w-full mx-auto p-6 bg-gradient-to-l from-sky-400 to-white min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-[#001f3f] mb-12">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic Registration Details Card */}
        <div
          className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transition duration-300"
          onClick={() => navigate('/basic-registration')}
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Basic Registration Details</h2>
        
        </div>

        {/* Membership Card Details Card */}
        <div
          className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transition duration-300"
          onClick={() => navigate('/membership-card')}
        >
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Membership Card Details</h2>
         
        </div>

        {/* Event Details Card */}
        <div
          className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transition duration-300"
          onClick={() => navigate('/events')}
        >
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Event Details</h2>
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
