

import { useState } from "react";

export default function CreateSignup(){

    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");
    const [degree,setDegree] = useState("");
    const [mobileno,setMobileno] = useState("");
    const [password,setPassword] = useState("")

    return <div className="flex justify-center mt-4 bg-gray-700 ml-144 mr-144 rounded-lg border-2 border-slate-800 shadow-xl shadow-zinc-400/40 ">
        <div className="p-4">
            <input className="min-w-80 min-h-15 rounded-lg text-xl border-2 border-slate-800"  id="firstname" type="text" placeholder="Firstname" 
            onChange={function(e){
                const value=e.target.value;
                setFirstname(e.target.value)
            }}></input><br></br><br></br>

            <input className="min-w-80 min-h-15 rounded-lg text-xl border-2 border-slate-800" id="lastname" type="text" placeholder="Lastname"
            onChange={function(e){
                const value=e.target.value;
                setLastname(e.target.value)
            }}></input><br></br><br></br>

            <input className="min-w-80 min-h-15 rounded-lg text-xl border-2 border-slate-800" id="email" type="text" placeholder="Email"
            onChange={function(e){
                const value=e.target.value;
                setEmail(e.target.value)
            }}></input><br></br><br></br>

            <input className="min-w-80 min-h-15 rounded-lg text-xl border-2 border-slate-800" id="degree" type="text" placeholder="Degree"
            onChange={function(e){
                const value=e.target.value;
                setDegree(e.target.value)
            }}></input><br></br><br></br>

            <input className="min-w-80 min-h-15 rounded-lg text-xl border-2 border-slate-800" id="mobileno" type="text" placeholder="Mobilenumber"
            onChange={function(e){
                const value=e.target.value;
                setMobileno(e.target.value)
            }}></input><br></br><br></br>

            <input className="min-w-80 min-h-15  rounded-lg text-xl border-2 border-slate-800" id="password" type="password" placeholder="Password"
            onChange={function(e){
                const value=e.target.value;
                setPassword(e.target.value)
            }}></input><br></br><br></br>
            
            <button className="bg-blue-700 hover:bg-blue-500 shadow-lg shadow-blue-500/50 w-32 p-3 border border-white rounded-xl text-xl font-bold text-white" onClick={()=>{
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
            }}>Signup</button>
        </div>
    </div>
}