import React from "react";
import './intro.css';
import Linkedin from '../../assets/linked in.png';
import Instagram from '../../assets/insta.png';
import Facebook from '../../assets/Facebook.png';
import Profile from '../../assets/Profilepic.png';


const Intro =()=>{
    return(
     <div className="I-wrapper">
        <div className="left-i">
            <div className="i-name">
                <span>Hello, I am</span>
               
                <span>Rao Abdul Raheem</span>
                
            
                <span>I am Front end Web developer and I have knowledge of Front end technoligies Html,Css,javascript,Bootsrtap and React</span>
               
                

            </div>
            <h2>Find Me on</h2>
            
                <div className="social-icon">
               
                <img src={Linkedin}alt="" />
                <img src={Instagram}alt="" />
                <img src={Facebook}alt="" />
                </div>
            <div className="button-i">
            <button className="button button-h">hire Me</button>
            <button className="button">Portfolio</button>
            </div>

        </div>
        <div className="right-i">
          <div className="profile-i">
            <img src={Profile} alt="" />
          </div>

        
        </div>
     </div>
    );
}
export default Intro;