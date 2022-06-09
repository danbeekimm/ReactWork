import React from "react";
import './MyStyle.css';
import img16 from '../wantit.png';
import imgs from '../image/images.jpg';



const FirstApp=()=>{
    //style 을 변수에지정
    const styleImg1={
        width:'200px',
        border:'5px inset gray',
        marginLeft:'100px',
        marginTop:'20px'
    };
    return( 
    //반드시 하나의 태그로 감싸줘야함. 그안에 여러개가능
        <div> 
            {/* 여기서 주석은 ctrl+/하면 이렇게됨. */}
            <h2 className="line" style={{fontFamily:'Titillium Web',fontSize:'30px'}}>First App Component!!!</h2>
            <div style={{fontSize:'20px',color:'brown',marginLeft:'100px',fontFamily:'Gowun Dodum'}}>
                트레비스스캇 프라그먼트 정말 갖구싶어요..누가봐도 제 신발이에요...
            </div>
            <img src={img16} style={styleImg1} alt=""/>
            {/* 이미지 넣은후 인라인 스타일로 너비, 테두리 지정하기 */}
            <img src={imgs} style={{marginLeft:'20px', width:'100px',border:'3px solid skyblue',borderRadius:'50PX'}} alt=""/>
        
            <h3 style={{fontFamily:'Gowun Dodum'}}>public 영역의 이미지는 직접호출가능</h3>
            <img src="../ddo.png" alt="" style={{width:'200px'}}/>
        
        </div>
        
    )
}
export default FirstApp; //이름을 맘대로지정하고싶을땐 default 쓰고사용.