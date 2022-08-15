import React from "react"



// const MyHeader = ({headText, leftChild, rightChild}) => {
//     return(
//         <header>
//             <div className="head_btn_left">
//                 {leftChild}
//             </div>            
//             <div className="head_text">
//                 {headText}

//             </div>
//             <div className="head_btn_right">
//                 {rightChild}
//             </div>
//         </header>
//     )
// }

// export default MyHeader



const MyHeader = ({title}) =>{
    return(
            <div className="MainTitle">
                <h1> {title} </h1>
            </div>
    )
}

export default MyHeader