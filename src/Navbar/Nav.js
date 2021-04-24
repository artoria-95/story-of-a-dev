import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Navbar(){
    return (
        <div className="navbar">
            <ul>
                <li className="nav"><Link className="links" to="/">Inicio</Link></li>
                <li className="nav"><Link className="links" to="/articles">Articulos</Link></li>
                <li className="nav"><Link className="links" to="/projects">Proyectos</Link></li>
                <li className="nav"><Link className="links" to="/drawings">Dibujos</Link></li>
                <li className="nav"><Link className="links" to="/biography">Biografía</Link></li>
                <li className="nav"><Link className="links" to="/contact">Contacto</Link></li>
            </ul>
        </div>
    );
};