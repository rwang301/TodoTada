import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

class Individual extends React.Component {
  render() {
    return (
      <Container>
        <div>{this.props.task.text}</div>
        <div>
          {this.props.task.complete ? <p>Completed</p> : <p>Incomplete</p>}
          {this.props.task.complete ? (
            <Button color="secondary">Remove</Button>
          ) : (
            <Button color="secondary">Done</Button>
          )}
        </div>
      </Container>
    );
  }
}

export default Individual;
