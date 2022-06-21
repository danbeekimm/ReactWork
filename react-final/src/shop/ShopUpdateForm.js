import React, {useEffect, useState} from "react";
import '../App.css';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const ShopUpdateForm = () =>{
    const {num} = useParams();
    const [photo, setPhoto] = useState('');
    const [sangpum, setSangpum] = useState('');
    const [su, setSu] = useState('');
    const [dan, setDan] = useState('');

    const navi = useNavigate();

    //url 등록
    let uploadUrl = "http://localhost:9001/shop/upload";
    let photoUrl = "http://localhost:9001/save/";
    let detailUrl = "http://localhost:9001/shop/detail?num="+num;
    let updateUrl = "http://localhost:9001/shop/update"

    
     //file change 시 호출 이벤트
        const uploadImage = (e) =>{
        const uploadFile = e.target.files[0];
        const imageFile = new FormData();
        imageFile.append("uploadFile",uploadFile); //uploadFile = spring에서 MultipartFile에서 받아주는 이름

        axios({
            method: 'post',
            url: uploadUrl,
            data: imageFile,
            headers:{'Content-Type':'multipart/form-data'}
        }).then(res=>{
            setPhoto(res.data); //백엔드에서 보낸 변경된 이미지명을 photo 변수에 넣는다
        }).catch(err=>{
            alert(err);
        });
    }


    //추가하는 함수 이벤트
    const onDataReceive = () =>{
        axios.get(detailUrl) //key:value (spring 변수와 같아야함)
        .then(res=>{
            //insert 성공 후 처리할 코드들
            setSangpum(res.data.sangpum);
            setSu(res.data.su);
            setDan(res.data.dan);
            setPhoto(res.data.photo);
            
            //목록으로 이동
            
        }).catch(err=>{
            alert(err.data);
        })
    }

    //처음렌더링시 위의 함수 호출
    useEffect(()=>{
        onDataReceive();
    },[]);

    //수정하는 함수 이벤트
    const onUpdate = () =>{
        axios.post(updateUrl, {num,sangpum,su,dan}) //key:value (spring 변수와 같아야함)
        .then(res=>{
            //insert 성공 후 처리할 코드들
            //목록으로이동
            
            
            //상세보기페이지로이동
            navi(`/shop/detail/${num}`);
        })
    }



    return(
        <div>
            <table className="table table-bordered" style={{width:'600px'}}>
                <caption><b>상품 수정(번호 : {num})</b></caption>
                <tbody>
                    <tr>
                        <th width='100' style={{backgroundColor:'#d5bbdd'}}>상품명</th>
                        <td width='300'>
                            <input type='text' className="form-control" defaultValue={sangpum}
                            style={{width:'250px'}}
                            onChange={(e)=>{
                                setSangpum(e.target.value);
                            }}/>
                        </td>
                        <th>{sangpum}</th>
                    </tr>
                    <tr>
                        <th width='100' style={{backgroundColor:'#d5bbdd'}}>상품사진</th>
                        <td width='300'>
                            <input type='file' className="form-control" defaultValue={photo}
                            style={{width:'250px'}} onChange={uploadImage}/>
                        </td>
                        <th>{photo}</th>
                    </tr>
                    <tr>
                        <th width='100' style={{backgroundColor:'#d5bbdd'}}>수 량</th>
                        <td width='300'>
                            <input type='text' className="form-control" defaultValue={su}
                            style={{width:'120px'}}
                            onChange={(e)=>{
                                setSu(e.target.value);}}/>
                        </td>
                        <th>{su}</th>
                    </tr>
                    <tr>
                        <th width='100' style={{backgroundColor:'#d5bbdd'}}>단 가</th>
                        <td width='300'>
                            <input type='text' className="form-control" defaultValue={dan}
                            style={{width:'150px'}}
                            onChange={(e)=>{
                                setDan(e.target.value);}}/>
                        </td>
                        <th>{dan}</th>
                    </tr>
                    <tr style={{height:'160px'}}>
                        <td  colSpan='2'>
                            <img alt=""src={photoUrl + photo} style={{width:'120px'
                        ,marginLeft:'130px'}}/>
                        </td>
                        <td>
                            <button type="button" className="btn btn-success"
                            style={{width:'120px', height:'120px', marginLeft:'30px'}}
                            onClick={onUpdate}>
                                상품수정</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ShopUpdateForm;