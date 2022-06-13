import React,{useState} from "react";
import '../App.css';
 //{}로받아도됨
const SixSubApp2=({flower,price,linecolor})=>{
    
    return(
        <div>
            <div className="line" style={{borderColor:linecolor}}>
                {flower}이쁘네 {price}원이네 
            </div>
        </div>
    )
}
export default SixSubApp2;