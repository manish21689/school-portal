const utils = require('../helpers/utils')

const checkTeacher = (req, res, next) => {
    const authorizationValue = req.headers["authorization"]
    if (!authorizationValue) {
        return sendUnathorizedResponse(res)
    }
    token = authorizationValue.substring(7)
    console.log(token)
    const payload = utils.parseToken(token)
    console.log(payload)
    if (!payload) return sendUnathorizedResponse(res)
    if (payload.user.role !== "Teacher") return sendUnathorizedResponse(res)
    console.log("Teacher verified")
    next()
}

const sendUnathorizedResponse = (res) => {
    return res.status(401).send("Unauthorized")
}

module.exports = { checkTeacher }