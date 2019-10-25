import React from "react";
import { Typography, Container, Grid, Paper } from "@material-ui/core";
import * as Styled from "./styledComponents";
import { withStyles, makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { border } from "@material-ui/system";

const styles = {
  bubbleOne: {
    color: "#5cabff",
    // backgroundColor: "blue",
    borderColor: "#2f5487",
    border: "1px solid #2f5487"
    // background: "#2f5487"
  },
  bubbleTwo: {
    color: "#6c2080",
    border: "1px solid #2f5487"
  }
};

class OptionBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Styled.Options>
        <Grid xs={6}>
          <Styled.Bubble
            className={classes.bubbleOne}
            onClick={this.props.openModal}
          >
            <Typography>Add a task for today</Typography>
          </Styled.Bubble>
        </Grid>
        <Grid xs={6}>
          <Styled.Bubble className={classes.bubbleTwo}>
            <Typography>Add a plan for later on</Typography>
          </Styled.Bubble>
        </Grid>
      </Styled.Options>
    );
  }
}

OptionBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OptionBar);
