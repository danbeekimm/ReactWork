
import Alert from "@mui/material/Alert";
import'../App.css';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';


const OneApp=()=>{
    //배열변수선언
    const names =['이미자','강호동','이영자','유재석','김숙'];
    //반복문을 변수에 저장후 출력해도됨
    const colors =['red','yellow','blue','black','orange'];

    const nameList=names.map((name)=>(<li>{name}</li>));// 리턴
    return(
        <div>
            <Alert security="error" style={{fontSize:'20px'}}>OneApp컴포넌트</Alert>
            <span class="material-icons md-24">face</span>
            <span class="material-icons-outlined">
            <AirportShuttleIcon/>
favorite
</span>
        <div>
            <h3>map반복문</h3>
            <ol>{nameList}</ol> 
            {/* ol이라서 번호 붙음 */}
            <hr/>
            <ul>
                {names.map((name,index)=>(<b style={{marginLeft:'10px'}}>{index}:{name}</b>))}
            </ul>
            <hr/>
            {
                colors.map((color)=>(<div className="box" style={{backgroundColor:color}}/>))
            }
        </div>
        </div>
    )
}
export default OneApp;