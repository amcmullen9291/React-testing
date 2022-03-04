import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Roster from './Components/Roster'
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Roster/>} />
      </Routes>
    </Router>  );
}

export default App;
