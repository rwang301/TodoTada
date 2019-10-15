import styled from "styled-components";
import { ListItemText, Typography, Grid } from "@material-ui/core";
import { Home, ViewList, CalendarToday } from "@material-ui/icons";

const NavDiv = styled(ListItemText)`
  /* display: flex;
  align-items: center;
  justify-content: center; */
`;

const HomeIcon = styled(Home)`
  /* margin-left: 3px;
  margin-top: 10px; */
`;

const StyledTitle = styled(Typography)`
  color: green;
`;

const StyledGrid = styled(Grid)`
  padding-bottom: -10px;
`;

export { NavDiv, HomeIcon, StyledTitle, StyledGrid };
