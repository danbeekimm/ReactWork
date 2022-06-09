
import React, { useState } from "react";

const ThreeApp=()=>{
    const [message,setMessage]=useState('마우스위치출력');

    //이벤트
    const mouseEvent=(e)=>{
        let s=`마우스위치 X:${e.pageX},Y:${e.pageY}입니다`;
        setMessage(s);
    }
    
    return(
        <div onMouseMove={mouseEvent}>
            <h3 className="alert alert-danger">ThreeApp입니다</h3>
            <br/>
            <h1 className="alert alert-info">{message}</h1>
        </div>
    )
}
export default ThreeApp;