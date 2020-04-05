const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema and Model

const TaskSchema = new Schema({
  name: String,
  progress: String,
  priority: String
});

//telling Mongoose, the developer creates a const Task, it will create it in the "task" collection and base it off the TaskSchema

const Task = mongoose.model("task", TaskSchema);

module.exports = Task;
