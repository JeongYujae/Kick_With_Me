import React, { useContext, useEffect, useState} from "react"
import {useParams, useNavigate} from 'react-router-dom';
import { PlayerStateContext } from "../App"
import MyHeader from "./Header"
import Record from "./Record";
import History from "./History"

const ProfileDetail = () =>{


    const [content,setContent]= useState();

    const navigate=useNavigate()

    const {id} = useParams();

    const [data,setData]=useState();    

    const userData= useContext(PlayerStateContext)


    useEffect(()=>{
        if (userData.length >=1){
            const targetUser= userData.find(
                (it)=> parseInt(it.id)=== parseInt(id))
                
                if (targetUser){
                    setData(targetUser)
                }
                else {
                    alert("User Not Found")
                    navigate('/', {replace:true})
                };
    }
    },[id]);


    // const mapUserData= userData.map((item,idx)=>{console.log(item.id)})
    return (
        <div className="ProfileDetail">
            <MyHeader title='Player Profile'/>
            <div className="ProfileDetailInformation">
                <div className="ProfileImage">Image file to be uploaded</div>
                {/* <img src={process.env.PUBLIC_URL+`assets/profile_image_${id}.jpg`}/> */}
                {/* TODO: 이미지 파일 업로드 로직 처리 + assets에 있는 이미지 파일 불러오기 서버와 어떻게 연동? */}
        

                <div className="ProfileInformation">
                {
                data&&    
                <ul>
                        <li>Name:{data.name}</li>
                        <li>Age:{data.age}</li>
                        <li>Position:{data.position}</li>
                        <li>Height:{data.height}cm</li>
                        <li>Weight:{data.weight}kg</li>
                        
                    </ul>
                }
                
                </div>

                <div className="Introduce">
                    <div className="Introduce_title">What kind of player are you?</div>
                    <div className="Introduce_content">{data && data.introduce}</div>
                </div>
            </div>

            <div className="HistoryRecord">
                <div className="ButtonBox">
                    <button onClick={()=>setContent(false)}>History</button>
                    <button onClick={()=>setContent(true)}>Record</button>

                </div>

                <div className="HistoryRecordContent">
                    {content ? <Record/>: <History/> }
                </div>
            </div>
        </div>
    )
}

// History.defaultProps = {
//     History: []
//   }
export default ProfileDetail