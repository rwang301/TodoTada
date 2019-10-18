import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";
import ToDoList from "./ToDoList.js";

ReactDOM.render(<ToDoList />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
