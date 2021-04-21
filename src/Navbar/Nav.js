import React from 'react';
import './Nav.css';

export default function Navbar(){
    return (
        <div className="navbar">
            <ul>
                <li className="nav" onClick={""}>Inicio</li>
                <li className="nav" onClick={""}>Articulos</li>
                <li className="nav" onClick={""}>Proyectos</li>
                <li className="nav" onClick={""}>Dibujos</li>
                <li className="nav" onClick={""}>Biografía</li>
                <li className="nav" onClick={""}>Contacto</li>
            </ul>
        </div>
    );
};