const mongoose = require("mongoose");
// connecting to the database

//ES6 Promises
mongoose.Promise = global.Promise;

// Connect to the database before tests are run (before is a hook, runs before/after a function)
before(function(done) {
  //for local version of mongodb
  //will create for you if doesnt exist444
  mongoose.connect("mongodb://localhost/todotada"); // this is async
  mongoose.connection
    .once("open", function() {
      console.log("Connection has been made, now make fireworks");
      done();
    })
    .on("error", function(error) {
      console.log("the error is:@@@", error);
    });
});
//Drop each collection (table) before every test, this is a hook too
beforeEach(function(done) {
  //Drop the collection
  //references all the collections we have in the database
  //mongoose plurarised task to tasks
  //.drop() is async
  mongoose.connection.collections.tasks.drop(function() {
    done();
  });
});
