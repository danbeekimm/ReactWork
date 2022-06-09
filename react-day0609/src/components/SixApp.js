import React,{useState} from "react";

const SixApp=()=>{
    const [show,setShow]=useState(true);
    const [visible,setVisible]=useState('visible');
    const [line,setLine]=useState('solid');
    const [borderColor,setBorderColor]=useState("antiquewhite");

    const changeLine=(e)=>{
        setLine(e.target.value);
    }
    
    const changeBorderColor=(e)=>{
        setBorderColor(e.target.value);
    }

    return(
        <div>
            <h3 className="alret alert-danger">SixApp컴포넌트</h3>
            <button type="button" className="btn btn-info" onClick={()=>{
                setShow(!show);
            }}>
                boolean으로 이미지 보였다 안보였다 하기
            </button>
            { show && <img src="../image2/c1.png" alt=""/>} 
            <img src="../image2/c1.png" alt=""/>
            {/* show 가 true면 보이고 아니면안보임.불린형과 연산을해서 할수있음 */}
            <br></br><br></br>
            <button type="button" className="btn btn-warning" onClick={()=>{
                setVisible(visible==='hidden'?'visible':'hidden');
            }}>
                Style로 이미지 보였다 안보였다 하기~~~
            </button>
            <br></br><br></br><br></br>
            <select className="form-control" onChange={changeLine} style={{width:'200px',fontSize:'15px'}}>
                <option>solid</option>
                <option>dotted</option>
                <option>groove</option>
                <option>double</option>
                <option>inset</option>
                <option>outset</option>
                <option>dashed</option>
                <option>ridge </option>
            </select><br></br>

            <select className="form-control" onChange={changeBorderColor} style={{width:'200px',fontSize:'15px'}}>
                <option>#A0AFFF</option>
                <option>#7E6ECD</option>
                <option>#70D2B4</option>
                <option>#69A8AA</option>
                <option>#FF7A85</option>
                <option>#D7567F</option>
                <option>#CD3C3C</option>
                <option>#FF9473</option>
                <option>#957745</option>
                <option>#5a5a5a</option>
                
            </select><br></br>
            
            <img src="../image2/c5.png" alt="" style={{visibility:visible, borderStyle:line , borderColor:borderColor}}
            className="greenline"/>
            <img src="../image2/c5.png" alt=""/>
            
        </div>
    )
}
export default SixApp;