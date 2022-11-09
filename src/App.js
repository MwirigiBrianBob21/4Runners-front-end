import React, {useState, useEffect} from 'react';
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import './App.css';
import "./App.css";
import Navbar from './components/Navbar';
// import {css} from "@emotion/react";
import Home from './components/Home'
import Menu from './components/Menu';
import About from './components/About';
import PacManLoader from 'react-spinners/PacmanLoader';


function App() {

  const[loading, setLoading] = useState(false);
  const override ={
  display:"block",
  borderColor:"red",
  marginTop:"20%"
  };

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div className='App'>
  {
      loading ? <PacManLoader color={'#bf2222'} loading={loading} cssOverride={override} size={30}/>
      :
      <>
      <Navbar/>
      <Home/>
      <Menu/>
      <About/>
      </>
    }
  </div>
  );
}

export default App;
