import React from "react";
import "./MainArt.css";
export default function MainArt() {
  return (
    <div>
      <div className="mainart-wrapper">    
        <div className="art-content">
        <h1>Articulo principal</h1>
        <p>Texto</p>
        </div>
        <button>Leer Mas</button>
      </div>
      <div className="more-arts">Ver mas articulos</div>
    </div>
  );
}
