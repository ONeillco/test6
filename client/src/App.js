import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import './App.css';
import Home from './components/Home';
import Nav from './components/navigation/Nav';
import Signup from './components/sessions/Signup';
import Login from './components/sessions/Login';
import Champions from './components/Champions';
import { UseProvider } from './components/context/user'
import EditChampion from './components/EditChampion';



function App() {
  return (
    <Router>
    <UseProvider>
    <div>

      <Nav />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/champions" element={<Champions />} />
      <Route exact path="/champions/edit" element={<EditChampion />} />
      {/* <Route exact path="/champions/:id" element={<Champions />} /> */}

      </Routes>
   
    </div>
    </UseProvider>
    </Router>
  );
}

export default App;
