import React from "react";
import LogoInsta from "../assets/img/instagram-img.png"
import "../assets/style.css";

function MainHome() {
    return (
        <div>
            <mian className="main">
                <h1>Welcome!</h1>
                <img width="58px" src={LogoInsta}></img>
            </mian>  
        </div>
    )
}
export default MainHome; 