import React from 'react';
import "./Row.scss";
import Card from "../Card/Card";

const Row = ({title, arr = [{
    img: "https://marketplace.canva.com/EAFH3gODxw4/1/0/1131w/canva-black-%26-white-modern-mystery-forest-movie-poster-rLty9dwhGG4.jpg"
}]}) => {


  return (
    <div className='row'>
      <h2>{title}</h2>
     
       <div>
           
           {
              arr.map((item) => (
                <Card img={item.img} />
            ))
            
            }
          
       </div>
    </div>
  )
}

export default Row;
