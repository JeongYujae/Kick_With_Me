import React from "react";
import MyHeader from "../components/Header";
import TeamList from "../components/TeamList";

const Team = () => {
    // const {id} = useParams();

    return(
        <div>
            <MyHeader title={'Team List'}/>
            <TeamList/>
            
        </div>
    )
}

export default Team