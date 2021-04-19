import React from 'react';
import Navbar from './Nav';
import './Header.css';
export default function Header(){
    return(
        <div className="header">
            <h1 className="header-title">Historia de una Dev</h1>
            <Navbar />
        </div>
    )
};