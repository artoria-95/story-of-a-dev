import React from 'react';
import Bio from './Bio';
import Page from './Page';
import './Sidebar.css';
export default function Sidebar(){
    return (
        <div className="sidebar">
            <Bio />
            <Page />
        </div>
    );
};