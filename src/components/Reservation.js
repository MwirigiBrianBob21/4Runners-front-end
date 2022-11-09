import React from "react";

//import MenuList from "./MenuList";
//import About from "./About";


function Reservation (){
   return(
      <div className="form-container">

         <h1>Place your reservation here.</h1>

   
      
   

   
   <form className="reservations">
    <input type='text' placeholder="full name"/><br/>
    <input type='email' placeholder="enter your email"/><br/>
    <input type='number' placeholder="enter your phone number"/><br/>
    <input type='datetime-local' placeholder="enter time and date"/><br/>
    <input type='number' placeholder="enter number of seats"/><br/>
    

    <div className="buttons">
    <input type='submit' value="Book"/>
    
    
    </div>
</form>

</div>

   ) 
}

export default Reservation;






