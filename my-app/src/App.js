import React from "react";
import "./App.css";
import ToDoList from "./ToDoList.js";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuAppBar from "./MenuAppBar";
import DisplayContent from "./DisplayContent";

function App() {
  return (
    <div className="App">
      {/* <ToDoList /> */}
      <DisplayContent />
    </div>
  );
}

export default App;
