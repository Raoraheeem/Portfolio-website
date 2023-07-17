import React,{useState} from "react";
import './Projects.css';
import GitHub from "../../assets/Git3.png";
import { Projectdata } from "../../data/Projectdata";
import Next from "../../assets/next2.png";
import Prev from "../../assets/prev4.png";


const Project = ()=>{
    const [selected,setSelected]=useState(0);
    const tlength3=Projectdata.length
    return(
     <div className="p-wrapper">
        <div className="p-left">
          <h1>Projects</h1>
          <h1>{[Projectdata[selected].Title]}</h1>
          <span>{[Projectdata[selected].desc]}
          </span>
          <h1>Git Hub Link</h1>
          <a href=""><img src={GitHub} alt=""  /></a>
        </div>
        <div className="p-right">
            <div className="b-right">
                <img src={Projectdata[selected].Imagep} alt="" />
               
            </div>
            <div className="arrows3">
                    <img onClick= {()=>{
                        selected===0?setSelected(tlength3-1):
                        setSelected((prev)=>prev-1)

                    }

                    } src={Prev} alt="" />
                    <img
                    onClick= {()=>{
                        selected===tlength3-1?setSelected(0):
                        setSelected((prev)=>prev+1)

                    }

                    }  src={Next} alt="" />
                </div>
        </div>
     </div>
    );

}
export default Project;
