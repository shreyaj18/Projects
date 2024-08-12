import { useState } from "react";

export default function Login(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    return <div className="flex justify-center mt-4 bg-gray-700 ml-144 mr-144 rounded-lg border-2 border-slate-800 shadow-xl shadow-zinc-400/40 ">
        <div className="p-4"> 
            <input className="min-w-80 min-h-15 rounded-lg text-xl border-2 border-slate-800" id="email" type="text" placeholder="E-mail" onChange={(e)=>{
                setEmail(e.target.value)
            }}></input><br></br><br></br>

            <input className="min-w-80 min-h-15 rounded-lg text-xl border-2 border-slate-800" id="password" type="password" placeholder="Password" onChange={(e)=>{
                setPassword(e.target.value)
            }}></input><br></br><br></br>

            <button className="bg-blue-700 hover:bg-blue-500 shadow-lg shadow-blue-500/50 w-32 p-3 border border-white rounded-xl text-xl font-bold text-white" onClick={()=>{
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
    </div>
}