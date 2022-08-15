import React, { useContext } from "react"
import { TeamStateContext } from "../App"
import MyHeader from "./Header"

export const Manage = ({team}) => {
   
    return (
        <div className="TeamListContainer" onClick={()=>window.location.href=`team/${team.id}`}>
            <div className="TeamTitle">{team.name}</div>
            <div className="TeamInfo">
            <div>Age: {team.age}</div>
            <div>Location: {team.location}</div>
            <div>Level: {team.level}</div>
            </div>
        </div>
    )
}



const TeamList= () => {
    
    const teamData= useContext(TeamStateContext)

    return(
        <div className="GridContainer">
        {teamData.map(team=> (
        <Manage team={team} key={team.id}/>
        ))}
        </div>
    )
}

export default TeamList