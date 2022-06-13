import React,{useState,useRef} from "react";
//useRef : id 같은느낌. 변수관리하는 기능
        //state 와 차이점 : 값이 변경되어도 다시 랜더링하지않음
const FourApp=()=>{
    const [count,setCount]=useState(0);
    //ref선언방법
    const countRef=useRef(0);

    //state변수증가하는함수
    const stateIncre=()=>{
        setCount(count+1);
    }

    //ref변수증가하는함수
    const refIncre=()=>{
        countRef.current=countRef.current+1;
        console.log("countRef="+countRef);
    }
    return(
        <div>
        <h3 className="alert alert-info">FourApp/ useRef</h3>
        <button type="button" className="btn btn-danger" onClick={stateIncre}>state변수증가</button>

        <div className="number">{count}</div>
        <hr/>
        <button type="button" className="btn btn-success" onClick={refIncre}>ref변수증가</button>
        <div className="number">{countRef.current}</div>
        </div>
    )
}
export default FourApp;