import React from "react";

//import MenuList from "./MenuList";
//import About from "./About";





function Reservation ({onAddMessage}){
   const [body, setBody] = useState("");

   function handleSubmit(e) {
      e.preventDefault();
   
      fetch("http://localhost:9292/customers/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: currentUser.username,
          body: body,
        }),
      })
        .then((r) => r.json())
        .then((newMessage) => {
          onAddMessage(newMessage);
          setBody("");
        });
    }
   
   
   
   return(
 <div className="form-container">

         <h1>Place your reservation here.</h1>

   <form className="reservations" onSubmit={handleSubmit}>
   <label for="fullname">Full Name</label>
    <input type='text' placeholder="full name" onChange={(e) => setBody(e.target.value)}/><br/>
    <label for="email">Email</label>
    <input type='email' placeholder="enter your email" onChange={(e) => setBody(e.target.value)}/><br/>
    <label for="number">Phone Number</label>
    <input type='number' placeholder="enter your phone number" onChange={(e) => setBody(e.target.value)}/><br/>
    <label for="datetime">Date-Time</label>
    <input type='datetime-local' placeholder="enter time and date"  onChange={(e) => setBody(e.target.value)}/><br/>
    <label for="sits">Number of Seats</label>
    <input type='number' placeholder="enter number of seats" onChange={(e) => setBody(e.target.value)}/><br/>
    

    <div className="buttons">
    <button type="submit">Book Reservation</button>
    <button type="submit">Cancel</button>
    </div>
</form>

</div>

   ) 
}

export default Reservation;






