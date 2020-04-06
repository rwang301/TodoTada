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
        <div style={{ marginBottom: "15px" }}>
          <Button
            color="primary"
            variant="outlined"
            style={{ marginRight: "10px" }}
            onClick={() => this.showModal()}
          >
            Add Task
          </Button>
          <Button color="secondary" variant="outlined">
            Clear All
          </Button>
        </div>
        <Table id="dashboard-table" aria-label="simple table">
          <colgroup>
            <col style={{ width: "60%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "20%" }} />
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
    // const dummyData = [
    //   {
    //     id: 0,
    //     task:
    //       "Your money lttiel like a yorkie, yeah im going back to the old me",
    //     progress: "Incomplete",
    //     priority: "High"
    //   },
    //   { id: 1, task: "Finish App", progress: "Incomplete", priority: "High" },
    //   { id: 2, task: "Finish App", progress: "Incomplete", priority: "High" },
    //   { id: 3, task: "Finish App", progress: "Incomplete", priority: "High" }
    // ];

    return this.state.apiResponse.map(row => {
      return (
        <TableRow>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.progress}</TableCell>
          <TableCell>{row.priority}</TableCell>
          <TableCell>
            <div className="buttonContainer">
              <DoneIcon />
              <TrendingUpIcon />
              <DeleteIcon />
            </div>
          </TableCell>
        </TableRow>
      );
    });
  }
}

export default HomePage;
