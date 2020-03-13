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
          <Form.Control />
        </Form.Group>

        <Form.Group>
          <Form.Label>Task Description</Form.Label>
          <Form.Control as="textarea" />
        </Form.Group>
        <fieldset>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              Priority
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="Low"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="Medium"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="High"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
            </Col>
          </Form.Group>
        </fieldset>
      </Form>
    );
  }
}

export default TodayForm;
