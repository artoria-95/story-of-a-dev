import React from 'react';
import Button from '../UI/Button';

const DrawingCard = (props)=>{
return (
    <div className="drawing-wrapper">
        <img src={props.photo} />
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <Button value="Ver" />
    </div>
)
};

export default DrawingCard;