const mongoose = require("mongoose");
// connecting to the database

//for local version of mongodb
//will create for you if doesnt exist
mongoose.connect("mongodb://localhost/todotada");
mongoose.connection
  .once("open", function() {
    console.log("Connection has been made, now make fireworks");
  })
  .on("error", function(error) {
    console.log("the error is:@@@", error);
  });
