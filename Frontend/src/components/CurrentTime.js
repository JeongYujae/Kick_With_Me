import React,{useState} from "react";

const CurrentTime = () => {

    const [timer, setTimer] = useState("00:00:00");

    const CurrentTimer= () => {
        const date= new Date()
        const hours= String(date.getHours()).padStart(2,"0");
        const minutes= String(date.getMinutes()).padStart(2,"0");
        const seconds= String(date.getSeconds()).padStart(2,"0");
        setTimer(`${hours}:${minutes}:${seconds}`)
    }

    const startTimer = () => {
        setInterval(CurrentTimer,1000)
    }

    const repleSubmit = () => {

        let today = new Date(); // today 객체에 Date()의 결과를 넣어줬다
        let time = {
          year: today.getFullYear(),  //현재 년도
          month: today.getMonth() + 1, // 현재 월
          date: today.getDate(), // 현제 날짜
          hours: today.getHours(), //현재 시간
          minutes: today.getMinutes(), //현재 분
        };
        let timestring = `${time.year}/${time.month}/${time.date}`;
        return(<>{timestring}</>)

        
    }

    startTimer()

    return (
        <div className="Time">
            {repleSubmit()}
            <br/>
            {timer}
            
        </div>
    )
}

export default CurrentTime