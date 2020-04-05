const assert = require("assert");
const Task = require("../models/task");

//Describe Test
describe("Updating Records", function(done) {
  var new_task;
  beforeEach(function(done) {
    new_task = new Task({
      name: "make shani happy",
      progress: "almost",
      priority: "high"
    });
    //when you create this, a new ID is given
    new_task.save().then(function() {
      done();
    });
  });
  //save it to database

  it("Updates a record from the database", function(done) {
    Task.findOneAndUpdate(
      { name: "make shani happy" },
      { name: "make shani mad" }
    ).then(function() {
      Task.findOne({ name: "make shani mad" }).then(function(result) {
        assert(result.name === "make shani mad");
        done();
      });
    });
  });
});
