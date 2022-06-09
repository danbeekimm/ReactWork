import React,{Component} from "react";//,{Component}: export 할땐 클래스이름 가져와야함.이렇게쓸거면
import './MyStyle.css';
import img1 from '../image/wantit.png';



//export default class SecondApp extends React.Component
let helloElement =<h1 style={{fontFamily:'Gowun Dodum'}}>Hello 트레비스 스캇</h1>
export default class SecondApp extends Component //라고쓸수있음.
{
    //생성자
    constructor(){
        super();
        console.log("생성자 호출");
    }

    render(){
        const imgStyle={
            border:'3px solid pink',
            borderRadius:'100px',
            width:'130px'
        }
        return(
            <div>
                <h1 style={{fontFamily:'Gowun Dodum',fontSize:'3em'}}>SeconApp 입니다</h1>
                <h1 style={{fontFamily:'Gowun Dodum'}}>김단비 신발하나 줘라!!쫌!!</h1>
                <h1 style={{fontFamily:'Gowun Dodum'}}>우리애 불쌍하지도 않아여?!</h1>
                <img alt="" src={img1} style={imgStyle}/>
                {helloElement}
                {helloElement}
                {helloElement}
            </div>
        )
    }
}