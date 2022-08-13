import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PlayerStateContext } from "../App";

const Record = () =>{
    const userData= useContext(PlayerStateContext)
    const {id} = useParams();

    const navigate= useNavigate()

    const [data,setData]=useState();

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
    },[id,userData]);
    
    return (
        <div className="RecordBox">
        {data && data.record.split('/').map((cont,index)=><li key={index}>{cont}</li>)}
        </div>
    )
}

export default Record