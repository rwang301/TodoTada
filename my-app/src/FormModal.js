import React from "react";
import * as Styled from "./styledComponents";
import TodayForm from "./TodayForm";
import { Typography } from "@material-ui/core";

class FormModal extends React.Component {
  //pass this.props.show to styled components
  render() {
    return (
      <Styled.ModalWrapper>
        <Styled.ModalContent>
          <Styled.TitleText variant="h4">To Complete Today</Styled.TitleText>
          <TodayForm />
        </Styled.ModalContent>
      </Styled.ModalWrapper>
    );
  }
}

export default FormModal;
