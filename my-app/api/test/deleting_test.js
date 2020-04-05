const assert = require("assert");
const Task = require("../models/task");

//Describe Test
describe("Deleting Records", function(done) {
  var new_task;
  beforeEach(function(done) {
    new_task = new Task({
      name: "put shani to bed",
      progress: "almost",
      priority: "high"
    });
    //when you create this, a new ID is given
    new_task.save().then(function() {
      done();
    });
  });
  //save it to database

  it("Deletes a record from the database", function(done) {
    Task.findOneAndRemove({ name: "put shani to bed" }).then(function() {
      Task.findOne({ name: "put shani to bed" }).then(function(result) {
        assert(result === null);
        done();
      });
    });
  });
});
