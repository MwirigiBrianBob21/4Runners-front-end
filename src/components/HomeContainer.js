import React from 'react'
import About from './About';
function HomeContainer() {
  return (
    <div id='main'>
        <div className='header-heading'>
            <h3>It's A Great Time To Feast</h3>
            <h1><span>WHAT WE HAVE</span> FOR<br/> YOU</h1>
            <p className='details'>You will always come back at 4Runners-Bistro. Enjoy</p>
            <div className='header-btns'>
              <a href='#' className='header-btn'>Order</a>
            </div>
            <div>
                <About/>
                </div>
        </div>
    </div>
  )
}
export default HomeContainer;