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
  cursor: pointer;
`;

export const Options = styled(Container)`
  display: flex;
  flex-direction: row;
  margin: 2%;
`;

export const ModalWrapper = styled.div`
  display: block;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  border-radius: 5px;
  padding: 5%;
  width: 80%; /* Could be more or less, depending on screen size */
`;

export const TaskNameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleText = styled(Typography)`
  margin-left: 300px;
`;
