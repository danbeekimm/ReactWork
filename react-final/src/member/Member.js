import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import MemberList from "./MemberList";

import '../App.css';
import { Password } from "@mui/icons-material";

const Member=()=>{
    const navi=useNavigate();
    const [data,setData]=useState({
        id:'',
        name:'',
        pass:'',
        email:'',
        hp:'',
        addr:'',
        emailok:false
    });

    const [passOk,setPassOk]=useState(false);
    const [email1,setEmail1]=useState('');
    const [email2,setEmail2]=useState('');
    const [btnOk,setBtnOk]=useState(false);
    const [emailOk,setEmailOk]=useState(false);

    //submit 호출될 함수
    const onSave=(e)=>{
        e.preventDefault(); //기본이벤트 무효화
        
        if(!btnOk){
            alert("아이디중복체크해주세요");
            return;
        }
        if(!passOk){
            alert("비밀번호확인해주세요");
            return;
        }

        if(!data.emailok){
            alert("이메일중복버튼을 눌러주세요");
            return;
        }

        
            const url=process.env.REACT_APP_SPRING_URL+"member/insert";
            axios.post(url,data)
            .then(res=>{
                // alert("insert 성공");
                navi("/login") //성공하면 네비 사용해서 로그인으로이동
            });
    }

    //data관련 데이타 입력시 호출
    const onDataChange=(e)=>{
        const {name,value}=e.target; //e.target으로 네임과 벨류를 가져와서

        //이벤트발생 name 이 pass일경우 무조건 passok 는 false
        if(name==='pass')
            setPassOk(false);
        setData({
            ...data, //기존데이터는 다 넣고
            [name]:value //이것만 변경.
        })
    }

    //email select 변경시 호출
    const onEmailChange=(e)=>{
        const {value}=e.target;
        console.log(value)
        if(value==='-')
        setEmail2('');
        else
        setEmail2(value);

    }

    //두번째 pass 입력시 호출
    const onPassChange=(e)=>{
        const {value}=e.target;
        if(value===data.pass)
            setPassOk(true);
        else
            setPassOk(false);
    }

    //아이디중복체크 이벤트
    const onIdJungbok=()=>{
        const url=process.env.REACT_APP_SPRING_URL+"member/idcheck?id="+data.id;
        if (data.id!=='') {

        axios.get(url)
        .then(res=>{
            if(res.data===0){
                setBtnOk(true);
                alert("가입가능한아이디입니다");

            }else{
                setBtnOk(false);
                alert("이미가입되어있는아이디입니다");
                setData({
                    ...data,
                    id:''
                })
            }
        })
    }
    }

    return(
        <div>
            <form className="form-inline" onSubmit={onSave}>
            <table className="table table-bordered" style={{width:'500px'}}>
                <caption><h3><b>회원가입</b></h3></caption>
                <tbody>
                    <tr>
                        <th width='100'>아이디</th>
                        <td>
                            <input type='text' className="form-control" style={{width:'130px'}}
                                name="id" required value={data.id} 
                                onChange={onDataChange}/>
                            <button type="button" className="btn btn-danger btn-sm"
                            style={{marginLeft:'5px'}} onClick={onIdJungbok}>
                                중복체크
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th width='100'>이름</th>
                        <td>
                            <input type='text' className="form-control" style={{width:'130px'}}
                            name="name" onChange={onDataChange} required />
                        </td>
                    </tr>
                    <tr>
                        <th width='100'>비밀번호</th>
                        <td>
                            <input type='password' className="form-control" style={{width:'100px'}}
                            name="pass"  onChange={onDataChange} required/>

                            <input type='password' className="form-control" style={{width:'100px'}}
                            onChange={onPassChange} required/>

                            <span style={{marginLeft:'5px',color:'red'}}>{passOk?' ok':''}</span>
                            {/* true면 ok 출력 아니면 '' */}
                        </td>
                    </tr>
                    <tr>
                        <th width='100'>이메일</th>
                        <td>
                            <input type='text' className="form-control" style={{width:'100px'}}
                            onChange={(e)=>{
                                setEmail1(e.target.value);
                            }}
                            required/>
                            <b>@</b>
                            <input type='text' className="form-control" style={{width:'130px'}}
                            defaultValue={email2} 
                            onChange={(e)=>{
                                setEmail2(e.target.value);
                            }}
                            required/>
                            &nbsp;&nbsp;
                            <select className="form-control" onChange={onEmailChange} >
                                <option value='-'>직접입력</option>
                                <option value='naver.com'>네이버</option>
                                <option value='nate.com'>네이트</option>zoq
                                <option value='gmail.com'>구글</option>
                                
                            </select>
                            <button type="button" className="btn btn-danger btn-sm"
                            onClick={()=>{
                                setData({
                                    ...data,
                                    email:`${email1}@${email2}`,
                                    emailok: true
                                }); //중복확인누르면 합치는거임.
                                alert("이메일중복확인");
                            }}>
                                이메일중복
                            </button>
                            
                        </td>
                    </tr>
                    <tr>
                        <th width='100'>핸드폰</th>
                        <td>
                            <input type='text' className="form-control" style={{width:'180px'}}
                            name="hp" required
                            onChange={onDataChange}/>
                        </td>
                    </tr>
                    <tr>
                        <th width='100'>주소</th>
                        <td>
                            <input type='text' className="form-control" style={{width:'350px'}}
                            name="addr" required
                            onChange={onDataChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} style={{textAlign:'center'}}>
                            <button type="submit" className="btn btn-info">가입하기</button>
                            <button type="button" className="btn btn-warning"
                                style={{marginLeft:'5px'}} onClick={()=>{
                                    navi("/member/list")
                                }}>회원명단</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </form>
        </div>
    )
}
export default Member;