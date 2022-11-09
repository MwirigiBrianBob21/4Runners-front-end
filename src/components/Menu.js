import React from 'react'
import Menubox from './MenuBox';
import pimage1 from '../images/s1.png'
import pimage2 from '../images/s2.png'


function Menu() {
  return (
    <div id='products'>
        <h1>CHOOSE & SMILE</h1>
        <p>Lorem ipsum dolor sit amet. Sed alias fugiat sit consequatur sunt qui nemo porro ut possimus quia hic ipsum velit est voluptates explicabo. Ab similique omnis 33 voluptatem sequi sed obcaecati accusamus et delectus nostrum et perferendis ratione cum provident unde. </p>
        <div className='a-container'>
            <Menubox image={pimage1} title="Luger Burger"/>
            <Menubox image={pimage2} title="Le Pigeon Burger"/>
            <Menubox image={pimage1} title="Luger Burger"/>


        </div>
    </div>
  )
}

export default Menu