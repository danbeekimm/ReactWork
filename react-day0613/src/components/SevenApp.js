import React,{useState} from "react";
import '../App.css';
import RowItemApp from "./RowItemApp";
import WriteForm from "./WriteForm";

const SevenApp=()=>{
    const [board,setBoard]=useState([
        {
            name:'김단비',
            photo:'s6',
            blood:'AB',
            today:new Date()
        },

        {
            name:'김단비',
            photo:'s1',
            blood:'A',
            today:new Date()
        },

        {
            name:'김단비',
            photo:'s3',
            blood:'O',
            today:new Date()
        },
    ]);
    //데이타 추가하는 함수이벤트
    const dataSave=(data)=>{
        setBoard(board.concat({
            /*
            name:data.name,
            photo:data.photo,
            blood:data.blood
            */
            ...data, //name',photo,blood 가 writeform과 같음 그래서 ...data만써도됨
            today:new Date()
        }));
    }
    const dataDelete = (index) =>{
        setBoard(board.filter((item,i)=>i!==index));  //같지않ㅇ느것만 걸러내기. 이러면 보드에서 i와 idx와 같은 번지만 빼고
        //나머지만 들어가는거임.
    }

    

    
    return(
    <div>
        <h3 className="alert alert-danger">SevenApp 부모자식컴포넌트간 통신</h3>
        <WriteForm onSave={dataSave}/>
        <table className="table table-bordered" style={{width:'500px'}}>
            <caption><b>Board 배열 출력</b></caption>
            <thead>
                <tr style={{backgroundColor:'yellowgreen'}}>
                    <th width='100'>이름</th>
                    <th width='120'>사진</th>
                    <th width='70'>혈액형</th>
                    <th width='100'>날짜</th>
                    <th width='70'
                    >삭제</th>
                </tr>
            </thead>
            <tbody>
                { //배열 안 객체 단위로 넘기는것임
                    board.map((row,index)=>(<RowItemApp row={row} key={index} index={index} onDelete={dataDelete}/>))
                }
            </tbody>
        </table>
    </div>
    )
}
export default SevenApp;