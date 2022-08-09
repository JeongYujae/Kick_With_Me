import React, { useContext, useEffect } from "react";
import { MatchStateContext } from "../App";


export const Manage = ({match}) => {
   
    return (
        <div>
            <h1>{match.name}</h1>
            <h2>시간:{match.time}</h2>
            <ul>
                <li>참여 인원:{match.player}</li>
                <li>난이도:{match.level}</li>
            </ul>

        </div>
    )
}




const MatchList = () => {
 

    const matchData= useContext(MatchStateContext)

    // match.name 이든 뭐든 이걸 한가지 div 안에 넣는 방법 + 함수를 찾아보쟈
    // let ap= matchData.map((match,id) => <div key={id}>{match.name}</div>)

    // useEffect(()=>{
    //     console.log('마운트 시작')
    // },[matchData])

    return(
        <div>
        {matchData.map(match => (
        <Manage match={match} key={match.id} />
        ))}
        </div>
    )
}

export default MatchList


