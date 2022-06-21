import React,{useState,useEffect} from "react";
import '../App.css';
import axios from "axios";
import { LocalLaundryService } from "@mui/icons-material";

const Logout=()=>{
    const [name,setName]=useState('');
    // const id=localStorage.myid;
    

    // const getlogindata=()=>{
    
    //     const BACKURL=process.env.REACT_APP_SPRING_URL;
    //     console.log("id"+id);
    //     let LogoutUrl=BACKURL+'member/logout?id='+id;
    //     axios.get(LogoutUrl)
    //     .then (res=>{
    //         console.log(res.data);
    //         setName(res.data);
            
    //     })

    // }

    // const LogoutId=()=>{
    //             localStorage.loginok=null;
    //             localStorage.myid=null;
    //             window.location.reload(); 
    // }

    // useEffect (()=>{
    //     getlogindata();
    // },);

    let id=localStorage.myid;

    const initFunc=()=>{
        
        const url=process.env.REACT_APP_SPRING_URL+"member/logout?id="+id;
        axios.get(url)
        .then(res=>{
            setName(res.data);
        })

    }
    const btnLogout=()=>{
        localStorage.removeItem("loginok");
        localStorage.removeItem("myid");
        window.location.reload();
    }
    useEffect(()=>{
        initFunc();

    },[]);//처음렌더링시 한번만호출

    return(
        <div>
            <b style={{fontSize:'20px'}}>{name}({id})님</b>
            <button type="button" className="btn btn-danger" style={{marginLeft:'50px'}}
            onClick={btnLogout}>로그아웃</button>
            {/* <h1>{name}{id}님</h1>
            <button type="button" className="btn btn-warning" onClick={LogoutId}>로그아웃</button> */}
        </div>
    )
}
export default Logout;