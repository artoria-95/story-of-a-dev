import React from "react";
import Button from "../UI/Button";
import "./DrawingCard.css";

const DrawingCard = (props) => {
  return (
    <div className="drawing-wrapper">
      <img src={props.photo} alt="drawing" className="dibujo" />
      <div className="drawing-txt">
        <h2>{props.name} <Button value="Ver" /></h2>                
      </div>
    </div>
  );
};

export default DrawingCard;
