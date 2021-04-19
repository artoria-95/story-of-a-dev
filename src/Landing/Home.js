import React from 'react';
import './Home.css';

export default function Home(){
    return (
        <div>
        <div className="main-art">Articulo principal
        <button>Leer Mas</button>
        <button>Ver mas articulos</button>
        </div>        
        <div>Proyectos destacados
            <button>Ver proyecto</button>
            <button>Ver mas proyectos</button>
        </div>
        <div className="drawings">Dibujos destacados</div>
        <div></div>
        </div>
    )
}