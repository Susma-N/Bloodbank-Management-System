// src/components/HomePage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './HomePage.css';
import donateImage from '../assets/donate-blood.jpg';
import requestImage from '../assets/request-blood.avif';
import availabilityImage from '../assets/check-availability.avif';
import bloodCampsImage from '../assets/blood-camps.webp';
import nearestBanksImage from '../assets/blood-banks.png';
import bgImage1 from '../assets/homepage-bg.jpg';
import bgImage2 from '../assets/bg-image2.jpg';
import bgImage3 from '../assets/bg-image3.avif';
import BloodDonationSimulation from './BloodDonationSimulation'; // Import the BloodDonationSimulation component

const HomePage = () => {
  const navigate = useNavigate();

  const chartData = [
    { recipientType: 'A+', compatibleDonors: 'A+, A-, O+, O-' },
    { recipientType: 'A-', compatibleDonors: 'A-, O-' },
    { recipientType: 'B+', compatibleDonors: 'B+, B-, O+, O-' },
    { recipientType: 'B-', compatibleDonors: 'B-, O-' },
    { recipientType: 'AB+', compatibleDonors: 'AB+, AB-, A+, A-, B+, B-, O+, O-' },
    { recipientType: 'AB-', compatibleDonors: 'AB-, A-, B-, O-' },
    { recipientType: 'O+', compatibleDonors: 'O+, O-' },
    { recipientType: 'O-', compatibleDonors: 'O-' }
  ];

  const handleScroll = () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.classList.add('visible');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="homepage">
      <section className="welcome-section">
        <div className="background-slider">
          <img src={bgImage1} alt="Background 1" />
          <img src={bgImage2} alt="Background 2" />
          <img src={bgImage3} alt="Background 3" />
        </div>
        <div className="welcome-content fade-in">
          <h1>Welcome to the Blood Bank Management System</h1>
          <p>Your contribution can save lives. Join us today!</p>
        </div>
      </section>

      <section className="features">
        <div className="feature fade-in">
          <img src={donateImage} alt="Donate Blood" className="feature-image" />
          <h2>Donate Blood</h2>
          <p>Become a donor and save lives. Schedule your appointment.</p>
          <button className="button" onClick={() => navigate('/donor-login')}>Donate Now</button>
        </div>
        <div className="feature fade-in">
          <img src={requestImage} alt="Request Blood" className="feature-image" />
          <h2>Request Blood</h2>
          <p>In need of blood? Find the right match quickly and easily.</p>
          <button className="button" onClick={() => navigate('/patient-login')}>Request Blood</button>
        </div>
        <div className="feature fade-in">
          <img src={availabilityImage} alt="Check Availability" className="feature-image" />
          <h2>Check Availability</h2>
          <p>Search our database for available blood types and donors.</p>
          <button className="button" onClick={() => navigate('/availability')}>Check Availability</button>
        </div>
      </section>

      <section className="compatibility-chart-container fade-in">
        <h2>Blood Type Compatibility Chart</h2>
        <table className="compatibility-chart">
          <thead>
            <tr>
              <th>Recipient Blood Type</th>
              <th>Compatible Donor Blood Types</th>
            </tr>
          </thead>
          <tbody>
            {chartData.map((item, index) => (
              <tr key={index}>
                <td>{item.recipientType}</td>
                <td>{item.compatibleDonors}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="additional-section fade-in">
        <img src={bloodCampsImage} alt="Blood Camps" className="section-image" />
        <div className="section-content">
          <h2>Blood Camps</h2>
          <p>Find and participate in upcoming blood donation camps near you. Your contribution is vital to saving lives.</p>
          <button className="button" onClick={() => navigate('/blood-camps')}>Learn More</button>
        </div>
      </section>

      <section className="additional-section fade-in">
        <img src={nearestBanksImage} alt="Nearest Blood Banks" className="section-image" />
        <div className="section-content">
          <h2>Nearest Blood Banks</h2>
          <p>Locate the nearest blood banks and get in touch with them for your needs. We help you find the closest resources.</p>
          <button className="button" onClick={() => navigate('/nearest')}>Find Nearest Blood Banks</button>
        </div>
      </section>

      <section className="blood-donation-simulation-section fade-in">
        <h2>Blood Donation Simulation</h2>
        <BloodDonationSimulation />
      </section>
    </div>
  );
}

export default HomePage;
