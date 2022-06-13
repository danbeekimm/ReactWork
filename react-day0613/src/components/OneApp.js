import React,{useState,useEffect} from "react";

const OneApp=()=>{
    const [name,setName]=useState("이영자");
    const [addr,setAddr]=useState("강남구");

    useEffect(()=>{
        console.log("state변수가 값변경될때마다 호출");
        
        //29OneApp.js:8 state변수가 값변경될때마다 호출 이런식으로 검사에 나옴

    });

    useEffect(()=>{
        console.log("처음 랜더링시 한번만 호출");
    },[]);

    useEffect(()=>{
        console.log("이름변경시에만 호출!");
    },[name]);
    
    return(
        <div>
        <h3 className="alert alert-info">OneApp입니다-useEffect</h3>
        <h3>이름 :<input type='text' defaultValue={name} 
        onChange={(e)=>{
            setName(e.target.value)
        }}/></h3>
        <h3>주소 :<input type='text' defaultValue={addr} 
        onChange={(e)=>{
            setAddr(e.target.value)
        }}/></h3>
        <hr/>
        <h2>이름:{name}</h2>
        <h2>주소:{addr}</h2>
        </div>
    )
}
export default OneApp;