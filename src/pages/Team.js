import React from "react";
import MyHeader from "../components/Header";
import TeamList from "../components/TeamList";

const Team = () => {
    // const {id} = useParams();

    return(
        <div>
            <MyHeader/>
            <TeamList/>
            {/* id 해결하기 */}
            
        </div>
    )
}

export default Team