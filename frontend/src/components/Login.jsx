import { useState } from "react";

export default function Login(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    return <div>
            <input id="email" type="text" placeholder="email" onChange={(e)=>{
                setEmail(e.target.value)
            }}></input><br></br><br></br>

            <input id="password" type="password" placeholder="password" onChange={(e)=>{
                setPassword(e.target.value)
            }}></input><br></br><br></br>

            <button onClick={()=>{
                fetch("http://localhost:3000/login",{
                    method: "POST",
                    body: JSON.stringify({
                        email:email,
                        password:password
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                .then(async function(res){
                    const json = await res.json();
                    alert("Details submitted")
                })
                .catch(err => {
                    console.error("Error:", err);
                });
            }}>Login</button>   
    </div>
}