
import React, {useState, useEffect} from 'react'
//import About from './About'
//import Menu from './Menu'
//import MenuList from './MenuList'
import {useNavigate} from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    
    navigate('/SignUp');
  };
  return (
    <div id='main'>
          <div>
  <button className='sign-button' onClick={navigateToSignUp }>SignUp</button>
</div>
        <div className='header-heading'>
            <h3>It's A Great Time To Feast</h3>
            <h1><span>WHAT WE HAVE</span> FOR<br/> YOU</h1>
            <p className='details'>You will always come back at 4Runners-Bistro. Enjoy</p>
           
        </div><br/><br/>
    </div>
  )
}
export default Home