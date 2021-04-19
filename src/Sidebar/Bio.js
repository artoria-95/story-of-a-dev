import React from 'react';
import foto from '../Assets/dreamdev.jpeg';
import './card.css';

export default function Bio(){
    return (
        <div className="card">
            <div className="bio-content">
            
            <img src={foto} alt="ana" className="photo"/>
            <h2 className="bio-title">Sobre la autora</h2>
            <p className="bio-p">Estoy loca.</p>
            <button className="more">Leer más</button>
            
        </div>
        </div>
    )
}