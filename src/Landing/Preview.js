import React from "react";
import Button from "../UI/Button";
import "./Preview.css";

const Preview = (props) => {
  return (
    <div>
      <section className="preview-wrapper">
        <header className="preview-header">
          <h2>{props.name}</h2>
        </header>
        <div className="preview-content">
          <img src={props.photo} className="foto" />
          <p>{props.description}</p>
        </div>
        <footer className="preview-footer">
          <Button value="Ver" />
        </footer>
      </section>
    </div>
  );
};

export default Preview;
