import React from "react";
import Globe from "../images/globe.png"

export default function Header(){
    return (
        <header className="header">
            <img className="header--img" src={Globe} alt="globe" />
            <h3 className="header--text">my travel journey</h3>
        </header>
    )
}