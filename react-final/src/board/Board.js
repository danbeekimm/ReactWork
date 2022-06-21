import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import axios from "axios";
import BoardForm from "./BoardForm";
import BoardList1 from "./BoardList1";
import BoardList2 from "./BoardList2";
import BoardList3 from "./BoardList3";
import ArticleIcon from '@mui/icons-material/Article';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';


const Board=()=>{
    const [show,setShow]=useState(1);
    const navi=useNavigate();

    


    return(
        <div>
            <ArticleIcon  style={{fontSize:'30px', cursor:'pointer' , color:show===1?'gray':'black'}} onClick={()=>{
                setShow(1);}}
                />
            <DashboardCustomizeIcon style={{fontSize:'30px', cursor:'pointer', color:show===2?'gray':'black'}} onClick={()=>{setShow(2);
            }}/>
            <ArtTrackIcon style={{fontSize:'32px', cursor:'pointer', color:show===3?'gray':'black'}} onClick={()=>{setShow(3);
            }}/>
            <div>
            {show===1?<BoardList1/>:show===2?<BoardList2/>:<BoardList3/>}
        </div>
            <br></br>
        <h1>글쓰기</h1>
            <button type="button" className="btn btn-warning"
            style={{marginLeft:'5px'}} onClick={()=>{
                navi("/board/form")
                    }}>글쓰기</button>
        </div>
    )
}
export default Board;