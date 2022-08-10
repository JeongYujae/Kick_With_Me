import React, { useContext } from "react";
import { MatchStateContext } from "../App";


export const Manage = ({match}) => {

    const onClick= () => {
        //TODO!! DB 구현해서 내 유저수를 DB에 추가하도록 구현 + User 수 가 초과하면 참여 불가 메세지까지 구현
        alert('Succesfully Joined!')
    }
   
    return (
        <div className="matchListContainer">
            <section className="matchTitle">{match.name}</section>
            <section className="matchTime">{match.time.slice(0,10)}<br/>{match.time.slice(11,match.length)}</section>
            <div className="matchPlayerLevel">
                <div>Player: {match.player}</div>
                <div>Level: {match.level}</div>
                <button onClick={onClick}>JOIN</button>

            </div>

            

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


