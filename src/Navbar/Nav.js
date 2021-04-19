import React from 'react';
import './Nav.css';

export default function Navbar(){
    return (
        <div className="navbar">
            <ul>
                <li className="nav">Inicio</li>
                <li className="nav">Articulos</li>
                <li className="nav">Proyectos</li>
                <li className="nav">Dibujos</li>
                <li className="nav">Biografía</li>
                <li className="nav">Contacto</li>
            </ul>
        </div>
    );
};