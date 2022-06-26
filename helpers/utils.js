var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

const parseToken = (token) => {
    //parse JWT Token
    return jwt.verify(token, process.env.SECRETKEY);
}

const generateToken = (user) => {
    return jwt.sign({ user }, process.env.SECRETKEY)
}

const encpwd = (pwd) => {
    return bcrypt.hashSync(pwd, 10);

}

const dcrpwd = (pwd, hash) => {
    return bcrypt.compareSync(pwd, hash)

}
module.exports = {
    generateToken, parseToken, encpwd,dcrpwd
}