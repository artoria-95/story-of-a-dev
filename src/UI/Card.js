import React from 'react';
import './Card.css';
const Card=(props)=>{
    return (
        <div>
            <section className="card-wrapper">
                <header className="card-header">
                    {props.header}
                </header>
                <div className="card-body">
                    {props.txt}
                </div>
                <footer className="card-foot">
                    {props.footer}
                </footer>
            </section>
        </div>
    )
}

export default Card;