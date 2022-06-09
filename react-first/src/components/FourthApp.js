import React,{useState} from "react";

const Fourth=()=>{
    const[name,setName]=useState('김말자');
    const[age,setAge]=useState(23);
    return(
        <div>
            <h2 className="alert alert-danger">Fourth App입니다
            <img src="../wantit.png" alt="" className="img-circle"></img>
            </h2>
            <b style={{fontFamily:'Gowun Dodum',fontSize:'30px'}}>
                이름 : {name} <span style={{marginLeft:'20px'}}> 나이 : {age}세 </span>
            </b>
            <br></br>
            <button type="button" className="btn btn-default" style={{marginLeft:'100px'}}
            onClick={()=>{
                setName("강호동");
                setAge(30);
            }}>값변경</button>
            <button type="button" className="btn btn-default" style={{marginLeft:'10px'}}
            onClick={()=>{
                setName('');
                setAge(0);
            }}
            >초기화</button>
        </div>
    )
}
export default Fourth;