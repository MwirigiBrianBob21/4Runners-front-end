import React from "react";



function ReservationList({ reservation, onDeleteItem }) {
    const { id, name, email, phone_number, seats, time} = reservation

    function handleDeleteClick() {
        fetch(`http://localhost:9292/customers/reservations/${reservation.id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => onDeleteItem(reservation));
      }


      
    return(
        <div className="comments-div">
            <div key={id} className="comments-list">
                <h3> {name}</h3>
                <p><span>Email:</span> {email}</p>
                <p><span>Phone-number:</span> {phone_number}</p>
                <p><span>Seats:</span> {seats}</p>
                <p><span>Time:</span> {time}</p>
                <button className="remove" onClick={handleDeleteClick}>Delete</button>
                <br />
                {/* <button className="remove"  onClick={handleAddToCartClick}>
                Update
                </button> */}




            </div>
        </div>
    )
}

export default ReservationList;