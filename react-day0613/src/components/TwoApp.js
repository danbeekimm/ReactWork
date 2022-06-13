import React,{useState} from "react";

const TwoApp=()=>{
    const [inputs,setInputs]=useState({ //객체처리함
        name:'강호동',
        addr:'강남구',
        age:'20'
    });
    const changeData=(e)=>{
        console.log("name"+e.target.name);
        console.log("value"+e.target.value);

        //name , value 값얻기
        //e.target으로부터 name 과 value 를 같이받고싶을때
        const {name,value}=e.target;
        //변경
        setInputs({ //펼침연산자로 기존에 있던 값을 펼치고 name만 변경하게한다
            ...inputs, //기존 멤버값은 그대로
            [name]:value
            
        })

        
    }
    return(
        <div>
        <h3 className="alert alert-info">TwoApp / state를 객체로</h3>
        <h3>이름 : <input type='text' name="name" defaultValue={inputs.name}
        onChange={changeData}/></h3>

        <h3>주소 : <input type='text' name="addr" defaultValue={inputs.addr}
        onChange={changeData}/></h3>

        <h3>나이 : <input type='text' name="age" defaultValue={inputs.age}
        onChange={changeData}/></h3>
        <hr/>
        <h2>이름 : {inputs.name},{inputs['name']}</h2>
        <h2>주소 : {inputs.addr},{inputs['addr']}</h2>
        <h2>나이 : {inputs.age},{inputs['age']}</h2>
        </div>
    )
}
export default TwoApp;