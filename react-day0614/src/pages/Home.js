import React from "react";
import '../App.css';
import {useNavigate} from 'react-router-dom';

const Home=()=>{
    const navi=useNavigate();
    return(
        <div>
            <button type="button" className="btn btn-danger"
            onClick={()=>{
                navi("/about");
            }}>About</button>

            <button type="button" className="btn btn-info"
            onClick={()=>{
                navi("/about/순자")
            }}>About2</button>

            <button type="button" className="btn btn-success"
            onClick={()=>{
                navi("/food/5/2") //숫자는 사진
            }}>점심메뉴</button>

            <button type="button" className="btn btn-warning"
            onClick={()=>{
                navi("/food/6/8")
            }}>저녁메뉴</button>
            
        </div>
    )
}
export default Home;