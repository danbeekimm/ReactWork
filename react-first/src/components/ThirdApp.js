import React,{useState} from "react"; //export 되어있는경우엔 useState으로 클래스가져오기
import Fourth from "./FourthApp";
import FifthApp from "./FifthApp";
import SixthApp from "./SixthApp";

const ThirdApp=()=>{
    //상태관리를 위한 변수 설정
    const [message,setMessage]=useState('HappyDay');//해피데이란 문자가 초기값으로 들어가있음. 문자열이아닌경우엔 []배열 0이렇게넣을수있음
    
    //이벤트 함수
    const handleEnter=(e)=>{
        if(e.key==='Enter'){
            setMessage(''); //message 변수값 지우기
            e.target.value=''; //입력값 지우기
        }
    }
    return(
    <div>
        <h1 className="alert alert-info" style={{fontFamily:'Gowun Dodum'}}>ThirdApp입니다</h1>
        <h3 style={{color:'red'}}>{message}</h3> 
        <hr/>
        {/* <h3 style={{color:'red'}}>{setMessage}</h3>는안나옴 */}
        <h4>메세지를 입력해보세요</h4>
        <input type='text'style={{width:'300px',fontSize:'2em'}}
        defaultValue={message}
          onChange={(e)=>{
            // 체인지함수발동할때 함수가 발동됨
            //console.log(e.target.value); //입력한 값
            //message 변수에 입력값 넣기
            setMessage(e.target.value);
        }}
        onKeyUp={handleEnter}/>
        <hr/>
        <Fourth/>
        <hr/>
        <FifthApp/>
        <hr/>
        <SixthApp/>
        
    </div>
    )
}
export default ThirdApp;