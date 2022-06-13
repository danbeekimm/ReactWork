import React,{useState} from "react";
import '../App.css';

//const SixSubApp3=(props)=>{
    const SixSubApp3=({incre,decre})=>{
    
    return(
        <div>
            <button type="button" className="btn btn-info" 
            style={{marginLeft:'40px'}}
            onClick={()=>{
                //props.decre(); //부모컴포넌트의 이벤트 발생
                decre();
            }}>감소</button>

            <button type="button" className="btn btn-info" 
            style={{marginLeft:'60px'}}
            onClick={()=>{
               // props.incre(); //부모컴포넌트의 이벤트 발생
               incre();
            }}>증가</button>
        </div>
    )
}
export default SixSubApp3;