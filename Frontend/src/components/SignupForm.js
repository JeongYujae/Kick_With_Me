import React, { useEffect, useState } from "react";
import axios  from "axios";
const SignupForm = () => {

    const [inputs, setInputs] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("onsubmit:", inputs)
    

    axios.post("http://localhost:8000/accounts/signup/", inputs)
        .then(response => {
            console.log("response:", response)

        })
        .catch(error => {
            console.log("error:",error)
        })
    };



    const onChange = (e) =>{
        const {name, value} = e.target;
        setInputs({
            ...inputs, [name]:value
        })
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
            <input type="text" name="username" onChange={onChange}/>
            <input type="password" name="password" onChange={onChange}/>
            <input type="submit" value="Sign UP"/>
            </form>
        </div>
    )

}

export default SignupForm