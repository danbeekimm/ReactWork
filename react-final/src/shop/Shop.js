import React,{useState,useEffect} from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ShopRowItem from "./ShopRowItem";

const Shop=()=>{
    
    const navi=useNavigate();
    //백엔드에서 받아올 리스트 데이타 변수
    const [shopList,setShopList]=useState([]);
    //데이타 가져오는 함수
    const list=()=>{
        let url="http://localhost:9001/shop/list";

        axios.get(url).then(res=>{ //스프링으로받아온 list를 shoplist에 넣기
            setShopList(res.data); //res로 받은 data를 넣어주기
            console.log("len="+res.data.length);

        })
    }

        //처음 렌더링시 딱 한번 데이타 가져오기
            useEffect(()=>{
            //  console.log("list");
                list();
            },[]);

    return(
        <div>
            <button type="button" className="btn btn-danger"
                style={{width:'120px'}}
                onClick={()=>{
                    navi("/shop/form") //상품 폼 페이지로 이동
                }}>상품등록
            </button>
            <hr/>
            <table className="table table-bordered" style={{width:'500px'}}>
                <thead>
                    <tr style={{backgroundColor:"#ddd"}}>
                        <th width='50'>번호</th>
                        <th width='350'>상품명</th>
                        <th >상세보기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        shopList.map((row,idx)=>(
                            <ShopRowItem key={idx} idx={idx} row={row}/>
                        ))
                    }
                </tbody>
            </table>
            
        </div>
    )
}
export default Shop;