import React, { useContext, useEffect, useState} from "react"
import {useParams, useNavigate} from 'react-router-dom';
import { PlayerStateContext } from "../App"
import MyHeader from "./Header"


const ProfileDetail = () =>{

    const navigate=useNavigate()

    const {id} = useParams();

    const [data,setData]=useState();    

    const userData= useContext(PlayerStateContext)

    useEffect(()=>{
        if (userData.length >=1){
            const targetUser= userData.find(
                (it)=> parseInt(it.id)=== parseInt(id))
                
                if (targetUser){
                    console.log('1번조건 실행됨',id)
                    console.log(targetUser) 
                    setData(targetUser)
                }
                else {
                    alert("없어")
                    navigate('/', {replace:true})
                };
    }
    },[id,userData]);

    // const mapUserData= userData.map((item,idx)=>{console.log(item.id)})
    return (
        <div className="ProfileDetail">
            <MyHeader title={'Profile component'}/>
        <div className="ProfileDetailInformation">
            <div className="ProfileImage">Image file to be uploaded</div>

            {/* TODO: 이미지 파일 업로드 로직 처리 + assets에 있는 이미지 파일 불러오기 서버와 어떻게 연동? */}
            <div className="ProfileInformation">
            {
            data&&    
            <ul>
                    <li>Name:{data.name}</li>
                    <li>Age:{data.age}</li>
                    <li>Position:{data.position}</li>
                    <li>Height:{data.height}</li>
                    <li>Weight:{data.weight}</li>
                    
                </ul>
            }
             
            </div>
        </div>

        </div>
    )
}

// data.defaultProps = {
//     userData: []
//   }
export default ProfileDetail