const assert = require("assert");
const Task = require("../models/task");

//Describe Test
describe("Saving Records", function() {
  //create tests
  //each it block will describe a test
  it("Saves a record to the database", function(done) {
    var newTask = new Task({
      name: "love shani",
      progress: "pending",
      priority: "high"
    });
    newTask.save().then(function() {
      assert(newTask.isNew === false);
      done();
    });
  });
});
