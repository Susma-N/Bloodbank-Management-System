import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PatientDetails.css';

const PatientDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const { savedPatient, message } = state || {};

  if (!savedPatient) {
    return (
      <div className="patient-details">
        <div className="details-container">
          <h1>Patient Details</h1>
          <p>No details available. Please make sure you have submitted the form correctly.</p>
          <button onClick={() => navigate('/')}>Go Back</button>
        </div>
      </div>
    );
  }

  // Simulate file URLs for demonstration purposes
  const aadharFileURL = savedPatient.aadharFile !== 'No file uploaded' ? `/path/to/files/${savedPatient.aadharFile}` : null;
  const receiptFileURL = savedPatient.receiptFile !== 'No file uploaded' ? `/path/to/files/${savedPatient.receiptFile}` : null;

  return (
    <div className="patient-details">
      <div className="details-container">
        <h1>Patient Details</h1>
        {message && <p className="message">{message}</p>}
        <div className="details">
          <p><strong>Name:</strong> {savedPatient.name}</p>
          <p><strong>Age:</strong> {savedPatient.age}</p>
          <p><strong>Address:</strong> {savedPatient.address}</p>
          <p><strong>Phone:</strong> {savedPatient.phone}</p>
          <p><strong>Blood Type:</strong> {savedPatient.bloodType}</p>
          <p><strong>Location:</strong> {savedPatient.location}</p>
          <p><strong>Medical Information:</strong> {savedPatient.medicalInfo}</p>
          <p><strong>Additional Information:</strong> {savedPatient.additionalInfo}</p>
          {aadharFileURL && <p><strong>Aadhar File:</strong> <a href={aadharFileURL} target="_blank" rel="noopener noreferrer">View File</a></p>}
          {receiptFileURL && <p><strong>Receipt File:</strong> <a href={receiptFileURL} target="_blank" rel="noopener noreferrer">View File</a></p>}
        </div>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    </div>
  );
}

export default PatientDetails;
