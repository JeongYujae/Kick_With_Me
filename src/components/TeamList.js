import React, { useContext } from "react"
import { TeamStateContext } from "../App"

export const Manage = ({team}) => {

    const onClick= () => {
        //TODO!! DB 구현해서 내 유저수를 DB에 추가하도록 구현 + User 수 가 초과하면 참여 불가 메세지까지 구현
        alert('Succesfully Joined!')
    }
   
    return (
        <div className="teamListContainer">
            <div className="teamTitle">{team.name}</div>
            <div className="TeamInfo">
                {/* 디브 건들이긴 */}
            <div>Age: {team.age}</div>
            <div>Location: {team.location}</div>
            <div>Level: {team.level}</div>
            </div>
        </div>
    )
}



const TeamList= () => {

    const teamData= useContext(TeamStateContext)
    console.log(teamData)

    return(
        <div>
        {teamData.map(team=> (
        <Manage team={team} key={team.id} />
        ))}
        </div>
    )
}

export default TeamList