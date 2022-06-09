import React,{useState} from "react";
import './MyStyle.css';

const SixthApp=()=>{

    const [number,setNumber]=useState(0);
    const onIncrease=()=>{
        setNumber(number + 1);
    }

    const onDecrease=()=>{
        setNumber(number - 1);
    }

    
    return(
        <div>
           숫자 
                <span style={{marginLeft:'10px'}}>{number}</span><br/>
            <button onClick={onIncrease}>증가</button>

            <button onClick={onDecrease}>감소</button>
        </div>
    )
}
export default SixthApp;