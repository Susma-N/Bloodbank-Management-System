import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PatientLogin.css';

const PatientLogin = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [location, setLocation] = useState('');
  const [medicalInfo, setMedicalInfo] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [aadharFile, setAadharFile] = useState(null);
  const [receiptFile, setReceiptFile] = useState(null);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const patientData = {
      name,
      age,
      address,
      phone,
      bloodType,
      location,
      medicalInfo,
      additionalInfo,
      aadharFile: aadharFile ? aadharFile.name : 'No file uploaded',
      receiptFile: receiptFile ? receiptFile.name : 'No file uploaded',
    };

    setMessage('Patient saved successfully!');

    navigate('/patient-details', { state: { savedPatient: patientData, message } });
  };

  return (
    <div className="patient-login">
      <div className="login-container">
        <div className="form-section">
          <h1>Request Blood</h1>
          <form onSubmit={handleSubmit} className="search-form">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <label htmlFor="blood-type">Blood Type:</label>
            <input
              type="text"
              id="blood-type"
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
              required
            />
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <label htmlFor="medical-info">Medical Information:</label>
            <textarea
              id="medical-info"
              value={medicalInfo}
              onChange={(e) => setMedicalInfo(e.target.value)}
              placeholder="Describe any medical conditions or specific needs..."
              required
            />
            <label htmlFor="additional-info">Additional Confidential Information:</label>
            <textarea
              id="additional-info"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              placeholder="Provide any other confidential information..."
              required
            />
            <label htmlFor="aadhar-file">Upload Aadhar ID or PAN Card:</label>
            <input
              type="file"
              id="aadhar-file"
              onChange={(e) => setAadharFile(e.target.files[0])}
              accept=".jpg, .jpeg, .png, .pdf"
            />
            <label htmlFor="receipt-file">Upload Hospital Receipt:</label>
            <input
              type="file"
              id="receipt-file"
              onChange={(e) => setReceiptFile(e.target.files[0])}
              accept=".jpg, .jpeg, .png, .pdf"
            />
            <button type="submit">Submit</button>
          </form>
          {message && <p className="message">{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default PatientLogin;
