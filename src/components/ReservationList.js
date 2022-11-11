import React from "react";



function ReservationList({ reservation }) {
    const { id, name, email, phone_number, seats, time} = reservation


    return(
        <div className="comments-div">
            <div key={id} className="comments-list">
                <h3> {name}</h3>
                <p><span>Email:</span> {email}</p>
                <p><span>Phone-number:</span> {phone_number}</p>
                <p><span>Seats:</span> {seats}</p>
                <p><span>Time:</span> {time}</p>


            </div>
        </div>
    )
}

export default ReservationList;