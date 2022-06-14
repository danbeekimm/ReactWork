import React from "react";
import {Route,Routes} from 'react-router-dom';
import {Home,About,Food} from './pages' //자동으로 pages의 index.js가 임포트됨.

//index.js은 폴더명만 쓰면 자동으로됨.
import Menu from './components/Menu';


import './App.css';

const RouterMain=()=>{
    return(
        <div>
            {/* 모든페이지에서 공통으로 포함되는 컴포넌트나 이미지 */}
            <h1 className="alert alert-info title">React Router 공부하기</h1>
            <Menu/>
          
            <img src={`${process.env.PUBLIC_URL}/image/11.jpg`} alt='' className="main_photo"/>
            <hr className="line" align="left"/>
            <div className="main_comp">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/about/:name" element={<About/>}/>
                <Route path="/food/:food1/:food2" element={<Food/>}/>
                
                <Route path="/login/*" element={
                    <div>
                        <h1>로그인 기능은 아직 구현 전 입니다.</h1>
                        <img alt="" src="../image/c3.png"/>
                        <h3>이거 드시고 오세요</h3>
                    </div>
                }/>
                {/* 그외의 잘못된 매핑주소일경우 */}
                <Route path="*" element={
                    <h1>잘못된 주소입니다</h1>
                }/>
            </Routes>
            </div>
        </div>
    )
}
export default RouterMain;