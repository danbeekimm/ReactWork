import React, {useState, useEffect} from "react";
import '../App.css';
import {useParams, useNavigate} from 'react-router-dom';
import axios from "axios";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ShopDetail = () =>{


    const navi = useNavigate();
    const {num} = useParams();
    const [data, setData] = useState('');

    //삭제다이얼로그에 대한 코드 추가
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //url 등록
    let detailUrl = "http://localhost:9001/shop/detail?num="+num;
    let photoUrl = "http://localhost:9001/save/";
    let deleteUrl = "http://localhost:9001/shop/delete?num="+num;

    //스프링으로부터 num에 해당하는 data 받기
    const onDataReceive = () =>{
        axios.get(detailUrl)
        .then(res=>{
            console.log(res.data.sangpum);
            setData(res.data);
        }).catch(err=>{
            alert(err.data);
        })

    }
    //삭제시 호출할 함수
    const onDelete=()=>{
        console.log("delete")
       
        axios.delete(deleteUrl)
        .then(res=>{
            //삭제후 목록으로이동
            navi("/shop/list")
        })
        handleClose();//다이얼로그닫기
    }

    //처음 렌더링 시 위의 함수 호출
    useEffect (()=>{
        onDataReceive();
    },[]);


    return(

        <div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                <h4>상품삭제확인</h4>
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <h5>{data.sangpum}을 삭제하려면 [확인] 버튼을 눌러주세요</h5>
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>취소</Button>
                <Button onClick={onDelete} autoFocus>
                    확인
                </Button>
                </DialogActions>
            </Dialog>

            <h1>{num}</h1>
            <table className="table table-bordered" style={{width:'600px'}}>
                <caption><h3>상품 상세보기</h3></caption>
                <tbody>
                    <tr style={{height:'150px'}}>
                        <td width='350' rowSpan='4'>
                            <img src={photoUrl + data.photo} className="large" alt=''/>
                        </td>
                        <td>
                            <h3>상품명 : {data.sangpum}</h3>
                        </td>
                    </tr>
                    <tr>
                        <td><h3>수량 : {data.su}</h3></td>
                    </tr>
                    <tr>
                        <td><h3>단가 : {data.dan}</h3></td>
                    </tr>
                    <tr>
                        <td><h3>입고일 : {data.ipgoday}</h3></td>
                    </tr>
                    <tr>
                        <td colSpan='2' align="center" className="detail">
                            <button type="button" className="btn btn-info"
                            onClick={()=>{
                                navi("/shop/list")
                            }}>목록</button>
                            <button type="button" className="btn btn-danger"
                            onClick={()=>{
                                navi("/shop/form")
                            }}>상품추가</button>
                            <button type="button" className="btn btn-success">수정</button>
                            <button type="button" className="btn btn-warning"
                            onClick={handleClickOpen}>삭제</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ShopDetail;