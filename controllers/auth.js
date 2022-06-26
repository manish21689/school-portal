const teacherRepository = require("../repository/teacher")
const studentRepository = require("../repository/student")
const utils = require("../helpers/utils")
require('dotenv').config()


const Login = async (req, res) => {
    var id = req.body.id
    var password = req.body.password
    var role = req.body.role
    let resultFromDB;
    if (!id || !password || !role) { return res.send("Provide details..") }
    if (role === 'Teacher') {
        const [result, err] = await teacherRepository.getTeacherById(id)
        resultFromDB = result
    }
    else if (role === "Student") {
        const [result, err] = await studentRepository.getStudentById(id)
        resultFromDB = result
    } else {
        return res.status(400).send("Invalid role")
    }
    if (resultFromDB == null) {
        return res.status(401).send("Login failed")
    }
    
    
    
    const user ={
         id : req.body.id,
         password : req.body.password,
         role : req.body.role
    }
    const ismatched=utils.dcrpwd(req.body.password,resultFromDB.password)
    if (!ismatched){
    return res.status(401).send("Token not Matched So Login failed")}
    const token=utils.generateToken(user)
    req.user=user;
    res.status(200).send({msg:"login Successful..",token})
}

module.exports = { Login }