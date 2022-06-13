import React,{useState} from "react";
import'../App.css';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { fontSize } from '@mui/system';





interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
    }
    
    const ExpandMore = styled((props: ExpandMoreProps) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        }),
    }));

    


const ThreeApp=()=>{ //수우우우우
        const [names,setNames]=useState(['이영자','강호동','유재석','김숙','송은이']);
        const [irum,setIrum]=useState("");

 //추가버튼이벤트
        const btnInsert=()=>{
            if(irum===''){
                alert("이름입력후 출력해주세요");
                return;
            }
            setNames(names.concat(irum));//배열에 irum 데이터 추가
            setIrum('');
        }
//입력 keyup이벤트
        const txtEnter=(e)=>{
            if(e.key==='Enter'){
                btnInsert();
                e.target.value='';
            }
        }
//입력 change이벤트
        const txtInput=(e)=>{
            
            setIrum(e.target.value);
        }
    //더블클릭시 이름 삭제 이벤트
    const dataRemove = (index) =>{
        // console.log(index);

        //방법1
        // setNames([
        //     ...names.slice(0,index),
        //     ...names.slice(index+1, names.length) //index 번지만 빼고 잘라서 넣음
        // ]);

        //방법2
        setNames(names.filter((item,i)=>i!==index)); //index 번지만 걸러냄
        }

        const changePhoto=(e)=>{
            setPhoto(Number(e.target.value));
        }
//업


        const [expanded, setExpanded] = React.useState(false);
        const handleExpandClick = () => {
                    setExpanded(!expanded);
                };


        const [photo, setPhoto] = useState();
        const [food, setFood] = useState('갈비립');
        const [message, setMessage] = useState('그요일');

    return(
        <div>
            <Alert severity="success" style={{fontSize:'20px'}}> 컴포넌트 연습</Alert>
        &nbsp;
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            title="Danbee Kim"
            subheader="September 14, 2016"
        />
        <CardMedia
            component="img"
            height="194"
            image={`../food/${food}.jpg`}
            alt="Paella"
            
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary" style={{fontSize:"30px"}}>
        {message}
        </Typography>

        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
            <ShareIcon />
            </IconButton>
            <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon />
            </ExpandMore>
        </CardActions>
    </Card>
    
            
        <br></br>
    <div className='food'>
        <h3><b>좋아하는 음식을 선택하세요</b></h3>
        <select className="form-control" 
        onChange={(e)=>{
            setFood(e.target.value)
        }}>
            {
                //1부터 12까지 반복해서 option 제공
                [...new Array(12)].map((a,index)=>(<option>{index+1}</option>))
            }
        </select>

        <br/><br/>
        <h3><b>메세지를 입력하세요</b></h3>
        <input className="form-control" style={{width: '500px'}}
        defaultValue={message}
        onKeyUp={(e)=>{
            if(e.key==='Enter'){
                setMessage(e.target.value);
            }
        }}/>

    </div>

    <div style={{marginLeft:'100px'}}>
            <TextField id="outlined-basic" label="이름입력" variant="outlined" size="small"
            style={{width:'150px'}} onChange={txtInput} onKeyUp={txtEnter} value={irum}/>&nbsp;
            {/* value={irum}연결되어있어서 지워짐 */}
            <Button variant="outlined"  size="medium" color="error" style={{marginLeft:'5px'}}
            onClick={btnInsert}>추가</Button>
            </div>
            <br/>
            <h5>이름에서 더블클릭하면 삭제됩니다</h5>
            <ul>
                {
                    names.map((na,index)=>(
                        <li className="data" key={index} onDoubleClick={()=>dataRemove(index)}>{na}</li>
                        // unique한 키값 넣어주기 key={}
                    ))
                }
            </ul>
    </div>
    

    )
}
export default ThreeApp;