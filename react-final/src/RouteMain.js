import React from "react";
import './App.css';
import {Route,Routes} from "react-router-dom"
import {About,Info,Main,Menu,Title} from './components';
import Board from './board/Board';
import Login from './login/Login';

import Member from './member/Member';
import {Shop,ShopDetail,ShopForm} from "./shop";
import errimg from './image/31.png';

const RouteMain=()=>{
    return(
        <div>
            <div className="title"><Title/></div>
            <div className="info"><Info/></div>
            <div className="menu"><Menu/></div>
            <div className="main">
                <Routes>
                <Route path="/" element={<Main/>}/>
                {/* Shop */}
                <Route path="/shop/list" element={<Shop/>}/>
                <Route path="/shop/form" element={<ShopForm/>}/>
                <Route path="/shop/detail/:num" element={<ShopDetail/>}/>    

                <Route path="/board/list" element={<Board/>}/>
                <Route path="/member/form" element={<Member/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/about" element={<About/>}/>
                
                <Route path="" element={
                    <div>
                        <img src={errimg} alt=''/>
                        <h1>잘못된 주소입니다.</h1>
                    </div>
                }/>
                </Routes>
            
            </div>
        </div>
    )
}
export default RouteMain;