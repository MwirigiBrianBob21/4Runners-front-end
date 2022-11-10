import React from 'react'
import Menubox from './MenuBox';
import pimage1 from '../images/s1.png'
import pimage2 from '../images/s2.png'
import { useEffect, useState } from 'react';

function Menu() {
  const [allMenu, setAllMenu] = useState([]); 

  useEffect(() => {
    fetch("http://localhost:9292/menus")
      .then((res) => res.json())
      .then((data) => setAllMenu(data));
  }, []);


  return (
    <div id="products">
      <h1>CHOOSE & SMILE</h1>
      <p>
        Lorem ipsum dolor sit amet. Sed alias fugiat sit consequatur sunt qui
        nemo porro ut possimus quia hic ipsum velit est voluptates explicabo. Ab
        similique omnis 33 voluptatem sequi sed obcaecati accusamus et delectus
        nostrum et perferendis ratione cum provident unde.{" "}
      </p>
      
      <div className="a-container">
      
      {allMenu.map((menu) => (
          <Menubox
            key={menu.id}
            image={menu.image}
            title={menu.food}
            availability={menu.availability}
          />
        
      ))}
      
      </div>

    </div>
  );
}

export default Menu;

