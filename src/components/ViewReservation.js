import React,{useState, useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom'
import Reservation from "./Reservation";
import ReservationList from "./ReservationList";


 function ViewReservation(){
   const [reservations, setReservation] = useState([]);

   function addReservation(newReservation) {
      setReservation([...reservations, newReservation]);
  }
  useEffect(() => {
   fetch(`http://localhost:9292/reservations`)
   .then((res) => res.json())
   .then((reservations) => setReservation(reservations))
}, [])

const reservationList = reservations.map((reservation) => {

   return <ReservationList key= {reservation.id} reservation={reservation}/>
 });



  return(
   <div>
      
<div>{addReservation} </div><br/><br/><br/><br/>

<div> {reservationList} </div>

      </div>
  );
    

 }

 export default ViewReservation