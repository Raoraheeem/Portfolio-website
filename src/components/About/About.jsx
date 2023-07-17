import React from "react";
import './About.css';
import { Aboutdata } from "../../data/Aboutdata";
import Next from "../../assets/next2.png";
import Prev from "../../assets/prev4.png";
import { useState } from 'react';


const About=()=>{
   const [selected, setSelected]=useState(0);
   const tlength=Aboutdata.length
    return(
        <div className="A-wrapper">
          <div className="left-A">
            <div className="head">
            <h2>About Me</h2>
            <hr />
            <span>{Aboutdata[selected].reviews}</span>

        
            </div>
            <button className="button button-cv">Download CV</button>
          </div>
          <div className="right-A">
            <div className="blueback">
                <img src={Aboutdata[selected].image} alt="" />

            </div>
          </div>
          <div className="arrows">
          <img
          onClick={()=>{
            selected===0?setSelected(tlength-1):setSelected((prev)=>prev-1)
          }} src={Prev} alt="" style={{width:'55px',height:'60px',backgroundColor:'red',borderRadius:'50%'}} />
            <img onClick={()=>{
              selected===tlength-1?setSelected(0):setSelected((prev)=>prev+1)
            }} src={Next} alt="" style={{width:'60px',height:'60px',backgroundColor:'red',borderRadius:'50%'}} />
           
            </div>

        </div>
    );
}

export default About;