import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Logout from './components/Auth/Logout';

const App = () => {
    return (
        <Router>
            <div>
                <h1>My Portfolio</h1>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;