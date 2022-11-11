import React, {useState}from "react";
import { useNavigate } from 'react-router-dom'

//import MenuList from "./MenuList";
//import About from "./About";


function Reservation ({addReservation}){
   const [reservationForm, setReservationForm] = useState({
   name:'',
   email:'',
    phone_number:'',
    seats: '',
   time:''
  });



   function handleChanges(e) {
      setReservationForm({...reservationForm, [e.target.name]:e.target.value})
  }
  function handleSubmit(e) {
   e.preventDefault()
   fetch("http://localhost:9292/reservations", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({
      name: reservationForm.name,
      email:reservationForm.email,
       phone_number:reservationForm.phone_number,
       seats: reservationForm.seats,
      time:reservationForm.time,
     }),
   })
     .then((res) => res.json())
     .then((reservation) => {
       addReservation(reservation);
       setReservationForm({ ...reservationForm, name: "", email: "", phone_number: "", seats:"", time:"" });
     });
   
}


const nav = useNavigate()
// console.log(nav)
const navigateToViewReservation = () => {
  nav('/ViewReservation');
};


   // const navigate = useNavigate()
   // navigate('/signin')
   // navigate('signup')


   return(
 <div className="form-container">

         <h1>Place your reservation here.</h1>

   <form onSubmit={handleSubmit}  className="reservations">
   <label for="fullname">Full Name</label>
    <input type='text' onChange={handleChanges}  value={reservationForm.name}
 name="name"placeholder="full name"/><br/>
    <label for="email">Email</label>
    <input type='email' onChange={handleChanges}  value={reservationForm.email} name="email" placeholder="enter your email"/><br/>
    <label for="number">Phone Number</label>
    <input type='number' onChange={handleChanges}  value={reservationForm.phone_number}  name="phone_number" placeholder="enter your phone number"/><br/>
    <label for="seats">Number of Seats</label>
    <input type='number' onChange={handleChanges}  value={reservationForm.seats}  name="seats" placeholder="enter number of seats"/><br/>
    <label for="datetime">Date-Time</label>
    <input type='datetime-local' onChange={handleChanges}  value={reservationForm.time}  name="time" placeholder="enter time and date"/><br/>
   
    

    <div className="buttons">
    <button type="submit">Book Reservation</button>
    {/* <button onClick={navigateToViewReservation} type="submit">View Reservation</button> */}
    </div>
</form>
<div className="view-button">
<button onClick={navigateToViewReservation} type="submit">View Reservation</button>
</div>

</div>

   ) 
}


export default Reservation;


