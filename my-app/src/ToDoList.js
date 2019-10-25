import React from "react";
import ToDoForm from "./ToDoForm.js";
import Individual from "./Individual.js";
import AppBar from "@material-ui/core/AppBar";
import { Typography, Container, Grid } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import NavBar from "./NavBar.js";
import OptionBar from "./OptionBar";
import Background from "./images/background.jpg";
import FormModal from "./FormModal";

class ToDoList extends React.Component {
  state = {
    tasks: [],
    showModal: false
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

  openModal = () => {
    console.log("hi from the parent");
    this.setState({
      showModal: true
    });
  };

  closeModal = () => {
    console.log("hi from the parent2222");
    this.setState({
      showModal: false
    });
  };

  render() {
    return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <Typography variant="h5">To Do - Ta Da</Typography>
            <NavBar />
          </Toolbar>
        </AppBar>
        <OptionBar openModal={this.openModal} />
        <FormModal show={this.state.showModal} />
        <ToDoForm addTask={this.addTask} />
        {this.individualTasks()}
      </div>
    );
  }
}

export default ToDoList;
