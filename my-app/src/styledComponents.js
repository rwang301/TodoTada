import styled from "styled-components";
import {
  ListItemText,
  Typography,
  Grid,
  Paper,
  Container
} from "@material-ui/core";
import { Home, ViewList, CalendarToday } from "@material-ui/icons";

export const NavDiv = styled.div`
  margin-top: 3px;
`;

export const HomeIcon = styled(Home)`
  /* margin-left: 3px;
  margin-top: 10px; */
`;

export const StyledTitle = styled(Typography)`
  color: green;
`;

export const StyledGrid = styled(Grid)`
  padding-bottom: -10px;
`;

export const Bubble = styled(Paper)`
  text-align: center;
  padding: 5%;
  /* color: blueviolet !important; */
`;

export const Options = styled(Container)`
  display: flex;
  flex-direction: row;
  margin: 2%;
`;
