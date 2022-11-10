
// import React, {useState, useEffect} from 'react'
import About from './About'
// import Menu from './Menu'
// import MenuList from './MenuList'
import {Link, useNavigate} from 'react-router-dom';
function Home() {

  return (
    <div id='main'>
    
        <div className='header-heading'>
            {/* <h3>It's A Great Time To Feast</h3> */}
            <h1><span>ITS A GREAT TIME</span> TO<br/> FEAST</h1>
           
        </div><br/><br/>
<div  className='about'>
  <About/>
</div>
        <div>
         <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                
                    <div class="col item social">
                      <i class="fa fa-facebook-f"></i>
                    <i class="icon ion-social-twitter"></i>
                  <i class="icon ion-social-snapchat"></i>
                  <i class="icon ion-social-instagram"></i></div>
                </div>
                <p class="copyright">4Runners Bistro © 2022</p>
            </div>
        </footer>
    </div>  
      </div>
    </div>
  )
}
export default Home