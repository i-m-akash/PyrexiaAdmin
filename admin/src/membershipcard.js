import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from './BaseUrl';

function MembershipCard() {
    const [registrations, setRegistrations] = useState([]);
    const [filteredRegistrations, setFilteredRegistrations] = useState([]);
    const [filter, setFilter] = useState('all');
    const [searchPaymentId, setSearchPaymentId] = useState('');
    const [searchMobile, setSearchMobile] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetching Registration Data on Component Mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const registrationData = await axios.get(`${BASE_URL}/admin/membershipcard`);
                setRegistrations(registrationData.data);
                setFilteredRegistrations(registrationData.data); // Set initial filtered data
            } catch (error) {
                setError('Error fetching data. Please try again.');
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); // Stop loading once data is fetched
            }
        };
        fetchData();
    }, []);

    // Handle filter change for Paid/Not Paid
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
        applyFilters(e.target.value, searchPaymentId, searchMobile);
    };

    // Handle search by paymentId
    const handleSearchPaymentIdChange = (e) => {
        setSearchPaymentId(e.target.value);
        applyFilters(filter, e.target.value, searchMobile);
    };

    // Handle search by mobile number
    const handleSearchMobileChange = (e) => {
        setSearchMobile(e.target.value);
        applyFilters(filter, searchPaymentId, e.target.value);
    };

    // Apply filters for "Paid", "Payment ID", and "Mobile No."
    const applyFilters = (selectedFilter, paymentId, mobile) => {
        let filtered = registrations;

        // Filter by Paid/Not Paid
        if (selectedFilter !== 'all') {
            const isPaid = selectedFilter === 'paid';
            filtered = filtered.filter(reg => reg.Paid === isPaid);
        }

        // Filter by paymentId
        if (paymentId) {
            filtered = filtered.filter(reg => reg.payment_Id && reg.payment_Id.includes(paymentId));
        }

        // Filter by mobile number
        if (mobile) {
            filtered = filtered.filter(reg => reg.mobile && reg.mobile.includes(mobile));
        }

        setFilteredRegistrations(filtered);
    };

    // Download CSV
    const downloadCSV = () => {
        const headers = ['Serial No.', 'Name', 'Email', 'Mobile No.', 'Order Id', 'Payment Id', 'Amount', 'Paid'];
        const rows = filteredRegistrations.map((reg, index) => [
            index + 1, reg.name, reg.email, reg.mobile, reg.order_Id, reg.payment_Id, reg.amount, reg.Paid ? 'Paid' : 'Not Paid'
        ]);

        let csvContent = 'data:text/csv;charset=utf-8,';
        csvContent += headers.join(',') + '\n';
        rows.forEach(rowArray => {
            const row = rowArray.join(',');
            csvContent += row + '\n';
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'Membership_Card_Registrations.csv');
        document.body.appendChild(link);
        link.click();
    };

    // Loading state
    if (loading) {
        return <div className="flex justify-center items-center h-screen"><div>Loading data...</div></div>;
    }

    // Error state
    if (error) {
        return <div className="text-red-500 text-center">{error}</div>;
    }

    return (
        <div className="container mx-auto p-6 bg-gradient-to-l from-sky-400 to-white min-h-screen">
            <h1 className="text-4xl font-extrabold text-center text-[#001f3f] mb-8">Membership Card Registration</h1>

            {/* Filter & Search Section */}
            <div className="flex justify-center mb-4 space-x-4">
                {/* Filter Dropdown */}
                <select
                    value={filter}
                    onChange={handleFilterChange}
                    className="border border-gray-300 p-2 rounded-lg shadow-lg"
                >
                    <option value="all">All</option>
                    <option value="paid">Paid</option>
                    <option value="not_paid">Not Paid</option>
                </select>

                {/* Search by Payment ID */}
                <input
                    type="text"
                    value={searchPaymentId}
                    onChange={handleSearchPaymentIdChange}
                    placeholder="Search by Payment ID"
                    className="border border-gray-300 p-2 rounded-lg shadow-lg"
                />

                {/* Search by Mobile Number */}
                <input
                    type="text"
                    value={searchMobile}
                    onChange={handleSearchMobileChange}
                    placeholder="Search by Mobile No."
                    className="border border-gray-300 p-2 rounded-lg shadow-lg"
                />
            </div>

            {/* Download CSV Button */}
            <div className="flex justify-center mb-4">
                <button 
                    onClick={downloadCSV} 
                    className="bg-gradient-to-r from-sky-400 to-white text-black hover:bg-sky-600 hover:text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300"
                >
                    Download CSV
                </button>
            </div>

            {/* Registrations Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-[#001f3f] text-white">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Serial No.</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Mobile No.</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Order Id</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Payment Id</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Paid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRegistrations.map((reg) => (
                            <tr 
                                key={reg.payment_Id || reg.order_Id} 
                                className="border-b hover:bg-blue-50 transition duration-200"
                            >
                                <td className="px-6 py-4">{registrations.indexOf(reg) + 1}</td>
                                <td className="px-6 py-4">{reg.name}</td>
                                <td className="px-6 py-4">{reg.email}</td>
                                <td className="px-6 py-4">{reg.mobile}</td>
                                <td className="px-6 py-4">{reg.order_Id}</td>
                                <td className="px-6 py-4">{reg.payment_Id}</td>
                                <td className="px-6 py-4 text-green-600 font-semibold">{reg.amount}</td>
                                <td className="px-6 py-4">{reg.Paid ? "Paid" : "Not Paid"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MembershipCard;
