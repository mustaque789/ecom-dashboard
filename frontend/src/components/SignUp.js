import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = ()=>{

    const [name, setName]  = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    // navigate to next screen
  
    const collectData = async ()=>{
        console.warn(name,email,password)

        let result = await fetch("http://localhost:5005/register",
        {
           method:'post',
           body:JSON.stringify({name, email, password}),
           headers: {
            'Content-Type':'application/json'
           }
        })

        result =await result.json();
        console.warn(result)

        navigate('/')
    }
                                             // onClick={}  :- by clicking what should happen
    return(                                 // onChange={(e)=>{setName(e.target.value)}}  :- captures any change occurs in text and saves into setName
        <div className="sign">              
            <h1>Register</h1>
            <input className="inputBox" type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name"/>    
            <input className="inputBox" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email"/>
            <input className="inputBox" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password"/>
            <button onClick={collectData} className="but" type="button">Sign Up</button>
        </div>
    )
}

export default SignUp;