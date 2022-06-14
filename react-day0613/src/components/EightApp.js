import React, { useState } from "react";
import '../App.css';
import EightSubApp from "./EightSubApp";
import EightSubApp2 from "./EightSubApp2";

const EightApp=()=>{
    const [color,setColor]=useState('magenta');
    const [message,setMessage]=useState('Have a Nice Day');
    const [photo,setPhoto]=useState('s5');
    const [likeColor,setLikeColor]=useState(['pink','yellow','gray']);

    const changeMessage=(msg)=>{
        setMessage(msg);
    }

    const changeColor=(co)=>{
        setColor(co);
    }

    const changePhoto=(p)=>{
        setPhoto(p);
    
    
    }
        
    const deleteLikeColor=(idx)=>{ 
        setLikeColor(likeColor.filter((a,i)=>(i!==idx)));
    }

    const addColorEvent=(co)=>{
        setLikeColor(likeColor.concat(co));
    }


    return(
        <div>
            <h3 className="alert alert-info">EightApp부모자식컴포넌트 통신문제</h3>
            <br></br>
            <h1 style={{color:color}}>{message}</h1>
            <img src={`../image/${photo}.JPG`} alt=""/>
            <br></br>
            { // 백그라운드 co 가 likecolor 갯수만큼 반복
                likeColor.map((co,idx)=>(<div className="circle" style={{backgroundColor:co}} 
                onDoubleClick={()=>{
                    deleteLikeColor(idx);
                }}
                >{idx}</div>))
            }

            <br style={{clear:'both'}}/><br></br>
            <EightSubApp onMessage={changeMessage} onColor={changeColor}
            onPhoto={changePhoto}/>
            <EightSubApp2 onAddColor={addColorEvent}  />
        </div>
    )
}
export default EightApp;cd