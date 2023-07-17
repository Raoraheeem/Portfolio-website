import React from "react";
import './Work.css';
import Reactjs from "../../assets/React js.png";
import HTML from "../../assets/HTML.png";
import CSS from "../../assets/CSS.png";
import JS from "../../assets/js.png";
import Xd1 from "../../assets/Adobe Xd.png";
import Bs from "../../assets/Bootstrap.png";

const Work =()=>{
    return(
        <div className="w-wrapper">
            <h1>My Capabilities</h1>
            <hr />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, saepe. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam pariatur qui molestias eaque saepe? Aperiam earum alias eius distinctio cum illum numquam iste facilis, sint voluptate vero voluptates inventore qui. </span>
            <div className="icons1">
               <img src={HTML} alt="" />
               <img src={Reactjs} alt="" />
               <img src={CSS} alt="" />
              
               
             

             
                
                
            </div>
          <div className="heading">
            <h3>HTML</h3>
            <h3>React JS</h3>
            <h3>CSS</h3>
          </div>
            
        <div className="text">
         
            <span>HTML is the standard markup language for Web pages. With HTML you can create your own Website. </span>
            
            <span>React makes it painless to create interactive UIs. Design simple views for each state in your application.</span>
            
            <span>CSS stands for Cascading Style Sheets  CSS describes how HTML elements are to be displayed on screen.</span>
        </div>
        <div className="icons2">
               
               <img src={JS} alt="" />
               <img src={Xd1} alt="" />
               <img src={Bs} alt="" />
                
                
            </div>
            <div className="heading2">
            <h3>JavaScript</h3>
            <h3>Adobe Xd</h3>
            <h3>Bootstrap</h3>
          </div>
        <div className="text2">
           
            <span>JavaScript is a lightweight, interpreted programming language. </span>
            
            <span>Adobe XD is a vector design tool for web and mobile applications.</span>
           
            <span>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end.</span>
        </div>
        </div>
        

    );
}
export default Work;