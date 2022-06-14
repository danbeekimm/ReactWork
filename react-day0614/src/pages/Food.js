import React from "react";
import '../App.css';
import {useParams} from 'react-router-dom'

const Food=()=>{
   
    const {food1,food2}=useParams();
    
    console.log({food1},{food2});
    
    return(
        <div>
            <h3>오늘 식사 메뉴</h3>
            <img alt="" src={`../../image/c${food1}.png`} className="img-circle"
            style={{width:'200px',height:'200px'}}/>
            <img alt="" src={`../../image/c${food2}.png`} className="img-circle"
            style={{width:'200px',height:'200px'}}/>
        </div>
    )
}
export default Food;