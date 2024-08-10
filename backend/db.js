const mongoose = require("mongoose");
const { string } = require("zod");

mongoose.connect("mongodb+srv://shreyajkanade007:Bijapur%40586101@cluster0.1qy9ml6.mongodb.net/auth");

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