import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';
import titleimg from '../image/32.jpg';

const Title=()=>{
    return(
        <div>
            <NavLink to='/'>
            <img src={titleimg} alt="" style={{height:'280px', width:"100%"}}/><br></br>
            <b style={{fontSize:"20px", color:'green'}}>react+spring boot project</b>
            </NavLink>
        </div>
    )
}
export default Title;