import React from 'react';
import '../App.css';

const Student = ({name,dispatch,id,isHere}) => {
    return (
        <div >
            <div className='form-inline'>
                <span style={{ //ishere이 트루면 주고 아님 none
                    textDecoration:isHere?'line-through':'none', 
                    color:isHere?'gray':'black', width:'100px',display:'inline-block'
                }}
                onClick={()=>{
                    dispatch({type:'mark-student',payload:{id}})
                }}>{name}</span>
                    <button type='button' className='btn btn-danger btn-xs'
                    style={{marginLeft:'10px'}}
                    onClick={()=>{
                        dispatch({type:'delete-student',payload:{id}})
                    }}>삭제</button>
            </div>
            <br/>
        </div>
    );
};

export default Student;