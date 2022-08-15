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
            </section>
            <section>
                <CurrentTime/>
            </section>
            </div>

            
            <div className="BottomPart">
            <section className="MatchArea">
                <h2>KICK RIGHT AWAY!</h2>
            </section>

            <section className="TeamArea">
                <h2>Join the TEAM!</h2>
            </section>
            </div>

        </div>
    )
}

export default Home