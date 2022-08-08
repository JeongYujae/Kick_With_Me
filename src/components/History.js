import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PlayerStateContext } from "../App";

const History = ({content}) =>{
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

    // const splitByYear= (content) => {
    //     const newContent= content.split('/');
    //     const newList= newContent.map((cont,index)=> <li key={index}>{cont}</li>)

    //     console.log(newList)
    //     return newList

    //     }

        // const newReturn = content.split('/').map((cont,idx) =>{
        // });
        // console.log(newReturn)

    return (
        <div className="HistoryBox">
            {data && data.history.split('/').map((cont,index)=><li key={index}>{cont}</li>)}
            
            {/* Histroy components
            {data &&<button onClick={splitByYear(data.history)} /> } */}
            {/* {data && splitByYear(data.history)} */}
        </div>
    )
}

export default History