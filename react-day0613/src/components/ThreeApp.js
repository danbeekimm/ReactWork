import React,{useState,useEffect} from "react";

const ThreeApp=()=>{
    const [boards,setBoards]=useState([
        {
            no:1,
            writer:'이미자',
            subject:'hello',
            photo:'s1'
        },
        {
            no:2,
            writer:'김단동',
            subject:'휴',
            photo:'s2'
        },
        {
            no:3,
            writer:'너니?',
            subject:'우는애',
            photo:'s9'
        },
        {
            no:4,
            writer:'아님 너니?',
            subject:'우는애',
            photo:'s10'
        },
        {
            no:5,
            writer:'웃으렴',
            subject:'happy',
            photo:'s3'
        },
    ]);
   
    return(
        <div>
        <h3 className="alert alert-info">ThreeApp</h3>
        <table className="table table-bordered" style={{width:'400px'}}>
            <caption><b>배열 객체 출력</b></caption>
            <thead>
                <tr style={{backgroundColor:'#ddd'}}>
                    <th width='60'>번호</th>
                    <th width='100'>사진</th>
                    <th width='300'>제목</th>
                    <th width='300'>작성자</th>
                </tr>
            </thead>
            <tbody>
                {
                    boards.map((row,index)=>(
                        <tr key={index}>
                            <td>{row.no}</td>
                            <td><img alt="" src={`../image/${row.photo}.JPG`}
                            style={{width:'60px'}}/>
                            </td>
                            <td>{row.subject}</td>
                            <td>{row.writer}</td>
                        </tr>
                    ))
                }
            </tbody>

        </table>
        </div>
    )
}
export default ThreeApp;