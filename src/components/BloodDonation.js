import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BloodDonation.css'; 
const BloodDonation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [donationDate, setDonationDate] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:8080/api/donate-blood', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, bloodType, donationDate }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit donation');
      }

      // Handle successful donation
      alert('Thank you for your donation!');
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="blood-donation">
      <h1>Donate Blood</h1>
      <form onSubmit={handleSubmit} className="donation-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="blood-type">Blood Type</label>
          <select
            id="blood-type"
            value={bloodType}
            onChange={(e) => setBloodType(e.target.value)}
            required
          >
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="donation-date">Preferred Donation Date</label>
          <input
            type="date"
            id="donation-date"
            value={donationDate}
            onChange={(e) => setDonationDate(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? 'Submitting...' : 'Submit Donation'}
        </button>
      </form>
    </div>
  );
};

export default BloodDonation;
