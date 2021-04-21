import React from 'react';
import Button from '../UI/Button';
//import foto from '../Assets/dreamdev.jpeg';
import './SideCard.css';

const SideCard = (props) => {

  return (
    <div className="sidecard">
      <div className="sidecard-content">
        {props.children}
        <h2>{props.about}</h2>
        <p className="bio-p">{props.summary}</p>
        <Button value="Leer más" />
      </div>
    </div>
  );
};

export default SideCard;
