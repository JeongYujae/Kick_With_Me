import React from "react"
const MyHeader = ({title}) =>{
    return(
        <header className="Myheader">
            <div className="MainTitle">
                <h1> {title} </h1>
            </div>
        </header>
    )
}

export default MyHeader