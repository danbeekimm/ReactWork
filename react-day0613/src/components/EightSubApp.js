import React from "react";

const EightSubApp=(props)=>{


    
    return(
        <div className="alert alert-danger" style={{width:'500px'}}>
            <b>메세지 : </b>
            <input type='text' className="form-control" 
            onChange={(e)=>{
                props.onMessage(e.target.value);
            }}/><br></br>

            <b>글자색 : </b>
            <input type='color' className="form-control" defaultValue='#ffccff'
            onChange={(e)=>{
                props.onColor(e.target.value);
            }}/><br></br>

            <b>이미지 : </b>
            <select className="form-control"
            onChange={(e)=>{
                props.onPhoto(e.target.value);
            }}>
            {
                [...new Array(10)].map((a,idx)=>(<option>{`s${idx+1}`}</option>))
            }
            
            </select>
            
            
        </div>
    )
}
export default EightSubApp;