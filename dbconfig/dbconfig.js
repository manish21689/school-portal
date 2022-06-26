 var mongoose = require("mongoose");

let conn;

const connectDB = () => {
  if (conn) {
    return conn;
  } else {
    conn = mongoose.connect(
      "mongodb://localhost:27017/SchoolDb",
      { useNewUrlParser: true},
      (err) => {
        if (err) throw err;
        console.log("Mongooser server Connected...");
      }
    );
    return conn;
  }
};
module.exports = {connectDB};
 

// var conn=conn = mongoose.connect(
//     "mongodb://localhost:27017/SchoolDb",
//     { useNewUrlParser: true },
//     (err) => {
//       if (err) throw err;
//       console.log("Mongooser server Connected...");
//     }
//   );
