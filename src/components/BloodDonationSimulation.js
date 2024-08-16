import React, { useState } from 'react';
import './BloodDonationSimulation.css';

import simulationImage from '../assets/simulation.jpg';
import healthCheckImage from '../assets/simulation.jpg';
import bloodDonationImage from '../assets/simulation.jpg';
import restRefreshImage from '../assets/simulation.jpg';

const simulationSteps = [
  {
    id: 1,
    title: "Step 1: Register",
    description: "You will start by registering at the blood donation center.",
    image: simulationImage
  },
  {
    id: 2,
    title: "Step 2: Health Check",
    description: "A brief health check will be conducted to ensure you are fit to donate.",
    image: healthCheckImage
  },
  {
    id: 3,
    title: "Step 3: Blood Donation",
    description: "Blood will be drawn from your arm. The process usually takes about 10 minutes.",
    image: bloodDonationImage
  },
  {
    id: 4,
    title: "Step 4: Rest and Refresh",
    description: "After donating, you will rest for a few minutes and have some refreshments.",
    image: restRefreshImage
  }
];

const firstVideoId = 'Yxql1GVPJVk';
const secondVideoId = 'ezafVzfJw60';

const BloodDonationSimulation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState('first');

  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, simulationSteps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleVideoChange = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="simulation-container">
      <h2 className="title">Blood Donation Simulation</h2>
      <div className="simulation-content">
        <div className="simulation-step">
          <img src={simulationSteps[currentStep].image} alt={simulationSteps[currentStep].title} />
          <h3>{simulationSteps[currentStep].title}</h3>
          <p>{simulationSteps[currentStep].description}</p>
        </div>
        <div className="simulation-controls">
          <button onClick={prevStep} disabled={currentStep === 0}>Previous</button>
          <button onClick={nextStep} disabled={currentStep === simulationSteps.length - 1}>Next</button>
        </div>
        <div className="video-tabs">
          <button onClick={() => handleVideoChange('first')} className={selectedVideo === 'first' ? 'active' : ''}>Video 1</button>
          <button onClick={() => handleVideoChange('second')} className={selectedVideo === 'second' ? 'active' : ''}>Video 2</button>
        </div>
        <div className="video-container">
          <h3>Watch This Video for More Information</h3>
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${selectedVideo === 'first' ? firstVideoId : secondVideoId}`}
            title="Blood Donation Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BloodDonationSimulation;
