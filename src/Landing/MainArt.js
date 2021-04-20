import React from "react";
import "./MainArt.css";
export default function MainArt() {
  return (
    
      <div className="main-art">
        <section className="art-content">
          <header className="art-head">
            <h1>Articulo principal</h1>
          </header>
          <div className="art-txt">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
          </div>
          <footer className="art-foot">
            <button>Leer Mas</button>
            <button>Ver mas articulos</button>
          </footer>
        </section>
      </div>
    
  );
}
