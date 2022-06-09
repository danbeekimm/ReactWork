import React,{Component} from "react";
import '../App.css';

//class 타입으로 만든거지만 oneApp과 같은거임.
class TwoApp extends Component{
    constructor(props){

        super(props);

        this.state={
            number:0
        }
        this.numberIncre=this.numberIncre.bind(this);
        this.numberDecre=this.numberDecre.bind(this);
    }

    //이벤트 함수
    numberIncre=()=>{
        if(this.state.number===10){
            alert("10까지만증가");
            return;
        }
        this.setState({
            number:this.state.number+1
        })
    }

    numberDecre=()=>{
        if(this.state.number===0){
            alert("0까지만감소");
            return;
        }
        this.setState({
            number:this.state.number-1
        })
    }
    

    render(){
        return(
            <div>

                <h3 className="alert alert-success">TwoApp클레스타입</h3>
                <div className="number">{this.state.number}</div>
                <button type="button" style={{marginLeft:'70px'}}
                onClick={this.numberIncre}>증가</button>
                <button type="button" style={{marginLeft:'10px'}}
                onClick={this.numberDecre}>감소</button>
            </div>
        )
    }
}
export default TwoApp;