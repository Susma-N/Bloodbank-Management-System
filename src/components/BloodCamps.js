import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BloodCamps.css';

const BloodCamps = () => {
  const navigate = useNavigate();
  const [visibleCamps, setVisibleCamps] = useState([]);

  const camps = [
    {
      id: 1,
      name: 'City Hospital Blood Donation Camp',
      date: '2024-08-20',
      location: 'City Hospital, Coimbatore',
      details: 'Join us for a blood donation camp at City Hospital. Your donation can save lives!',
    },
    {
      id: 2,
      name: 'Community Center Blood Drive',
      date: '2024-08-25',
      location: 'Community Center, Coimbatore',
      details: 'Participate in our community blood drive and make a difference.',
    },
    {
      id: 3,
      name: 'Tech Park Blood Donation Camp',
      date: '2024-09-01',
      location: 'Tech Park, Chennai',
      details: 'Support your community by donating blood at our Tech Park drive!',
    },
    {
      id: 4,
      name: 'University Campus Blood Drive',
      date: '2024-09-05',
      location: 'University of Madras, Chennai',
      details: 'Students and faculty are welcome to donate and help save lives.',
    },
    {
      id: 5,
      name: 'Downtown Blood Drive',
      date: '2024-09-12',
      location: 'Downtown Mall, Bengaluru',
      details: 'A convenient location for everyone. Drop by and donate blood.',
    },
    {
      id: 6,
      name: 'Greenfield Hospital Blood Donation Camp',
      date: '2024-09-15',
      location: 'Greenfield Hospital, Hyderabad',
      details: 'Join us at Greenfield Hospital for our annual blood donation drive.',
    },
    {
      id: 7,
      name: 'Central Plaza Blood Drive',
      date: '2024-09-18',
      location: 'Central Plaza, Mumbai',
      details: 'Help save lives by donating blood at our Central Plaza blood drive.',
    },
    {
      id: 8,
      name: 'Metro Hospital Blood Donation Camp',
      date: '2024-09-20',
      location: 'Metro Hospital, Pune',
      details: 'Your blood donation can make a difference. Join us at Metro Hospital.',
    },
  ];

  useEffect(() => {
    camps.forEach((camp, index) => {
      setTimeout(() => {
        setVisibleCamps((prevVisibleCamps) => [...prevVisibleCamps, camp]);
      }, index * 1000); // Delay of 1 second for each camp
    });
  }, []);

  const handleLearnMore = (id) => {
    navigate(`/blood-camps/${id}`);
  };

  return (
    <div className="blood-camps-container">
      <video className="background-video" autoPlay loop muted>
        <source src="https://cdn.pixabay.com/video/2020/09/13/49815-458438877_tiny.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="blood-camps">
        <h2>Upcoming Blood Donation Camps</h2>
        <div className="camp-list">
          {visibleCamps.map((camp) => (
            <div key={camp.id} className="camp-card">
              <h3>{camp.name}</h3>
              <p><strong>Date:</strong> {camp.date}</p>
              <p><strong>Location:</strong> {camp.location}</p>
              <p>{camp.details}</p>
              <button onClick={() => handleLearnMore(camp.id)} className="learn-more-button">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BloodCamps;