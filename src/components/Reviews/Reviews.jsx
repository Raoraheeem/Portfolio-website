import React,{useState} from "react";
import './Reviews.css';
import map from '../../assets/map.png';
import client1 from '../../assets/1.png';
import client2 from '../../assets/3.png';
import client3 from '../../assets/22.png';
import Next from "../../assets/next2.png";
import Prev from "../../assets/prev4.png";
import { Reviewdata } from "../../data/Reviewdata";

const Reviews =()=>{
   const [selected,setSelected]=useState(0);
   const tlength2=Reviewdata.length;
   
 return(
    <div className="r-wrapper">
       <h2>What My Client Says</h2>
       <hr />
       <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quia ullam ipsa placeat voluptatem natus facere sunt porro amet eum id voluptatum, dolore itaque non.ceat voluptatem natus facere sunt porro amet eum id voluptatum, dolore itaque non</span>
      <img src={map} alt="" />
      <img src={client1} alt="" />
      <img src={client2} alt="" />
      <img src={client1} alt="" />
      <img src={client2} alt="" />
      <img src={client3} alt="" />
      <img src={client3} alt="" />
     
      <span><span style={{color: "red",fontWeight:"bold",fontSize:"30px"}}>"</span>{Reviewdata[selected
      ].Reviews1}<span style={{color: "red",fontWeight:"bold",fontSize:"30px"}}>"</span>
      <h1 style={{color: "#FFFFFF",fontWeight:"bold",fontSize:"20px",}}>{Reviewdata[selected].Client}</h1></span>

      <div className="arrows2">
         <img  onClick={()=>{
            selected===0?setSelected(tlength2-1):setSelected((prev)=>prev-1
            )
         }
} src={Prev} alt="" />
         <img onClick={()=>
         selected===tlength2-1?setSelected(0):setSelected((prev)=>prev+1)}src={Next} alt="" />
         
      </div>

      
    </div>

   );
}


export default Reviews;