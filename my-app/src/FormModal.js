import React, { useState } from "react";
import * as Styled from "./styledComponents";
import TodayForm from "./components/TodayForm";
import { Typography } from "@material-ui/core";
import AButton from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap/";
import { Modal, Button } from "react-bootstrap";
class FormModal extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add a task for today</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TodayForm />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default FormModal;
