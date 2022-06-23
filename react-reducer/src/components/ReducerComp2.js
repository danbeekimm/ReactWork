import React, { useReducer, useState } from 'react';
import { act } from 'react-dom/test-utils';
import '../App.css';
import Student from './Student';

const initialState={
    count:1,
    students:[ 
        //변수에 배열 임시로 하나 선언
        {
            id:Date.now(),
            name:'Candy',
            isHere:false
        }
    ]
}

//reducer 설정(학교역할)
const reducer=(state,action)=>{
    console.log(state,action);

    switch(action.type){
        case 'add-student':
            //dispatch에서 전달하는 name 을 변수 name 에 저장
            const name=action.payload.name;
            //학생정보를 생성해서 배열에 추가 //객체 하나 넣기
            const addStudent ={
                id:Date.now(),
                name,
                isHere:false
            };
            return {
                count:state.count+1,
                students:[...state.students,addStudent] //...state.students : 기존학생에 addStudent 로 추가
            };
        
            case 'delete-student': //student에서가져올거임
                return {
                    count:state.count-1,
                    students:state.students.filter(student=>student.id!== action.payload.id) //id 는같은게있을수없어서 가져와서 지우기좋음
                };//스투던트에서받은  아이디를 제외하고 필터해서 넣기
            case 'mark-student':
                return {
                    count:state.count,
                    students:state.students.map(student=>{
                        if(student.id===action.payload.id){ 
                            return {...student,isHere:!student.isHere} //ishere만 반대로 트루면 펄스
                        }
                        return student; //나머지는 그대로 리턴
                    })
                }
                default:
                    return state;
    }
}

const ReducerComp2 = () => {
    const [name,setName]=useState('');
    const [studentInfo,dispatch]=useReducer(reducer,initialState); //초기값을 여기다주기

    return (
        <div className='form-inline'>
            <h3>Reducer 학교에 오신걸 환영합니다.</h3>
            <h4>총 학생 수 : {studentInfo.count}</h4>
            <div className='form-inline'>
            <input type={'text'} className="form-control" style={{width:'120px'}} placeholder="이름입력"
            defaultValue={name} onChange={(e)=>{
                setName(e.target.value);
                }}/>
                <button type='button' className='btn btn-success btn-sm' style={{marginLeft:'10px'}}
                onClick={()=>{
                    dispatch({'type':'add-student',payload:{name}})
                }}>추가</button>

                <br/><br/>
                {
                    studentInfo.students.map(student=>{
                        return(
                            <Student name={student.name} key={student.id}
                            dispatch={dispatch} id={student.id} isHere={student.isHere}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ReducerComp2;