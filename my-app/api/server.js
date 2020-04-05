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
mongoose.connection
  .once("open", function() {
    console.log("Connection has been made, now make fireworks");
  })
  .on("error", function(error) {
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

  console.log(task_name, priority, "scamming and that swiping");
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
