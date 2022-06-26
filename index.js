var db = require('./dbconfig/dbconfig');
var server = require('./server')

db.connectDB()
const app = server.initiateServer();

app.listen(3000, (err) => {
    if (err) throw err;
    console.log('server is running');
});

