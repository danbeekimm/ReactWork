import React,{useState,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../App.css';
import axios from "axios";

const BoardDetail=()=>{
    const {num,currentPage}=useParams();
    const [dto,setDto]=useState('');
    const navi=useNavigate();
    let detailUrl=process.env.REACT_APP_SPRING_URL+"board/detail?num="+num;
    let photoUrl=process.env.REACT_APP_SPRING_URL+"save/";

    const getData=()=>{
        axios.get(detailUrl)
        .then(res=>{
            setDto(res.data); //controller에서 조회수는 증가한형태로옴
        })
    }

    //처음시작할때 한번만 호출.
    useEffect(()=>{
        getData();

    },[]);

    return(
        <div>
            <table className="table" style={{width:'600px'}}>
                <caption><b><h3>{dto.subject}</h3></b></caption>
                <tbody>
                    <tr>
                        <td>
                            <b>작성자: {dto.name}({dto.id})</b>
                            <span style={{float:'right', color:'gray'}}>{dto.writeday}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img alt="" src={photoUrl+dto.photo} style={{maxWidth:'400px'}}/>
                            <br></br><br></br>
                            <pre style={{backgroundColor:'white',border:'none'}}>
                                <b>{dto.content}</b>
                            </pre>
                        </td>
                    </tr>
                    <tr>
                        <td><b style={{color:'gray'}}>조회 : {dto.readcount}</b></td>
                    </tr>
                    <tr>
                        <td>
                            <button type="button" className="btn btn-info" style={{width:'100px', marginRight:'10px'}}
                            onClick={()=>{
                                navi("/board/form");
                            }}>글쓰기</button>

                            <button type="button" className="btn btn-info" style={{width:'100px', marginRight:'10px'}}
                            onClick={()=>{
                                navi(`/board/list/${currentPage}`);
                            }}>목록</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default BoardDetail;