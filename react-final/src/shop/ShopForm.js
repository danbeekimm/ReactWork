import React, {useState} from "react";
import '../App.css';
import axios from "axios";

const ShopForm = () =>{
    const [photo, setPhoto] = useState('');
    const [sangpum, setSangpum] = useState('');
    const [su, setSu] = useState('');
    const [dan, setDan] = useState('');

    //url 등록
    let uploadUrl = "http://localhost:9001/shop/upload";
    let photoUrl = "http://localhost:9001/save/";

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

    return(
        <div>
            <table className="table table-bordered" style={{width:'600px'}}>
                <caption><b>상품 등록</b></caption>
                <tbody>
                    <tr>
                        <th width='100' style={{backgroundColor:'#d5bbdd'}}>상품명</th>
                        <td width='300'>
                            <input type='text' className="form-control"
                            style={{width:'250px'}}/>
                        </td>
                        <th></th>
                    </tr>
                    <tr>
                        <th width='100' style={{backgroundColor:'#d5bbdd'}}>상품사진</th>
                        <td width='300'>
                            <input type='file' className="form-control"
                            style={{width:'250px'}} onChange={uploadImage}/>
                        </td>
                        <th>{photo}</th>
                    </tr>
                    <tr>
                        <th width='100' style={{backgroundColor:'#d5bbdd'}}>수 량</th>
                        <td width='300'>
                            <input type='text' className="form-control"
                            style={{width:'120px'}}/>
                        </td>
                        <th></th>
                    </tr>
                    <tr>
                        <th width='100' style={{backgroundColor:'#d5bbdd'}}>단 가</th>
                        <td width='300'>
                            <input type='text' className="form-control"
                            style={{width:'150px'}}/>
                        </td>
                        <th></th>
                    </tr>
                    <tr style={{height:'160px'}}>
                        <td  colSpan='2'>
                            <img alt=""src={photoUrl + photo} s tyle={{width:'120px'
                        ,marginLeft:'130px'}}/>
                        </td>
                        <td>
                            <button type="button" className="btn btn-success"
                            style={{width:'120px', height:'120px', marginLeft:'30px'}}>
                                상품등록</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ShopForm;