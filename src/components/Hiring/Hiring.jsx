import React from "react";
import './Hiring.css';

const Hiring=()=>{
    return(
      <div className="hir-wrapper">
        <h1>Let's Make Something <br/>Great Together</h1>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ab nihil, amet saepe dicta nesciunt officia exercitationem neque deserunt repellendus. lormet saepe dicta nesciunt officia exercitationem neque deserunt repellendus. lo</span>

        <form action="" >
           
            <input type="text" placeholder="Name" />
            <input type="email" name="" id="" placeholder="Email" />
            <input type="number" name="" id="" placeholder="Phone#" />
            <input type="text" placeholder="Budget" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
            <input type="button" className="button button-hir"value="Hire" />
          
        </form>
      </div>
    );
}

export default Hiring;