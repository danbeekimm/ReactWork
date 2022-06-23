import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import axios from "axios";

const BoardForm=()=>{
    const [photo,setPhoto]=useState('');
    const [subject,setSubject]=useState('');
    const [content,setContent]=useState('');

    //url 선언
    let uploadUrl=process.env.REACT_APP_SPRING_URL+"board/upload";
    let insertUrl=process.env.REACT_APP_SPRING_URL+"board/insert";
    let photoUrl=process.env.REACT_APP_SPRING_URL+"save/";

    let loginok=localStorage.loginok;
    let id=localStorage.myid;
    const navi=useNavigate();

    const initFunc=()=>{
        if(loginok==null){
            alert("먼저 로그인 후 글을 작성해주세요");
            navi("/login"); //login으로 가기

        }
    }

    //이미지 업로드 이벤트
    const imageUpload=(e)=>{
        const uploadFile=e.target.files[0];
        const imageFile=new FormData();
        imageFile.append("uploadFile",uploadFile);

        axios({
            method:'post',
            url:uploadUrl,
            data:imageFile,
            headers:{'Context-Type':'multipart/form-data'}
        }).then(res=>{
            setPhoto(res.data);
        })
    }

    //submit 이벤트
    const onBoardInsert=(e)=>{
        e.preventDefault(); //보내기

        axios.post(insertUrl,{id,photo,subject,content})
        .then(res=>{
            navi("/board/list/1");
        })
    }


    useEffect(()=>{
        initFunc();
    },[]);

    return(
        <div>
            <img alt="" src={photoUrl+photo} className="imgphoto"/>
            <form onSubmit={onBoardInsert}>
                    <table className="table table-bordered" style={{width:'400px'}}>
                        <caption><h3>게시판글쓰기</h3></caption>
                        <tbody>
                            <tr>
                                <th style={{backgroundColor:'#ddd'}} width='100'>아이디</th>
                                <td><b>{id}</b></td>
                            </tr>
                            <tr>
                                <th style={{backgroundColor:'#ddd'}} width='100'>대표이미지</th>
                                <td>
                                    <input type='file' className="form-control" style={{width:'250px'}} required
                                    onChange={imageUpload}/>
                                </td>
                            </tr>
                            <tr>
                                <th style={{backgroundColor:'#ddd'}} width='100'>제목</th>
                                <td>
                                    <input type='text' className="form-control" style={{width:'300px'}} required
                                    onChange={(e)=>{
                                        setSubject(e.target.value);
                                    }}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <textarea className="form-control" required style={{width:'400px',height:'120px'}}
                                    onChange={(e)=>{
                                        setContent(e.target.value);
                                    }}></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} align="center">
                                    <button type="submit" className="btn btn-info">게시글저장</button>
                                    <button type="button" className="btn btn-success"
                                    style={{marginLeft:'10px'}}
                                    onClick={()=>{
                                        navi("/board/list/1")
                                    }}>게시판메인</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </form>
        </div>
    )
}
export default BoardForm;