import React from 'react';
import "../styles/Card.css" 

const Card = (props) => {
  return (
    <div className='card'>
        <h4 className="font-monospace headfont">{props.heading}</h4>
        <p className='para'>{props.content}</p>
    </div>
  )
}

export default Card