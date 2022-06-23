import React, { useReducer, useState } from 'react';
import '../App.css';
//useReducer : state 관리 용이하며 유지 보수가 편하다
//호출 : dispatch(type,action) --> reducer(state,action)
//타입으로 이벤트요청할때 엑션에 뭘보내겠다 요구
//기능
//reducer: state 를 업데이트 하는역할(은행)
//dispatch는 -state의 업데이트를 요구
//action - 요구의 내용 <타입으로쓸만한 이벤트의 상수를(요구) 미리등록하고 해도됨. >


//상수에 문자열 넣어주기 (달라두 상관없음)
const ACTION_TYPES={
    addmoney:'addmoney', 
    submoney:'submoney'
}

//입출금 관리할 은행(reducer)설립
const reducer=(state,action)=>{
    console.log("reducer가 일을 합니다",state,action);
    switch(action.type){
        case ACTION_TYPES.addmoney:
            return state+action.payload; //state 에 action의 payload 값을 추가로하겠다
        case ACTION_TYPES.submoney:
            return state-action.payload;
        default:
            return state;
    }
}
const ReducerComp1 = () => {
    const [number,setNumber]=useState(0);
    const [money,dispatch]=useReducer(reducer,0); //파라미터 reducer과 money의 초기값 reducer,0 
    return (
        <div>
            <h2>useReducer 은행에 오신것을 환영합니다!</h2>
            <h3>잔고 : {money}원</h3>
            <input type='number' defaultValue={number}
            onChange={(e)=>{
                setNumber(Number(e.target.value));
            }} step="5000"/> 
            {/* 5000단위로 증가하도록 step 주기 */}
            <br/><br/>
            <button type='button' className='btn btn-info btn-lg'
            onClick={()=>{
                dispatch({'type':ACTION_TYPES.addmoney,payload:number})
                // payload:number 돈을 보내기
            }}>입금</button>
            <button type='button' className='btn btn-danger btn-lg' style={{marginLeft:'10px'}}
            onClick={()=>{
                dispatch({'type':ACTION_TYPES.submoney,payload:number})
            }}>출금</button>
        </div>
    );
};

export default ReducerComp1;
