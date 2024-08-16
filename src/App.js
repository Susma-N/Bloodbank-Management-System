// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomePage from './components/HomePage';
import About from './components/About';
import Info from './components/Info';
import Header from './components/Header';
import Footer from './components/Footer';
import DonorLogin from './components/DonorLogin';
import PatientLogin from './components/PatientLogin';
import PatientDetails from './components/PatientDetails';
import Signup from './components/Signup';
import Availability from './components/Availability';
import BloodCamps from './components/BloodCamps';
import Nearest from './components/Nearest';
import LoginChoice from './components/LoginChoice';
import BloodDonation from './components/BloodDonation';
import Chatbot from './components/Chatbot';
import BloodDonationSimulation from './components/BloodDonationSimulation';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const App = () => {
  const [user, setUser] = useState(null); // User state

  const handleLogin = (userInfo) => {
    setUser(userInfo); // Set user state on login
  };

  const handleLogout = () => {
    setUser(null); // Clear user state on logout
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header user={user} onLogout={handleLogout} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/info" element={<Info />} />
            <Route path="/login-choice" element={<LoginChoice />} />
            <Route path="/donor-login" element={<DonorLogin onLogin={handleLogin} />} />
            <Route path="/patient-login" element={<PatientLogin />} />
            <Route path="/patient-details" element={<PatientDetails />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/availability" element={<Availability />} />
            <Route path="/blood-camps" element={<BloodCamps />} />
            <Route path="/nearest" element={<Nearest />} />
            <Route path="/blood-donation" element={<BloodDonation />} />
            <Route path="/blood-donation-simulation" element={<BloodDonationSimulation />} /> {/* BloodDonationSimulation route */}

          </Routes>
        </div>
        <Chatbot />
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default App;
