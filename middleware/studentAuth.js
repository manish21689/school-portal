const utils = require('../helpers/utils')
const checkStudent = (req, res, next) => {
    const token = req.headers["authorization"].substring(7);
    if (!token) return sendUnathorizedResponse(res);
    const payload = utils.parseToken(token);
    if (!payload) return sendUnathorizedResponse(res)
    if (payload.user.role !== "Student") return sendUnathorizedResponse(res)
    console.log("Student Verified")
    next()
}
const sendUnathorizedResponse = (res) => {
    return res.status(401).send("Unauthorized")
}
module.exports = { checkStudent }