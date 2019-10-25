import React from "react";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { Snackbar, SnackbarContent } from "@material-ui/core";
import * as Styled from "./styledComponents";

class TodayForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <Styled.TaskNameWrapper>
            <Typography style={{ width: "50%" }}>Task Name</Typography>
            <TextField id="task-name" style={{ width: "50%" }} />
          </Styled.TaskNameWrapper>
        </form>
      </div>
    );
  }
}

export default TodayForm;
