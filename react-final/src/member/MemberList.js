import React,{useState,useEffect} from "react";
import axios from "axios";
import '../App.css';
import Member from "./Member";

const MemberList =()=>{

     //.env 전역변수 사용 
    const SPRING_URL=process.env.REACT_APP_SPRING_URL;

    const [memList,setMemList]=useState([]);

    //데이타 가져오는 함수
    const getList=()=>{
        const url =  SPRING_URL+"member/list";
        axios.get(url)
        .then(res=>{ 
            setMemList(res.data); 
            console.log(memList.length);

        })
    }

    const dataDelete=(num)=>{
        const deleteUrl=SPRING_URL+"member/delete?num="+num;
        axios.delete(deleteUrl)
        .then(res=>{ 
            getList();

        })

    }
        //처음 렌더링시 딱 한번 데이타 가져오기
            useEffect(()=>{
            //  console.log("list");
                getList();
            },[]);



    return(
        <div>
            <table className="table table-borderless" style={{width:'700px'}}>
                <caption><h3>회원명단</h3></caption>
                <thead>
                    <tr style={{textAlign:"center"}}>
                        <th width='50' style={{ textAlign:"center"}}>번호</th>
                        <th width='70' style={{ textAlign:"center"}}>회원명</th>
                        <th width='70' style={{ textAlign:"center"}}>아이디</th>
                        <th width='100' style={{textAlign:"center"}}>핸드폰</th>
                        <th width='100' style={{textAlign:"center"}}>이메일</th>
                    </tr>
                </thead>
                </table>
                {
                    memList.map((row,idx)=>(
                        <table className="table" style={{width:'600px', margin:'0'}}>
                            <tbody>
                                <tr>
                                    <td width='50'>{idx+1}</td>
                                    <td width='70'>{row.name}</td>
                                    <td width='70'>{row.id}</td>
                                    <td width='100'>{row.hp}</td>
                                    <td width='100'>{row.email}</td>
                                </tr>
                                <tr>
                                    <td colSpan={5}>주 소 &gt;&gt; {row.addr}
                                        <span style={{float:'right'}}>
                                            <button type="button" className="btn btn-danger btn-sm"
                                            onClick={()=>{
                                                dataDelete(row.num)
                                            }}>Delete</button>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    ))
                }
                
        

        </div>
    )
}
export default MemberList;