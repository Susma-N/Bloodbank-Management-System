import React, { useState } from 'react';
import './Nearest.css';
import axios from 'axios';

const states = ['Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'West Bengal', 'Uttar Pradesh', 'Gujarat', 'Punjab', 'Rajasthan', 'Haryana'];
const districts = {
  'Maharashtra': ['Mumbai', 'Pune'],
  'Delhi': ['New Delhi', 'Old Delhi'],
  'Karnataka': ['Bangalore', 'Mysore'],
  'Tamil Nadu': ['Chennai', 'Coimbatore'],
  'West Bengal': ['Kolkata', 'Howrah'],
  'Uttar Pradesh': ['Lucknow', 'Kanpur'],
  'Gujarat': ['Ahmedabad', 'Surat'],
  'Punjab': ['Chandigarh', 'Amritsar'],
  'Rajasthan': ['Jaipur', 'Udaipur'],
  'Haryana': ['Gurugram', 'Faridabad']
};

const Nearest = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [results, setResults] = useState([]);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedDistrict(''); 
  };

  const handleSearch = () => {
    axios.get('http://localhost:8080/api/blood-banks/search', {
      params: {
        state: selectedState,
        district: selectedDistrict
      }
    })
    .then(response => {
      setResults(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  };

  return (
    <div className="background-wrapper">
      <div className="nearest-container">
        <h1>Find Nearest Blood Banks</h1>
        <div className="search-form">
          <label htmlFor="state">Select State:</label>
          <select
            id="state"
            value={selectedState}
            onChange={handleStateChange}
          >
            <option value="">--Select State--</option>
            {states.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>

          <label htmlFor="district">Select District:</label>
          <select
            id="district"
            value={selectedDistrict}
            onChange={e => setSelectedDistrict(e.target.value)}
            disabled={!selectedState}
          >
            <option value="">--Select District--</option>
            {selectedState && districts[selectedState].map(district => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>

          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="results-container">
          {results.length === 0 ? (
            <div className="no-results">No results found</div>
          ) : (
            results.map(result => (
              <div key={result.id} className="result-card">
                <img src={result.imageUrl} alt={result.name} className="result-image" />
                <div className="result-info">
                  <h3>{result.name}</h3>
                  <p><strong>S.No:</strong> {result.id}</p>
                  <p><strong>Blood Group:</strong> {result.bloodGroup}</p>
                  <p><strong>Component:</strong> {result.component}</p>
                  <p><strong>Availability:</strong> {result.availability}</p>
                  <p><strong>Type:</strong> {result.type}</p>
                  <p><strong>Address:</strong> {result.address}</p>
                  <p><strong>Contact:</strong> {result.contactNumber}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Nearest;
