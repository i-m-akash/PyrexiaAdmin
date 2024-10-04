import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from './BaseUrl'; // Ensure your BASE_URL is correctly set

const UpdateMember = () => {
  const [formData, setFormData] = useState({
   
    email: ''
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/update-member`, formData);
      alert('Payment Id Found', response.data);
    } catch (error) {
      alert('Error', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
     
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UpdateMember;
