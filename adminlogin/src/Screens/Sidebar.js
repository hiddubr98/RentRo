import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div style={styles.sidebar}>
      <div style={styles.profilePicContainer}>
        <AccountCircleRoundedIcon sx={{ fontSize: 60 }} />
      </div>
      <h2 style={styles.username}>Andrew Bennet</h2>
      <nav style={styles.nav}>
        <Link
          to="/"
          style={location.pathname === '/' ? styles.navItemActive : styles.navItem}
        >
          Dashboard
        </Link>
        <Link
          to="/profile"
          style={location.pathname === '/profile' ? styles.navItemActive : styles.navItem}
        >
          Profile
        </Link>
        <a href="/orders"  style={location.pathname === '/orders' ? styles.navItemActive : styles.navItem}>Orders</a>
        <a href="#agreements" style={styles.navItem}>Agreements</a>
        <a href="#annexures" style={styles.navItem}>Annexures</a>
        <a href="#products" style={styles.navItem}>Products</a>
        <a href="#invoices" style={styles.navItem}>Invoices</a>
        <a href="#accounts" style={styles.navItem}>Accounts</a>
        <a href="#services" style={styles.navItem}>Services</a>
        <a href="#support-tickets" style={styles.navItem}>Support Tickets</a>
        <a href="#users" style={styles.navItem}>Users</a>
        <a href="#global-setting" style={styles.navItem}>Global Setting</a>
      </nav>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    fontFamily: 'Arial, sans-serif',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#2c3e50', 
    color: '#ecf0f1',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed', 
    top: 0,
    left: 0,
    height: '100vh', 
    overflowY: 'auto', 
    zIndex: 9999, 
  },
  profilePicContainer: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  profilePic: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
  },
  username: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  nav: {
    listStyle: 'none',
    padding: 0,
    flexGrow: 1,
  },
  navItem: {
    display: 'block',
    color: '#ecf0f1',
    padding: '10px 10px',
    textDecoration: 'none',
    borderBottom: '1px solid #34495e',
  },
  navItemActive: {
    display: 'block',
    color: '#2c3e50',
    backgroundColor: '#ecf0f1',
    padding: '10px 10px',
    textDecoration: 'none',
    borderBottom: '1px solid #34495e',
  },
};

export default Sidebar;
