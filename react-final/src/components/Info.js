import React from "react";
import '../App.css';
import infoimg from '../image/40.jpg';

const Info=()=>{
    return(
        <div>
            <img src={infoimg} alt='' style={{width:'250px'}}/>
            <br/><br/>
            <div>비트캠프</div><br/>
            <div>010-4444-8888</div>
        </div>
    )
}
export default Info;