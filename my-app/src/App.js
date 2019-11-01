import React from "react";
import "./App.css";
import ToDoList from "./ToDoList.js";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuAppBar from "./MenuAppBar";

function App() {
  return (
    <div className="App">
      {/* <ToDoList /> */}
      <MenuAppBar />
    </div>
  );
}

export default App;
