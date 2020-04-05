const assert = require("assert");
const Task = require("../models/task");

//Describe Test
describe("Finding Records", function(done) {
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

  it("Finds a record by ID in a database", function(done) {
    Task.findOne({ _id: new_task._id }).then(function(result) {
      //result will be an object
      //remember ID's are objects
      assert(result._id.toString() === new_task._id.toString());
      done();
    });
  });
});
