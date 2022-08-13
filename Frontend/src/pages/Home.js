import React, { useEffect, useState } from "react"
import Weather from "../components/Weather"
import JoinMatch from "./JoinMatch"
const Home = () =>{

    return(
        <div>
            HOME PAGE
            {/* 작은 위젯 만들어서 날씨 + 내정보 */}
            <section>
            <Weather/>
            </section>
            {/* TODO: Your profile을 누르면 login된 정보에 맞춰서 자기 유저의 정보를 보여줌(BE와 연동 후) */}
            <section>
                Your profile
            </section>
        
            <section>
                <h2>KICK RIGHT AWAY!</h2>
            </section>

            <section>
                <h2>Join the TEAM!</h2>
            </section>

        </div>
    )
}

export default Home