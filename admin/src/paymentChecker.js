
import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from './BaseUrl';
function PaymentChecker() {
  const [email, setEmail] = useState('');
  const [eventName, setEventName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

        
  const events = [
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

        { title: "Nritya Sangam" },
        { title: "Ballismus" },
        { title: "Street Blaze" },
        { title: "Adaptune" },
        { title: "Blossoming Steps – Couple Dance" },
    
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
  
        { title: "TARANG: Indian Singing" },
        { title: "Euphonia: Western Singing" },
        { title: "METALLICA" },
        { title: "BATTLE OF BANDS" },
        { title: "RHYTHM REVOLUTION - RAP BATTLE AND BEATBOXING" },
  
        { title: "Nukkad Natak" },
        { title: "Echoes of Expressions: Monoact and Mime competition" },
        { title: "COMIC-COMBAT: STAND-UP COMEDY" },
        { title: "MADD ANGLE" },
  
        { title: "Mortal Kombat" },
        { title: "COD MOBILE (MULTIPLAYER)" },
        { title: "TEKKEN" },
        { title: "FIFA" },
        { title: "BGMI (BATTLE ROYALE)" },
        { title: "BGMI (TEAM DEATH MATCH)" },

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
 
        { title: "Chronos" },

  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
  
    try {
      const response = await axios.post(`${BASE_URL}/payment-check`, { email, eventName });
      setMessage(response.data.message);
    } catch (error) {
      // Log the error details to the console
      console.error('Error occurred during payment check:', error);
  
      // Optionally, you can display more detailed error info to the user
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(`Error: ${error.response.data.message}`);
      } else {
        setMessage('An unexpected error occurred. Please try again.');
      }
    }
  
    setLoading(false);
  };
  

  return (
    <div className="container mx-auto px-4 py-10">
    <h1 className="text-3xl font-bold mb-6">Check Payment Status and Send Mail</h1>
<h2 className="text-xl text-yellow-600 font-bold mb-6">
  If payment is found for any entry, an email will be sent to the user (preferred for entries showing "Not Paid" ). Valid for payments made after October 3th.
</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-lg">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="text-lg">Event Name:</label>
          <select
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
            className="border rounded px-4 py-2"
          >
            <option value="" disabled>Select Event</option>
            <option value="Basic Registration">Basic Registration</option>
            <option value="Membership Card">Membership Card</option>
            {events.map((event, index) => (
              <option key={index} value={event.title}>
                {event.title}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Submit'}
        </button>
      </form>

      {message && (
        <div className="mt-4">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default PaymentChecker;
