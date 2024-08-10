const zod= require("zod");

const creatSignup = zod.object({
    firstname: zod.string(),
    lastname: zod.string(),
    email: zod.string().email(),
    degree: zod.string(),
    mobileNo: zod.string(),
    password: zod.string()
})

module.exports = {
    creatSignup:creatSignup
}