import React, { useState } from "react";
import '../App.css';

const EightSubApp2=(props)=>{
    const [color,setColor]=useState('');

    const buttonEvent=()=>{
        props.onAddColor(color);
    }
    return(
        <div style={{width:'500px'}}>
            <h4>EightSubApp2 컴포넌트입니다</h4>
            <div className="form-inline">
                <b>색상선택 : </b>
                <input type='color' defaultValue='#ccccff'
                style={{width:'100px'}} onChange={(e)=>{
                    setColor(e.target.value)
                }}/>
                <button type="button" className="btn btn-warning btn-sm" onClick={buttonEvent}>
                
                    색상추가

                </button>
            </div>
        </div>
    )
}
export default EightSubApp2;