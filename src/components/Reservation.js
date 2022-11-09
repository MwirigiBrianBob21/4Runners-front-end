import React from "react";

//import MenuList from "./MenuList";
//import About from "./About";


function Reservation (){
   return(
    <div className="reservations">
        <h1>Place your reservation here.</h1>
   <form>
    
    <input type='text' placeholder="full name"/>
    <input type='email' placeholder="enter your email"/>
    <input type='number' placeholder="enter your phone number"/>
    <input type='datetime-local' placeholder="enter time and date"/>
    <input type='number' placeholder="enter number of seats"/>
    <input type='submit' value="BOOK"/>
    
    
    
    

</form>
</div>

   ) 
}

export default Reservation;






