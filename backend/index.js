const express = require("express");
const { creatSignup } = require("./types");
const { signup } = require("./db");
const cors = require("cors")
const app = express();


app.use(express.json());
app.use(cors())

app.post("/signup",async function (req,res){
    const createPayload = req.body;
    const parsePayload = creatSignup.safeParse(createPayload)
    if(!parsePayload.success){
        console.log(createPayload)
        res.status(411).json({
            msg:"Invalid inputs"
        })
        return ;


    }
    await signup.create({
        firstname: createPayload.firstname,
        lastname: createPayload.lastname,
        email: createPayload.email,
        degree: createPayload.degree,
        mobileNo: createPayload.mobileNo,
        password: createPayload.password
    })
    res.json({
        msg:"created successfully"
    })
})

app.post("/login",async function (req,res){
    const createPayload = req.body;
    const user = await signup.find({
        email: createPayload.email,
        password: createPayload.password
    })
    if(user.length>0){
        res.json({
            msg:"succssfull"
        })
    }
    else{
        res.status(411).json({
            msg:"invlaid creds"
        })
    }
})

app.listen(3000)