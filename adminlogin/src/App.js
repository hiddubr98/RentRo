import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Dashboard from './Screens/Dashboard';
import Profile from './Screens/Profile';
import Sidebar from './Screens/Sidebar';
import Orders from './Screens/Orders';
import Header from './Screens/Header';

const App = () => {
  return (
    <Router>
      <div style={styles.container}>
        <Sidebar />
        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </Router>
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
    padding: '10px 0',
    textDecoration: 'none',
    borderBottom: '1px solid #34495e',
  },
  navItemActive: {
    display: 'block',
    color: '#2c3e50',
    backgroundColor: '#ecf0f1',
    padding: '10px 0',
    textDecoration: 'none',
    borderBottom: '1px solid #34495e',
  },
  content: {
    marginLeft: '250px', 
    padding: '20px',
    flex: 1,
    overflowY: 'auto', 
    backgroundColor: '#ffffff', 
  },
  header: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  dashboardContainer: {
    display: 'flex',
  },
  leftPanel: {
    flex: 1,
    marginRight: '20px',
  },
  rightPanel: {
    flex: 2,
  },
  panel: {
    backgroundColor: '#ecf0f1',
    padding: '20px',
    borderRadius: '5px',
    marginBottom: '20px',
  },
  chartPlaceholder: {
    height: '200px',
    backgroundColor: '#bdc3c7',
    textAlign: 'center',
    lineHeight: '200px',
  },
  profile: {
    padding: '20px',
  },
};

export default App;
