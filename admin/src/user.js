import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from './BaseUrl';

const Users = () => {
  const [users, setUsers] = useState([]);
 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/admin/users`);
        setUsers(response.data);
      } catch (error) {
        setUsers([]); 
      }
    };

    fetchUsers(); 
  }, []);

  return (
    <div className="container mx-auto p-6 bg-gradient-to-l from-sky-400 to-white min-h-screen">
    <h1 className="text-4xl font-extrabold text-center text-[#001f3f] mb-8">Basic Registrations</h1>


    {/* Registrations Table */}
    <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-[#001f3f] text-white">
                <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                     </tr>
            </thead>
            <tbody>
                {users.map((reg, index) => (
                    <tr 
                        key={index} 
                        className="border-b hover:bg-blue-50 transition duration-200"
                    >
                        <td className="px-6 py-4">{reg.name}</td>
                        <td className="px-6 py-4">{reg.email}</td>
                        </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>
  );
};

export default Users;
