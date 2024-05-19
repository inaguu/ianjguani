// Styles
import './App.css';

import { ToastContainer } from 'react-toastify';

import React from 'react'; // Add import statement for React

// Dependencies
import { Route, Routes } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import EducationPage from './pages/EducationPage'
import ResumePage from './pages/ResumePage'
import ContactPage from './pages/ContactPage'

// Components

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
