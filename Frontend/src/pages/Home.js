import React, { useEffect, useState } from "react"
import CurrentTime from "../components/CurrentTime"
import Weather from "../components/Weather"
import JoinMatch from "./JoinMatch"
const Home = () =>{

    return(
        <div className="Home">
            <div className="TopPart">
            <section className="WeatherArea">
                <Weather/>
            </section>
           
            <section className="ProfileArea">
                 {/* TODO: Your profile을 누르면 login된 정보에 맞춰서 자기 유저의 정보를 보여줌(BE와 연동 후) */}
                Your profile box
                asdasdasd
                asdasd
            </section>

            <section className="TimeArea">
                <CurrentTime/>
            </section>
            
            </div>



            
            <div className="BottomPart">
            <section className="MatchArea" onClick={()=>window.location.href='http://localhost:3000/match'}>
                <div>BE READY FOR THE MATCH</div>
            </section>

            <section className="TeamArea" onClick={()=>window.location.href='http://localhost:3000/team'}>
                <div>JOIN THE TEAM</div>

            </section>
            </div>

        </div>
    )
}

export default Home