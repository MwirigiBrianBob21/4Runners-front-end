
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

function handleDeleteItem(deletedItem) {
   const updatedReservations = reservations.filter((reservation) => reservation.id !== deletedItem.id);
   setReservation(updatedReservations);
 }

 function handleUpdateItem(updatedItem) {
   const updatedItems = reservations.map((reservation) => {
      if (reservation.id === updatedItem.id) {
        return updatedItem;
      } else {
        return reservation;
      }
    });
    setReservation(updatedItems);
  }



const reservationList = reservations.map((reservation) => {

   return <ReservationList key= {reservation.id} reservation={reservation}  
   onDeleteItem={handleDeleteItem} onUpdateItem={handleUpdateItem}/>
 });



  return(
   <div>      
<div>{addReservation} </div><br/><br/><br/><br/>

<div> {reservationList} </div>


      </div>
  );
    

 }

 export default ViewReservation