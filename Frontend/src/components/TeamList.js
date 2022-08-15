import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { TeamStateContext } from "../App"

export const Manage = ({team}) => {

    const navigate= useNavigate()

   
    return (
        <div className="TeamListContainer" onClick={()=>navigate(`/${team.id}`)}>
            <div className="teamTitle">{team.name}</div>
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