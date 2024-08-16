import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './DonorLogin.css';

const DonorLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:8080/api/donors/login', {
        email,
        password
      });

      onLogin(response.data); // Pass user data to parent component or store it
      navigate('/blood-donation');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPasswordSubmit = async (event) => {
    event.preventDefault();
    setResetLoading(true);
    setError('');

    try {
      await axios.post('http://localhost:8080/api/forgot-password', {
        mobile
      });

      setOtpSent(true);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send OTP');
    } finally {
      setResetLoading(false);
    }
  };

  const handleOtpSubmit = async (event) => {
    event.preventDefault();
    setResetLoading(true);
    setError('');

    try {
      await axios.post('http://localhost:8080/api/verify-otp', {
        otp
      });

      navigate('/reset-password');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid OTP');
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <div className="donor-login">
      <h1>Donor Login</h1>
      {!showForgotPassword ? (
        <form onSubmit={handleSubmit} className="login-form">
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <button
            type="button"
            className="forgot-password-btn"
            onClick={() => setShowForgotPassword(true)}
          >
            Forgot Password?
          </button>
          <button
            type="button"
            className="register-now-btn"
            onClick={() => navigate('/signup')}
          >
            Don't have an account? Register Now
          </button>
        </form>
      ) : (
        <div className="forgot-password-form">
          {!otpSent ? (
            <form onSubmit={handleForgotPasswordSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="mobile">Registered Mobile Number</label>
                <input
                  type="text"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              {error && <p className="error-message">{error}</p>}
              <button type="submit" disabled={resetLoading} className="submit-btn">
                {resetLoading ? 'Sending OTP...' : 'Send OTP'}
              </button>
              <button
                type="button"
                className="back-to-login-btn"
                onClick={() => setShowForgotPassword(false)}
              >
                Back to Login
              </button>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="otp">Enter OTP</label>
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>
              {error && <p className="error-message">{error}</p>}
              <button type="submit" disabled={resetLoading} className="submit-btn">
                {resetLoading ? 'Verifying OTP...' : 'Verify OTP'}
              </button>
              <button
                type="button"
                className="back-to-login-btn"
                onClick={() => setShowForgotPassword(false)}
              >
                Back to Login
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default DonorLogin;
