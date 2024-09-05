const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");
const { string } = require("zod");


mongoose.connect(process.env.URI);

const signupSchema= mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    degree: String,
    mobileNo: Number,
    password: String
})

const signup= mongoose.model("simple-signup", signupSchema);

module.exports = {
    signup
}