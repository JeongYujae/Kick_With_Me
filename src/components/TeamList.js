import React, { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { TeamStateContext } from "../App"
import MyHeader from "./Header"

export const Manage = ({team}) => {



   
    return (
        <div className="TeamListContainer">
            <div className="TeamTitle">{team.name}</div>
            <div className="TeamInfo">
                <div>Age: {team.age}</div>
                <div>Location: {team.location}</div>
                <div>Level: {team.level}</div>
            </div>
        </div>
        
    )
}



const TeamList= ({id}) => {

    const teamData= useContext(TeamStateContext)

    
    // const id= useParams()
    

    // const id = useParams()

    const navigate= useNavigate()

    const goDetail= ({team}) => {

        //TODO!! DB 구현해서 내 유저수를 DB에 추가하도록 구현 + User 수 가 초과하면 참여 불가 메세지까지 구현
        console.log(team.id)

        teamData.map((data,idx)=>{
            if (data.id ===team.id) {
                console.log('if문')
            }
    })
    
        // console.log(id)
        // navigate(`/team/${id}`)
    }

    return(
        <div>
            <div className="GridContainer" >
            {teamData.map(team=> (
            <Manage team={team} key={team.id} onClick={()=>goDetail({team})}/>
            ))}
            </div>
            <div className="TeamDetailPreview">
                여기는 팀 프리뷰에요
            </div>
        </div>
    )
}

export default TeamList