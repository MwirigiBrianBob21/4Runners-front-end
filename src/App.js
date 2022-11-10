import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import HomeContainer from './components/HomeContainer';
import About from './components/About';
import Reservation from './components/Reservation';


function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/customers/reservations")
      .then((r) => r.json())
      .then((messages) => setMessages(messages));
  }, []);

  function handleAddMessage(newMessage) {
    setMessages([...messages, newMessage]);
  }

  function handleDeleteMessage(id) {
    const updatedMessages = messages.filter((message) => message.id !== id);
    setMessages(updatedMessages);
  return (
    <div>
    <Router>
      <div>
         <NavBar/>
      </div>
      
        <Routes>
          <Route exact path="/" element={<HomeContainer/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/MessageList" messages={displayedMssages}
          onMessageDelete={handleDeleteMessage}
          onUpdateMessage={handleUpdateMessage} 
          element={<ReservationList/>}></Route>
          <Route exact path="/reservation" 
          onAddMessage={handleAddMessage} element={<Reservation/>}></Route>
         
        </Routes>
    </Router>
  </div>
  );
}


export default App
