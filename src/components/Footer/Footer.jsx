import React from "react";
import './Footer.css';
import Linkedin from '../../assets/linked in.png';
import Instagram from '../../assets/insta.png';
import Facebook from '../../assets/Facebook.png';

const Footer =()=>{
    return(
      <div className="f-wrapper">
        <h1>Portfolio</h1>
        <span><a href="">About |</a><a href="">Contact | </a><a href="">Portfolio</a></span>
        <span>NY/ 03124014398/ raoraheem755@gmail.com</span>
        <div className="socialicon2">
        <a href="https://www.linkedin.com/in/rao-abdul-raheem-6b8758193"><img src={Linkedin} alt="" /></a>
        <a href="https://instagram.com/rao.abdulraheem.587?igshid=MzNlNGNkZWQ4Mg=="><img src={Instagram} alt="" /></a>
        <a href="https://www.facebook.com/rao.abdulraheem.587?mibextid=ZbWKwL"><img src={Facebook} alt="" /></a>
        
        </div>
        <hr />

        <span>Copyright 2023 Raoraheem| All rights are reserved</span>
       
      </div>
    );
}

export default Footer;