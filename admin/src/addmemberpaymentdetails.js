import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from './BaseUrl'; // Ensure your BASE_URL is correctly set

const AddMemberPayment = () => {
  const [formData, setFormData] = useState({

    email: '', 
    order_Id: '',
    payment_Id: '',
    signature: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/add-member-payment-details`, formData);
      alert('Registration successful', response.data);
    } catch (error) {
      alert('Error submitting registration', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="text" name="order_Id" placeholder="Order ID" value={formData.order_Id} onChange={handleChange} required />
      <input type="text" name="payment_Id" placeholder="Payment ID" value={formData.payment_Id} onChange={handleChange} required />
      <input type="text" name="signature" placeholder="Signature" value={formData.signature} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddMemberPayment;
