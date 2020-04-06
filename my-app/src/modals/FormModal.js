import React, { useState } from "react";
import * as Styled from "../styledComponents";
import TodayForm from "../components/TodayForm";
import { Typography } from "@material-ui/core";
import AButton from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap/";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

class FormModal extends React.Component {
  state = {
    taskName: "",
    priority: ""
  };
  submitForm = event => {
    console.log("i was so impatient");
    console.log(this.state.taskName, this.state.priority);
    //api call
    axios.post("http://localhost:9000/task", {
      task_name: this.state.taskName,
      priority: this.state.priority
    });
    this.props.closeModal();
  };

  savingTask = newTask => {
    this.setState({
      taskName: newTask
    });
  };

  savingPriority = priority => {
    this.setState({
      priority: priority
    });
  };

  // our put method that uses our backend api
  // to create new query into our data base
  render() {
    return (
      <>
        <Modal show={true} onHide={this.props.closeModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Add a task for today</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TodayForm
              savingTask={this.savingTask}
              savingPriority={this.savingPriority}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.props.closeModal()}>
              Close
            </Button>
            <Button onClick={this.submitForm} variant="primary">
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default FormModal;
