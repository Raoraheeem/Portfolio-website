import React from "react";
import './Headers.css';

const Headers= ()=>{
    return(
<div className="wrapper-h">
    <div className="left-h">
        <span>Portfolio</span>
    </div>

    <div className="right-h">
        <ul>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <button className="button button-g">Get Started</button>
        </ul>
        
    </div>
    
</div>
    );
}
export default Headers;