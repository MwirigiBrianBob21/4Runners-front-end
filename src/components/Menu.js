import React from 'react'
import Menubox from './MenuBox';
import pimage1 from '../images/s1.png'
import pimage2 from '../images/s2.png'
import { useEffect, useState } from 'react';


function Menu() {
    const[menus, setMenus]= useState([])
    
    useEffect(() => {
      fetch('http://localhost:9292/menus')
      .then(res => res.json())
      .then((menus) => setMenus(menus))
    },[menus]);





  return (
    <div id='products'>
        <h1>CHOOSE & SMILE</h1>
        
      <p>Lorem ipsum dolor sit amet. Sed alias fugiat sit consequatur sunt qui nemo porro ut possimus quia hic ipsum velit est voluptates explicabo. Ab similique omnis 33 voluptatem sequi sed obcaecati accusamus et delectus nostrum et perferendis ratione cum provident unde. </p>
      {menus.map(menu => {
return(
        <div className='a-container'>

            <Menubox image={menu.image} title={menu.food}/>
            {/* <Menubox image={menu.image} title="Le Pigeon Burger"/> */}
            {/* <Menubox image={pimage1} title="Luger Burger"/> */}


        </div>
 )
        })} 
    </div>
  )
}


export default Menu;