import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'


//import MenuList from "./MenuList";
//import About from "./About";


function Reservation ({onAddMessage}){
  
  const {reservation,setReservation}=useState({
    name:'',
    email:'',
    phone_number:'',
    time:'',
    seats:''
    
        
  })
   const navigate = useNavigate()
   navigate('/signin')
   navigate('/signup')
   

  const navigateToViewReservations = () =>{
    navigate('/viewreservations');
  };


 function handleSubmit(e){
   e.preventDefault();
   fetch("http://localhost:9292/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
     },
      body: JSON.stringify({
        name:'',
        email:'',
        phone_number:'',
        time:'',
        seats:''
        



     }),
    })
      .then((r) => r.json())
      .then((newMessage) => {
        onAddMessage(newMessage);
        
      });
 }

  const handleChange = (e) => {
    setReservation({
        ...reservation,
        [e.target.name] : e.target.value
   })
}


  
   return(
 <div className="form-container">

         <h1>Place your reservation here.</h1>

   <form className="reservations">
   <label for="fullname">Full Name</label>
    <input type='text' name='name' placeholder="full name" value={reservation.name} onChange={handleChange}/><br/>
    <label for="email">Email</label>
    <input type='email' name='email' placeholder="enter your email" value={reservation.email} onChange={handleChange}/><br/>
    <label for="number">Phone Number</label>
    <input type='number'name='number' placeholder="enter your phone number" value={reservation.phone_number} onChange={handleChange}/><br/>
    <label for="datetime">Date-Time</label>
    <input type='datetime-local'name='date' placeholder="enter time and date" value={reservation.date} onChange={handleChange}/><br/>
    <label for="seats" >Number of Seats</label>
    <input type='number' name='seats' placeholder="enter number of seats" value={reservation.seats} onChange={handleChange}/><br/>
    

    <div className="buttons">
    <button type="submit" onClick={handleSubmit}>Book Reservation</button>
    <button type="submit" onClick={navigateToViewReservations}>View Reservation</button>
    </div>
</form>

</div>

   ) 
}

export default Reservation






