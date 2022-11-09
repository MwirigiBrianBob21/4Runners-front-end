import React from 'react'

function Menubox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image} alt=''/>
        </div>

        <div className='a-b-text'>
            {/* food name */}
            <h2>{props.title}</h2>
            
            <button className='productbox-button'>Place Your Order</button>
        </div>
        <div>
            {/* price */}
        </div>
        <div>
            {/* {availabilty ? <span><img></img></span> : } */}
        </div>

    </div>
  )
}

export default Menubox