import React from 'react';
import Card from '../UI/Card';
import foto from '../Assets/dreamdev.jpeg';
import './Bio.css';

export default function Bio(){
    return (
        <div className="card">
            <div className="bio-content">
            
            <img src={foto} alt="ana" className="photo"/>
            <h4 className="bio-title">Sobre la autora</h4>
            <p className="bio-p">cosas para decir en un pequeño parrafo a modo de resumen de la bio</p>
            <button className="more">leer mas</button>
            
        </div>
        </div>
    )
}