import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './dashboard'; // Your dashboard component
// import Login from './login'; // Your login component
import BasicRegistration from './basicregistration';
import MembershipCard from './membershipcard';
import Events from './events';
import AddBasicRegistration from './addBasicRegistration';
import Users from './user';
import AddMemberCard from './addMemberCard';
import UpdateMember from './updatemember';
import UpdateBasic from './updateBasicRegistration';
import Action from './action';
import UpdateEvent from './updateEvent';
import AddMemberPayment from './addmemberpaymentdetails';
import AddBasicPayment from './addBasicpayment';
import AddEventPayment from './addEventPayment';
function App() {
    // const [isAuthenticated, setIsAuthenticated] = useState(false);

    // const handleLogin = (username, password) => {
    //     // Simple validation for username and password
    //     if (username === 'admin' && password === 'password') {
    //         setIsAuthenticated(true);
    //     } else {
    //         alert('Wrong credentials. Please try again.');
    //     }
    // };

    return (
        <Router>
            <Routes>
                
                <Route path="/" element={<Dashboard />} />
                <Route path="/basic-registration" element={<BasicRegistration />} />
                <Route path="/membership-card" element={<MembershipCard />} />
                <Route path="/events" element={<Events />} />
                <Route path="/add-basicregistration" element={<AddBasicRegistration />} />
                <Route path="/add-member" element={<AddMemberCard />} />
                <Route path="/user" element={<Users />} />
                <Route path="/update-member" element={<UpdateMember/>}/>
                <Route path="/update-basic" element={<UpdateBasic/>}/>
                <Route path="/update-event" element={<UpdateEvent/>}/>
                <Route path="/action" element={<Action/>}/>
                <Route path="/add-member-payment" element={<AddMemberPayment />} />
                <Route path="/add-basic-payment" element={<AddBasicPayment />} />
                <Route path="/add-events-payment" element={<AddEventPayment />} />
            </Routes>
        </Router>
    );
}

export default App;
