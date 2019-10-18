import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";
import { Home, ViewList, CalendarToday } from "@material-ui/icons";
import * as Styled from "./styledComponents";

const NavBar = () => {
  return (
    <List component="nav">
      <ListItem component="div">
        <ListItemText inset>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item>Home</Grid>
            <Styled.NavDiv>
              <Grid item>
                <Home />
              </Grid>
            </Styled.NavDiv>
          </Grid>
        </ListItemText>
        <ListItemText inset>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item>
              <Typography color="inherit" variant="title">
                Your tasks
              </Typography>
            </Grid>
            <Styled.NavDiv>
              <Grid item>
                <ViewList />
              </Grid>
            </Styled.NavDiv>
          </Grid>
        </ListItemText>
        <ListItemText inset>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item>
              <Typography color="inherit" variant="title">
                Calendar
              </Typography>
            </Grid>
            <Styled.NavDiv>
              <Grid item>
                <CalendarToday />
              </Grid>
            </Styled.NavDiv>
          </Grid>
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default NavBar;
