// Styles
import './App.css';

import { ToastContainer } from 'react-toastify';

import React from 'react'; // Add import statement for React

// Dependencies
import { Route, Routes } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';

// Components

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
