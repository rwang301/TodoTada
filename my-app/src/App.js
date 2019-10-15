import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList.js'
import ToDoForm from './ToDoForm.js'

function App() {
  return (
    <div className="App">
      <h1>To Do - Ta Da</h1>
      <ToDoForm/>
      <ToDoList/>
    </div>
  );
}

export default App;
