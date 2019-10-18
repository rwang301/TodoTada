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

  // test = () => {
  //   fetch("http://localhost:3000", { method: "POST" });
  // };

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

  getToken = () => {
    const auth_code =
      "6384fcda16f7a58b83b2b04304bb28a59bdd3a682dd975bd0e2a9f486310d183";
    const redirect_URI = "urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob";
    const google_URI = "https%3A%2F%2Fwww.google.com.au";
    const client_secret =
      "7bffa2c176b56e20a127c54dffeac2c9262f8376ff290bbd64c72b8814154e2f";
    const client_id =
      "294b7d9742ca01f342cf66147612ffc8f092ba18b56895583ef46d89cad964df";
    let tokenURL = `https://edge-api.sharesight.com/oauth2/token?grant_type=authorization_code&code=${auth_code}&redirect_uri=${redirect_URI}&client_id=${client_id}&client_secret=${client_secret}`;
    fetch(tokenURL, { method: "POST" })
      .then(res => res.json())
      .then(res => {
        const auth_token = res.access_token;
        const refresh_token = res.refresh_token;
        console.log("got it", auth_token, refresh_token);
        const singleSignIn =
          "https://edge-api.sharesight.com/api/v2/single_sign_on.json";
        fetch(singleSignIn, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${auth_token}`
          }
        })
          .then(res => res.json())
          .then(res => window.open(res.login_url));
      });
  };

  initiateConnection = () => {
    const queryString = require("query-string");
    const client_id =
      "294b7d9742ca01f342cf66147612ffc8f092ba18b56895583ef46d89cad964df";
    const redirect_URI = "urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob";
    const google_URI = "https%3A%2F%2Fwww.google.com.au";

    let url = `https://edge-api.sharesight.com/oauth2/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_URI}`;
    fetch(url).then(res => {
      if (res.status == 200) {
        window.open(url);
        //retrieve auth_code
      }
    });
    // window.open(url);
    //now grab the code in the url
    // const parsed = queryString.parse(window.location.search);
    // console.log(parsed);
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
        <ToDoForm addTask={this.addTask} />
        {this.individualTasks()}
        <br />
        <button onClick={this.initiateConnection}>Connect to Sharesight</button>
        <button onClick={this.getToken}>Get Token</button>
        <button onClick={this.test}>Test</button>
      </div>
    );
  }
}

export default ToDoList;
