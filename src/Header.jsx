import React from "react";
import './global.css'

export default function Header() {

    return(
        <div className="header">
            <img src="src/assets/trollface.png" alt="" className="logo" />
            <div className="title">Meme Generator</div>
        </div>
    )
}