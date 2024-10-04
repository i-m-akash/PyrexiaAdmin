import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from './BaseUrl'; // Ensure your BASE_URL is correctly set

const AddEventPayment = () => {
  const [formData, setFormData] = useState({
    mainEvent: '',
    eventName: '',
    email: '', 
    order_Id: '',
    payment_Id: '',
    signature: ''
  });

      
  const events = {
    "Alfresco": [
        { title: "Capture and Conquer" },
        { title: "Pictionary" },
        { title: "Squid Game" },
        { title: "Paper Dance" },
        { title: "Silent Giggles" },
        { title: "Treasure Hunt" },
        { title: "Darty Secrets" },
        { title: "Songstravaganza" },
        { title: "SwiftMingle" },
        { title: "Tambola" },
        { title: "Evening Amore" },
        { title: "Musical Chairs" },
        { title: "Soul Sync" },
        { title: "Drape It" },
        { title: "Your Pace or Mine?" },
    ],
    "Chorea": [
        { title: "Nritya Sangam" },
        { title: "Ballismus" },
        { title: "Street Blaze" },
        { title: "Adaptune" },
        { title: "Blossoming Steps – Couple Dance" },
    ],
    "Kalakriti": [
        { title: "Fantasy Faces" },
        { title: "Caffeine Creations" },
        { title: "Brushless Strokes" },
        { title: "Acrylic Odyssey" },
        { title: "Tattoo Tales" },
        { title: "Contrast Chronicles" },
        { title: "Cupful of Doodles" },
        { title: "Splash Tees" },
        { title: "Mehendi Mania" },
        { title: "Brush Of Pebbles" },
    ],
    "LITtMania": [
        { title: "Cineholics" },
        { title: "Cognizzia" },
        { title: "Biocrux Jr.(MedQuiz)" },
        { title: "Biocrux Sr.(MedQuiz)" },
        { title: "Anime No Tatakai" },
        { title: "Iconic Impressions " },
        { title: "Unstory" },
        { title: "Rip n Stitch" },
        { title: "Cupid's Countdown" },
        { title: "Kavyotsav:" },
        { title: "Prose the Pictures" },
        { title: "The War of Wits(Debate Competition)" },
        { title: "JAM" },
    ],
    "Sinfonia": [
        { title: "TARANG: Indian Singing" },
        { title: "Euphonia: Western Singing" },
        { title: "METALLICA" },
        { title: "BATTLE OF BANDS" },
        { title: "RHYTHM REVOLUTION - RAP BATTLE AND BEATBOXING" },
    ],
    "Thespians": [
        { title: "Nukkad Natak" },
        { title: "Echoes of Expressions: Monoact and Mime competition" },
        { title: "COMIC-COMBAT: STAND-UP COMEDY" },
        { title: "MADD ANGLE" },
    ],
    "Thunderbolt": [
        { title: "Mortal Kombat" },
        { title: "COD MOBILE (MULTIPLAYER)" },
        { title: "TEKKEN" },
        { title: "FIFA" },
        { title: "BGMI (BATTLE ROYALE)" },
        { title: "BGMI (TEAM DEATH MATCH)" },
    ],
    "Velocity": [
        { title: "Boys Basketball 5V5" },
        { title: "Girls Basketball 5V5" },
        { title: "Boys Basketball 3V3" },
        { title: "Girls Basketball 3V3" },
        { title: "Cricket" },
        { title: "Carrom Singles" },
        { title: "Carrom Doubles" },
        { title: "Carrom Mixed Doubles" },
        { title: "Table Tennis Singles" },
        { title: "Table Tennis Doubles" },
        { title: "Table Tennis Mixed Doubles" },
        { title: "Girls Kabaddi" },
        { title: "Boys Kabaddi" },
        { title: "Volleyball Boys" },
        { title: "Volleyball Girls" },
        { title: "Football (Boys Only)" },
        { title: "Futsal (Boys Only)" },
        { title: "Tennis Singles" },
        { title: "Tennis Doubles" },
        { title: "Tennis Mixed Doubles" },
        { title: "Chess" },
        { title: "Chess (Rapid)" },
        { title: "Chess (Blitz)" },
        { title: "Chess (Bullet)" },
        { title: "Badminton Singles" },
        { title: "Badminton Doubles" },
        { title: "Badminton Mixed Doubles" },
    ],
    "Chronos": [
        { title: "Chronos" },
    ],
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/add-event-payment-details`, formData);
      alert('Registration successful', response.data);
    } catch (error) {
      alert('Error submitting registration', error);
    }
  };
  const eventOptions = formData.mainEvent ? events[formData.mainEvent] || [] : [];
  return (
    <form onSubmit={handleSubmit}>
         <div>
        <label>Main Event:</label>
        <select
          name="mainEvent"
          value={formData.mainEvent}
          onChange={handleChange}
          required
        >
          <option value="">Select Main Event</option>
          {Object.keys(events).map((mainEvent) => (
            <option key={mainEvent} value={mainEvent}>
              {mainEvent}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Event Name:</label>
        <select
          name="eventName"
          value={formData.eventName}
          onChange={handleChange}
          required
          disabled={!formData.mainEvent}
        >
          <option value="">Select Event</option>
          {eventOptions.map((event) => (
            <option key={event.title} value={event.title}>
              {event.title}
            </option>
          ))}
        </select>
      </div>
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="text" name="order_Id" placeholder="Order ID" value={formData.order_Id} onChange={handleChange} required />
      <input type="text" name="payment_Id" placeholder="Payment ID" value={formData.payment_Id} onChange={handleChange} required />
      <input type="text" name="signature" placeholder="Signature" value={formData.signature} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddEventPayment;
