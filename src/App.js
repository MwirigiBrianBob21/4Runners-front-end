import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Reservation from './components/Reservation';
import PacManLoader from 'react-spinners/PacmanLoader';
import SignUp from './components/SignUp';
import SignIn from './components/signIn';



function App() {
  const [loading, setLoading] = useState(false);

  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [favMenu, setFavMenu] = useState([]);

  const override = {
    display: "block",
    borderColor: "red",
    marginTop: "20%",
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const [currentUser, setCurrentUser] = useState(null)
  const changeUser = (user) => {
    setCurrentUser(user)
  }

  return (

    <div className='App'>
  {
      loading ? <PacManLoader color={'#bf2222'} loading={loading} cssOverride={override} size={30}/>
      :
      <div>
        <Router>
          <div>
      <Navbar/>
      </div>
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>
      <Route exact path="/reservation" element={<Reservation/>}></Route>
      <Route exact path="/menu" element={<Menu/>}></Route> 
      <Route exact path="/signin" element={<SignIn changeUser={changeUser} />} />
      <Route exact path="/signup" element={<SignUp />} />     
      </Routes>
      </Router>
      </div>
    }

  </div>
  export default App;

 


