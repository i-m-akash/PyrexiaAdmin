// Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Action() {
  const navigate = useNavigate();

  return (
    <div className="container min-w-full mx-auto p-6 bg-gradient-to-l from-sky-400 to-white min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-[#001f3f] mb-12">Action Page</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic Registration Details Card */}
        <div
          className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transition duration-300"
          onClick={() => navigate('/add-basicregistration')}
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Add Basic Registration Details </h2>
        
        </div>

        {/* Membership Card Details Card */}
        <div
          className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transition duration-300"
          onClick={() => navigate('/add-member')}
        >
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Add Membership Card Details</h2>
         
        </div>

        {/* Event Details Card */}
        <div
          className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transition duration-300"
          onClick={() => navigate('/add-events')}
        >
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Add Event Details</h2>
          
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic Registration Details Card */}
        <div
          className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transition duration-300"
          onClick={() => navigate('/update-basic')}
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Update Basic Registration Details </h2>
        
        </div>

        {/* Membership Card Details Card */}
        <div
          className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transition duration-300"
          onClick={() => navigate('/update-member')}
        >
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Update Membership Card Details</h2>
         
        </div>

        {/* Event Details Card */}
        <div
          className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transition duration-300"
          onClick={() => navigate('/update-event')}
        >
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Update Event Details</h2>
          
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic Registration Details Card */}
        <div
          className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transition duration-300"
          onClick={() => navigate('/add-basic-payment')}
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Add Basic Registration Payment Details </h2>
        
        </div>

        {/* Membership Card Details Card */}
        <div
          className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transition duration-300"
          onClick={() => navigate('/add-member-payment')}
        >
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Add Membership Card Payment Details</h2>
         
        </div>

        {/* Event Details Card */}
        <div
          className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transition duration-300"
          onClick={() => navigate('/add-events-payment')}
        >
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Add Event Payment Details</h2>
          
        </div>
      </div>
    </div>
  );
}

export default Action;
