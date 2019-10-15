import React from "react";
import ToDoForm from "./ToDoForm.js";
import Individual from "./Individual.js";
import AppBar from "@material-ui/core/AppBar";
import { Typography } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import NavBar from "./NavBar.js";

class ToDoList extends React.Component {
  state = {
    tasks: []
  };

  addTask = task => {
    // console.log("task added", this.state.tasks);
    this.setState({
      tasks: [task, ...this.state.tasks]
    });
  };

  individualTasks = () => {
    return this.state.tasks.map(task => {
      return <Individual task={task} />;
    });
  };

  // initiateConnection = () => {
  //   const queryString = require("query-string");

  //   const client_id =
  //     "294b7d9742ca01f342cf66147612ffc8f092ba18b56895583ef46d89cad964df";
  //   const redirect_URI = "urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob";
  //   let url = `https://edge-api.sharesight.com/oauth2/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_URI}`;
  //   // fetch(url).then(res => console.log(res));
  //   window.open(url);
  //   //now grab the code in the url
  //   // const parsed = queryString.parse(window.location.search);
  //   // console.log(parsed);
  // };

  render() {
    return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <Typography variant="h5">To Do - Ta Da</Typography>
            <NavBar />
          </Toolbar>
        </AppBar>
        <ToDoForm addTask={this.addTask} />
        {this.individualTasks()}
        <br />
        {/* <button onClick={this.initiateConnection}>Connect to Sharesight</button> */}
      </div>
    );
  }
}

export default ToDoList;
