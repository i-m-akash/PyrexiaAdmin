 
    import React, { useEffect, useState } from 'react';
    import axios from 'axios';
    import { BASE_URL } from './BaseUrl';
    

    function Events() {
        const [registrations, setRegistrations] = useState([]);
        const [mainEventFilter, setMainEventFilter] = useState('');
        const [eventFilter, setEventFilter] = useState('');
        const [availableEvents, setAvailableEvents] = useState([]);
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(true);
        const [paidFilter, setPaidFilter] = useState('');
        const [paymentIdFilter, setPaymentIdFilter] = useState('');
        const [mobileNumberFilter, setMobileNumberFilter] = useState('');
    
           
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
    
        useEffect(() => {
            const fetchData = async () => {
                setLoading(true); 
                try {
                    const registrationData = await axios.get(`${BASE_URL}/admin/events`);
                    setRegistrations(registrationData.data);
                } catch (error) {
                    setError('Error fetching data. Please try again.');
                } finally {
                    setLoading(false);
                }
            };
            fetchData();
        }, []);
    
        const handleMainEventChange = (e) => {
            const selectedMainEvent = e.target.value;
            setMainEventFilter(selectedMainEvent);
    
            const subEvents = events[selectedMainEvent] || [];
            const eventTitles = subEvents.map(event => event.title);
    
            setAvailableEvents(eventTitles);
            setEventFilter('');
        };
    
        const handleEventChange = (e) => {
            setEventFilter(e.target.value);
        };
    
        const filteredRegistrations = registrations.filter(reg => {
            return (
                (!mainEventFilter || reg.mainevent === mainEventFilter) &&
                (!eventFilter || reg.eventName === eventFilter) &&
                (!paidFilter || String(reg.Paid) === paidFilter) &&
                (!paymentIdFilter || (reg.payment_Id && reg.payment_Id.includes(paymentIdFilter))) &&
                (!mobileNumberFilter || (reg.teamLeaderMobileNo && reg.teamLeaderMobileNo.includes(mobileNumberFilter)))
            );
        });
    
        const convertToCSV = (data) => {
            const headers = [
                'Serial No.', 'Main Event', 'Event', 'Team Leader Name', 
                'Team Leader Email', 'Team Leader Mobile No.', 'Team Size', 
                'College Name', 'Order Id', 'Payment Id', 'Amount', 'Paid', 'Ticket Given'
            ];
            const csvRows = [
                headers.join(','),
                ...data.map((reg, index) => [
                    index + 1,
                    reg.mainevent,
                    reg.eventName,
                    reg.teamLeaderName,
                    reg.teamLeaderEmail,
                    reg.teamLeaderMobileNo,
                    reg.teamSize,
                    `"${reg.teamLeaderCollege}"`,
                    reg.order_Id,
                    reg.payment_Id,
                    reg.amount,
                    reg.Paid ? 'Yes' : 'No',
                    reg.ticketGiven ? 'Yes' : 'No'
                ].join(','))
            ];
            return csvRows.join('\n');
        };
    
        const downloadCSV = () => {
            const csvData = convertToCSV(filteredRegistrations);
            const blob = new Blob([csvData], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('href', url);
            a.setAttribute('download', 'EventRegistration.csv');
            a.click();
        };
    
        const handleCheckboxChange = async (id) => {
            try {
                // Update the server with the new status
                await axios.post(`${BASE_URL}/eventTickets`, { id });
       
                // Map through registrations and update the ticketGiven for the specific registration
                const updatedRegistrations = registrations.map(reg =>
                    reg._id === id ? { ...reg, ticketGiven: !reg.ticketGiven } : reg
                );
                
                setRegistrations(updatedRegistrations);
            } catch (error) {
                console.error('Error updating ticket status:', error);
                const errorMessage = error.response?.data?.message || error.message || 'Unknown error occurred';
                alert(`Error: ${errorMessage}`);
            }
        };
       
        if (loading) {
            return <div className="flex justify-center items-center h-screen">Loading data...</div>;
        }
    
        if (error) {
            return <div className="text-red-500 text-center">{error}</div>;
        }
    
        return (
            <div className="container mx-auto p-6 bg-gradient-to-l from-sky-400 to-white min-h-screen">
                <h1 className="text-4xl font-extrabold text-center text-[#001f3f] mb-8">Event Registration</h1>
    
                <div className="mb-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                    {/* Filters */}
                    <div>
                        <label className="font-semibold mr-2">Main Event:</label>
                        <select 
                            value={mainEventFilter} 
                            onChange={handleMainEventChange} 
                            className="border p-2 rounded-lg"
                        >
                            <option value="">Select Main Event</option>
                            {Object.keys(events).map((mainEvent, index) => (
                                <option key={index} value={mainEvent}>
                                    {mainEvent}
                                </option>
                            ))}
                        </select>
                    </div>
    
                    <div>
                        <label className="font-semibold mr-2">Event:</label>
                        <select 
                            value={eventFilter} 
                            onChange={handleEventChange} 
                            className="border p-2 rounded-lg"
                            disabled={!availableEvents.length}
                        >
                            <option value="">Select Event</option>
                            {availableEvents.map((eventTitle, index) => (
                                <option key={index} value={eventTitle}>
                                    {eventTitle}
                                </option>
                            ))}
                        </select>
                    </div>
    
                    {/* Filters for Paid Status, Payment ID, and Mobile */}
                    <div>
                        <label className="font-semibold mr-2">Paid Status:</label>
                        <select 
                            value={paidFilter} 
                            onChange={(e) => setPaidFilter(e.target.value)} 
                            className="border p-2 rounded-lg"
                        >
                            <option value="">Select Paid Status</option>
                            <option value="true">Paid</option>
                            <option value="false">Not Paid</option>
                        </select>
                    </div> 
    
                    <div>
                        <label className="font-semibold mr-2">Payment ID:</label>
                        <input
                            type="text"
                            value={paymentIdFilter}
                            onChange={(e) => setPaymentIdFilter(e.target.value)}
                            className="border p-2 rounded-lg"
                            placeholder="Enter Payment ID"
                        />
                    </div>
    
                    <div>
                        <label className="font-semibold mr-2">Mobile Number:</label>
                        <input
                            type="text"
                            value={mobileNumberFilter}
                            onChange={(e) => setMobileNumberFilter(e.target.value)}
                            className="border p-2 rounded-lg"
                            placeholder="Enter Mobile Number"
                        />
                    </div>
                </div>
    
                {/* Download CSV button */}
                <div className="mb-6 flex justify-center">
                    <button 
                        onClick={downloadCSV} 
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                    >
                        Download CSV
                    </button>
                </div>
    
                {/* Event Registration Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-[#001f3f] text-white">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Serial No.</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Main Event</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Event</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Team Leader Name</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Team Leader Email</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Team Leader Mobile No.</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Team Size</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">College Name</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Order Id</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Payment Id</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Paid</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Ticket Given</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRegistrations.map((reg, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="px-6 py-4">{index + 1}</td>
                                    <td className="px-6 py-4">{reg.mainevent}</td>
                                    <td className="px-6 py-4">{reg.eventName}</td>
                                    <td className="px-6 py-4">{reg.teamLeaderName}</td>
                                    <td className="px-6 py-4">{reg.teamLeaderEmail}</td>
                                    <td className="px-6 py-4">{reg.teamLeaderMobileNo}</td>
                                    <td className="px-6 py-4">{reg.teamSize}</td>
                                    <td className="px-6 py-4">{reg.teamLeaderCollege}</td>
                                    <td className="px-6 py-4">{reg.order_Id}</td>
                                    <td className="px-6 py-4">{reg.payment_Id}</td>
                                    <td className="px-6 py-4">{reg.amount}</td>
                                    <td className="px-6 py-4">{reg.Paid ? 'Yes' : 'No'}</td>
                                    <td className="px-6 py-4">
                                        <input
                                            type="checkbox"
                                            checked={reg.ticketGiven}
                                            onChange={() => handleCheckboxChange(reg._id)}
                                            disabled={reg.ticketGiven}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
    
    export default Events;
    
