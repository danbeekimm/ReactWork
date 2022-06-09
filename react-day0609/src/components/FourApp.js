import React, { useState } from "react";
import '../App.css';
//이미지 5개선언
import img1 from '../image/K-041.png';
import img2 from '../image/K-046.png';
import img3 from '../image/K-055.png';
import img4 from '../image/K-057.png';
import img5 from '../image/c1.png';
const FourApp=()=>{

    const [hp1,setHp1]=useState('02');
    const [hp2,setHp2]=useState('1234');
    const [hp3,setHp3]=useState('5678');
    const [photo,setPhoto]=useState(1);

    const changeHp1=(e)=>{
        setHp1(e.target.value);
    }
    const changeHp2=(e)=>{
        setHp2(e.target.value);
    }
    const changeHp3=(e)=>{
        setHp3(e.target.value);
    }
    const changePhoto=(e)=>{
        setPhoto(Number(e.target.value));
    }
    return(
        <div>
            <h2> 전화번호 </h2>
            <h3 className="alret alert-success">Four컴포넌트</h3>
            <div className="form-inline">
            <select onChange={changeHp1} className="form-control" style={{width:'100px'}}>
                <option>02</option>
                <option>010</option>
                <option>011</option>
                <option>019</option>

            </select>
            <b>-</b>
            <input type='text' maxLength='4' className="form-control" defaultValue={hp2} onKeyUp={changeHp2} style={{width:'100px'}}/>

            <b>-</b>
            <input type='text' maxLength='4' className="form-control" defaultValue={hp3} onKeyUp={changeHp3} style={{width:'100px'}}/> 

            <b style={{marginLeft:'50px'}}>이미지선택:</b>
            <select className="from-control" onChange={changePhoto}>
                <option value="1">브런치</option>
                <option value="2">컵</option>
                <option value="3">로고</option>
                <option value="4">스푼</option>
                <option value="5">손님</option>
            </select>
            </div>
            <br></br>
            <h1 className="result">{hp1}-{hp2}-{hp3}</h1>
            <img src={photo===1?img1:photo===2?img2:photo===3?img3:photo===4?img4:img5} alt="" className="photo"/>
            
        </div>
    )
}
export default FourApp;