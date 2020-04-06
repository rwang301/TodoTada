var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");
// var testAPIRouter = require("./routes/testAPI");
var Task = require("./models/task");
const mongoose = require("mongoose");
var app = express();
const router = express.Router();

mongoose.connect("mongodb://localhost/todotada"); // this is async
let db = mongoose.connection;
db.once("open", function() {
  console.log("Connection has been made, now make fireworks");
}).on("error", function(error) {
  console.log("the error is:@@@", error);
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// PUTTING ALL IN SAME FILE
app.use("/", router);

// PUTTING ALL IN DIFFERENT FILES
// app.use("/", indexRouter);
// app.use("/users", usersRouter);
// app.use("/testAPI", testAPIRouter);
router.get("/", (req, res, next) => {
  console.log("in my life@@@");
  res.send("shania darmadi");
});

router.post("/task", (req, res, next) => {
  console.log("Helllo!!!!!!!!");
  const { task_name, priority } = req.body;
  let task = new Task();
  task.name = task_name;
  task.priority = priority;
  task.progress = "Not Started";
  task.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.get("/task", (req, res) => {
  Task.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

//update method
//overwrites
router.post("/finishtask", (req, res) => {
  const { task_name, oldprogress } = req.body;
  Task.findOneAndUpdate(
    { name: task_name, progress: oldprogress },
    { name: task_name, progress: "Completed" },
    err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    }
  );
});
router.post("/progresstask", (req, res) => {
  const { task_name, oldprogress } = req.body;
  Task.findOneAndUpdate(
    { name: task_name, progress: oldprogress },
    { name: task_name, progress: "In Progress" },
    err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    }
  );
});

//delete singular task
router.delete("/deletetask", (req, res) => {
  const { task_name } = req.body;
  console.log(task_name, "shani2");
  Task.findOne({
    name: task_name
  })
    .remove()
    .exec();
});

//delete ALL tasks
router.delete("/deletealltasks", (req, res) => {
  Task.deleteMany({}, function(err) {
    if (err) {
      res.status(500).send({ error: "Could not clead database..." });
    } else {
      res
        .status(200)
        .send({ message: "All hasp info was deleted succesfully..." });
    }
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.use("/api", router);

app.listen(9000, () => console.log(`LISTENING ON PORT 9000`));

// console.log("fuck yeah cunt");

module.exports = app;
