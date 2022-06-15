import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

const Shop=()=>{
    const navi=useNavigate();

    return(
        <div>
            <button type="button" className="btn btn-danger"
                style={{width:'120px'}}
                onClick={()=>{
                    navi("/shop/form") //상품 폼 페이지로 이동
                }}>상품등록
            </button>
            <h1>shop 목록출력</h1>
        </div>
    )
}
export default Shop;