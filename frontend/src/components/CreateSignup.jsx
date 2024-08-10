

import { useState } from "react";

export default function CreateSignup(){

    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");
    const [degree,setDegree] = useState("");
    const [mobileno,setMobileno] = useState("");
    const [password,setPassword] = useState("")

    return <div>
        <input id="firstname" type="text" placeholder="Firstname" 
        onChange={function(e){
            const value=e.target.value;
            setFirstname(e.target.value)
        }}></input><br></br><br></br>

        <input id="lastname" type="text" placeholder="Lastname"
        onChange={function(e){
            const value=e.target.value;
            setLastname(e.target.value)
        }}></input><br></br><br></br>

        <input id="email" type="text" placeholder="Email"
        onChange={function(e){
            const value=e.target.value;
            setEmail(e.target.value)
        }}></input><br></br><br></br>

        <input id="degree" type="text" placeholder="Degree"
        onChange={function(e){
            const value=e.target.value;
            setDegree(e.target.value)
        }}></input><br></br><br></br>

        <input id="mobileno" type="text" placeholder="Mobilenumber"
        onChange={function(e){
            const value=e.target.value;
            setMobileno(e.target.value)
        }}></input><br></br><br></br>

        <input id="password" type="password" placeholder="Password"
        onChange={function(e){
            const value=e.target.value;
            setPassword(e.target.value)
        }}></input><br></br><br></br>

        <button onClick={()=>{
            fetch("http://localhost:3000/signup",{
                method:"POST",
                body: JSON.stringify({
                    firstname:firstname,
                    lastname:lastname,
                    email:email,
                    degree:degree,
                    mobileNo:mobileno,
                    password:password
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async function(res){
                    const json = await res.json();
                    alert("Details added")
                })
                .catch(err => {
                    console.error("Error:", err);
                });
        }}>Submit</button>
    </div>
}