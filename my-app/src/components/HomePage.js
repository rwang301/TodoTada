import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import AButton from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap/";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Button
} from "@material-ui/core";
import "../App.css";
import DoneIcon from "@material-ui/icons/Done";
import DeleteIcon from "@material-ui/icons/Delete";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import FormModal from "../modals/FormModal.js";
import axios from "axios";
import * as Styled from "../styledComponents";
class HomePage extends React.Component {
  state = {
    showModal: false,
    apiResponse: []
  };
  componentDidMount() {
    axios.get("http://localhost:9000/task").then(res => {
      console.log(res.data.data);
      this.setState({ apiResponse: res.data.data });
    });
  }
  finishTask = (taskname, oldprogress) => {
    //api request
    console.log(taskname, oldprogress, "all i want for u is perfection");
    axios.post("http://localhost:9000/finishtask", {
      task_name: taskname,
      oldprogress: oldprogress
    });
  };
  progressTask = (taskname, oldprogress) => {
    //api request
    console.log(taskname, oldprogress, "all i want for u is perfection");
    axios.post("http://localhost:9000/progresstask", {
      task_name: taskname,
      oldprogress: oldprogress
    });
  };

  //LOOK HERE: IMPORTANT NEST IN {}
  deleteTask = taskname => {
    //api request
    console.log(taskname, "deep in my heart");
    axios.delete("http://localhost:9000/deletetask", {
      data: { task_name: taskname }
    });
  };
  clearTasks = () => {
    axios.delete("http://localhost:9000/deletealltasks", {
      data: {}
    });
  };
  render() {
    return (
      <div className="dashboard-component container">
        {/* Confirmation Modal to delete row */}
        {this.state.showModal && (
          <FormModal show={true} closeModal={this.hideModal} />
        )}
        <Typography className="title" variant="h4">
          Today's Tasks
        </Typography>
        <div style={{ marginBottom: "30px" }}>
          <Button
            color="primary"
            variant="outlined"
            style={{ marginRight: "10px" }}
            onClick={() => this.showModal()}
          >
            Add Task
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => this.clearTasks()}
          >
            Clear All
          </Button>
        </div>
        <Table id="dashboard-table" aria-label="simple table">
          <colgroup>
            <col style={{ width: "50%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "15%" }} />
          </colgroup>
          <TableHead>
            <TableRow>{this.renderLeaderTableHeader()}</TableRow>
          </TableHead>
          <TableBody id="dashboard-table-body">
            {this.renderLeaderData()}
          </TableBody>
        </Table>
        <br />
      </div>
    );
  }
  showModal = () => {
    this.setState({ showModal: true });
    console.log("modal opened");
  };

  hideModal = () => {
    this.setState({ showModal: false });
    console.log("modal closed");
  };

  renderLeaderTableHeader() {
    let headings = ["Task", "Progress", "Priority", "Action"];
    return headings.map(heading => {
      return <TableCell>{heading.toUpperCase()}</TableCell>;
    });
  }

  renderLeaderData() {
    return this.state.apiResponse.map(row => {
      return (
        <TableRow>
          <TableCell>
            <Styled.TaskName>
              {" "}
              <Styled.DeleteButton
                onClick={() => this.deleteTask(row.name)}
                currentprogress={row.progress}
              />
              {row.name}
            </Styled.TaskName>
          </TableCell>
          <TableCell>{row.progress}</TableCell>
          <TableCell>{row.priority}</TableCell>
          <TableCell>
            <div className="buttonContainer">
              {/* <DoneIcon
                style={{ cursor: "pointer" }}
                onClick={() => this.finishTask(row.name, row.progress)}
              /> */}
              <Styled.DoneButton
                onClick={() => this.finishTask(row.name, row.progress)}
                currentprogress={row.progress}
              />
              <Styled.ProgressButton
                onClick={() => this.progressTask(row.name, row.progress)}
                currentprogress={row.progress}
              />
            </div>
          </TableCell>
        </TableRow>
      );
    });
  }
}

export default HomePage;
