import React from "react";

export default class ToDoForm extends React.Component {
  state = {
    task: ""
  };

  submitForm = event => {
    event.preventDefault();
    this.props.addTask({
      text: this.state.task,
      complete: false
    });
  };

  handleChange = event => {
    this.setState({
      task: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.submitForm} name="task">
        <input placeholder="Insert a task" onChange={this.handleChange}></input>
        <button type="submit">Add to list!</button>
      </form>
    );
  }
}
