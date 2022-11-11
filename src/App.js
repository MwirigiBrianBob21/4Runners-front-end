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
import MenuCard from "./components/MenuCard";


function App() {
  const [loading, setLoading] = useState(false);

  // const [menu, setMenu] = useState([]);
  // const [filteredMenu, setFilteredMenu] = useState([]);
  // const [favMenu, setFavMenu] = useState([]);

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
      <Route path="/" element={<Home/>}></Route>
      <Route path="about" element={<About/>}></Route>
      <Route path="reservation" element={<Reservation/>}></Route>
      
      <Route path="menu" element={<Menu/>}>
        <Route path=":id" element={<MenuCard/>}/>
      </Route>

     
      <Route path="/signin" element={<SignIn changeUser={changeUser} />} />
      <Route path="/signup" element={<SignUp />} />     
      </Routes>
      </Router>
      </div>
    }

{/* export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/route-a">Route A</Link>
          <Link to="/route-b">Route B</Link>
          <Link to="/route-a/1">Nested Route A1</Link>
          <Link to="/route-a/2">Nested Route A2</Link>
          <Link to="/route-b/1">Nested Route B1</Link>
          <Link to="/route-b/2">Nested Route B2</Link>
        </nav>

        <Routes>
          <Route
            path="/route-b"
            element={<MyComponent title="Nested Route" />}
          />
          <Route
            path="/route-a"
            element={<MyComponent title="Nested Route" />}
          />
          <Route
            path="/route-b/:id"
            element={<MyComponent title="Nested Route" />}
          />
          <Route
            path="/route-a/:id"
            element={<MyComponent title="Nested Route" />}
          />
          <Route path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
} */}
 


  </div>
  )}
  export default App;

 


