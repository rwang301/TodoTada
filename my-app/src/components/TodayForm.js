import React from "react";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { Snackbar, SnackbarContent } from "@material-ui/core";
import * as Styled from "../styledComponents";
import AButton from "react-bootstrap/Button";
import { Form, Row, Col } from "react-bootstrap";

class TodayForm extends React.Component {
  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>Task Name</Form.Label>
          <Form.Control onChange={e => this.props.savingTask(e.target.value)} />
        </Form.Group>

        {/* <Form.Group>
          <Form.Label>Task Description</Form.Label>
          <Form.Control as="textarea" />
        </Form.Group> */}
        <fieldset>
          <Form.Group>
            <Form.Label>Priority</Form.Label>
            <Form.Group controlId="formGridState">
              <Form.Control
                as="select"
                placeholder="Choose..."
                onChange={e => this.props.savingPriority(e.target.value)}
              >
                <option>Choose...</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </Form.Control>
            </Form.Group>
          </Form.Group>
        </fieldset>
      </Form>
    );
  }
}

export default TodayForm;
