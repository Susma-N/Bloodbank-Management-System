import React, { useState } from 'react';
import './Availability.css';
import { FaSearch, FaSpinner } from 'react-icons/fa';
import axios from 'axios';

const states = ['Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'West Bengal', 'Uttar Pradesh', 'Gujarat', 'Punjab', 'Rajasthan', 'Haryana'];
const districts = ['Mumbai', 'New Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Lucknow', 'Ahmedabad', 'Chandigarh', 'Jaipur', 'Gurugram'];
const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

const Availability = () => {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [isGovernmentHospital, setIsGovernmentHospital] = useState(false);
  const [isPrivateHospital, setIsPrivateHospital] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = () => {
    setLoading(true);
    setError('');

    axios.get('http://localhost:8080/api/blood-availability/search', {
      params: {
        state,
        district,
        bloodGroup,
        isGovernmentHospital,
        isPrivateHospital,
      },
    })
    .then(response => {
      if (Array.isArray(response.data)) {
        setData(response.data);
      } else {
        console.error('Unexpected data format:', response.data);
        setError('Unexpected data format');
      }
    })
    .catch(err => {
      console.error('Error fetching data:', err.response ? err.response.data : err.message);
      setError('Failed to fetch data');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className="availability-background">
      <div className="availability-container">
        <h1 className="title">Check Blood Availability</h1>
        <div className="form-container">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="state">State</label>
              <select id="state" value={state} onChange={(e) => setState(e.target.value)} className="form-select">
                <option value="">Select State</option>
                {states.map((s, index) => (
                  <option key={index} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="district">District</label>
              <select id="district" value={district} onChange={(e) => setDistrict(e.target.value)} className="form-select">
                <option value="">Select District</option>
                {districts.map((d, index) => (
                  <option key={index} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="bloodGroup">Blood Group</label>
              <select id="bloodGroup" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} className="form-select">
                <option value="">Select Blood Group</option>
                {bloodGroups.map((bg, index) => (
                  <option key={index} value={bg}>{bg}</option>
                ))}
              </select>
            </div>

            <div className="form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={isGovernmentHospital}
                  onChange={(e) => setIsGovernmentHospital(e.target.checked)}
                  className="form-checkbox"
                />
                Government Hospitals
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={isPrivateHospital}
                  onChange={(e) => setIsPrivateHospital(e.target.checked)}
                  className="form-checkbox"
                />
                Private Hospitals
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={!isGovernmentHospital && !isPrivateHospital}
                  onChange={() => {
                    setIsGovernmentHospital(false);
                    setIsPrivateHospital(false);
                  }}
                  className="form-checkbox"
                />
                Both
              </label>
            </div>
          </div>

          <button onClick={handleSearch} disabled={loading} className="search-button">
            {loading ? <FaSpinner className="spinner" /> : <FaSearch />} Search
          </button>
          {error && <p className="error-message">{error}</p>}
        </div>

        <div className={`results-container ${loading ? 'loading' : ''}`}>
          {loading ? (
            <div className="loading-spinner"></div>
          ) : (
            <div className="results-cards">
              {data.length > 0 ? (
                data.map((item) => (
                  <div key={item.id} className="result-card">
                    <img src={item.imageUrl} alt={item.name} className="result-image" />
                    <div className="result-info">
                      <div className="result-header">
                        <h3>{item.name}</h3>
                        <span className={`availability-status ${item.availability.toLowerCase().replace(' ', '-')}`}>
                          {item.availability}
                        </span>
                      </div>
                      <p><strong>Blood Group:</strong> {item.bloodGroup}</p>
                      <p><strong>Component:</strong> {item.component}</p>
                      <p><strong>Hospital Type:</strong> {item.type}</p>
                      <p><strong>State:</strong> {item.state}</p>
                      <p><strong>District:</strong> {item.district}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-data">No data available</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Availability;
