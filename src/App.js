import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import HomeContainer from './components/HomeContainer';
import About from './components/About';
import Reservation from './components/Reservation';

function App() {
  return (
    <div>
    <Router>
      <div>
         <NavBar/>
      </div>
      
        <Routes>
          <Route exact path="/" element={<HomeContainer/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/reservation" element={<Reservation/>}></Route>
         
        </Routes>
    </Router>
  </div>
  );
}

export default App;
