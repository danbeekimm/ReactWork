import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import axios from "axios";

const BoardForm=()=>{
    let loginok=localStorage.loginok;
    let id=localStorage.myid;
    const navi=useNavigate();

    const initFunc=()=>{
        if(loginok==null){
            alert("먼저 로그인 후 글을 작성해주세요");
            navi("/login"); //login으로 가기

        }
    }

    useEffect(()=>{
        initFunc();
    },[]);

    return(
        <div>
            <form>
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
                                    <input type='file' className="form-control" style={{width:'250px'}} required/>
                                </td>
                            </tr>
                            <tr>
                                <th style={{backgroundColor:'#ddd'}} width='100'>제목</th>
                                <td>
                                    <input type='text' className="form-control" style={{width:'300px'}} required/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <textarea className="form-control" required style={{width:'400px',height:'120px'}}></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} align="center">
                                    <button type="submit" className="btn btn-info">게시글저장</button>
                                    <button type="button" className="btn btn-success"
                                    style={{marginLeft:'10px'}}
                                    onClick={()=>{
                                        navi("/board/list")
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