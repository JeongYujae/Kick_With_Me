import React from "react"
import MyHeader from "../components/Header"
import MatchList from "../components/MatchList"

const JoinMatch = () => {
    return (
        <div className="JoinMatch">
            <MyHeader title={'Match List'}/>
            <MatchList/>
        </div>
    )
}

export default JoinMatch