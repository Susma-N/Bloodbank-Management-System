import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import './Header.css';
import logoImage from '../assets/logo.png';

const Header = ({ user, onLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getUsername = (email) => {
    const [username] = email.split('@');
    return username;
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logoImage} alt="DonateRed Logo" className="logo-image" />
        <div className="logo-text">DonateRed</div>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/info">Info</Link></li>
          {user ? (
            <li className="user-info">
              <Avatar alt={user.firstName} src="/static/images/avatar/1.jpg" onClick={handleClick} style={{ cursor: 'pointer' }} />
              <span onClick={handleClick} style={{ cursor: 'pointer' }}>{getUsername(user.email)}</span>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>
                  <IconButton color="inherit" onClick={() => { handleClose(); onLogout(); }}>
                    <LogoutIcon />
                  </IconButton>
                  Logout
                </MenuItem>
              </Menu>
            </li>
          ) : (
            <li><Link to="/login-choice">Login</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
