import React from "react";

//import MenuList from "./MenuList";
//import About from "./About";


function Reservation (){
   return(
 <div className="form-container">

         <h1>Place your reservation here.</h1>

   <form className="reservations">
   <label for="fullname">Full Name</label>
    <input type='text' placeholder="full name"/><br/>
    <label for="email">Email</label>
    <input type='email' placeholder="enter your email"/><br/>
    <label for="number">Phone Number</label>
    <input type='number' placeholder="enter your phone number"/><br/>
    <label for="datetime">Date-Time</label>
    <input type='datetime-local' placeholder="enter time and date"/><br/>
    <label for="sits">Number of Sits</label>
    <input type='number' placeholder="enter number of sits"/><br/>
    

    <div className="buttons">
    <button type="submit">Book Reservation</button>
    <button type="submit">Cancel</button>
    </div>
</form>

</div>

   ) 
}

export default Reservation;






