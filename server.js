var troute = require('./routes/teacher');
var sroute = require('./routes/student');
var croute = require('./routes/vclass');
var lroute = require('./routes/login');
var express = require('express');
var bodyparser = require('body-parser');
const initiateServer = () => {
    var app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: true }));
     app.use('/teacher', troute)
    app.use('/student', sroute)
    app.use('/class', croute)
    app.use('/login', lroute)
    return app;
}

module.exports = { initiateServer }