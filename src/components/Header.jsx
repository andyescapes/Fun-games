import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import React from "react";
import { useHistory } from "react-router-dom";

function Header() {
  const useStyles = makeStyles({
    boxStyle: {
      height: "90px",
    },
  });

  const history = useHistory();

  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit">Log Out</Button>
        <Box ml={1}>
          <Button
            onClick={() => {
              history.push("/edit");
            }}
            color="inherit"
          >
            Edit Page
          </Button>
        </Box>
        <Box ml={1}>
          <Button
            onClick={() => {
              history.push("/login");
            }}
            color="inherit"
          >
            Dashboard
          </Button>
        </Box>
        <Box ml={1}>
          <Button
            onClick={() => {
              history.push("/2048");
            }}
            color="inherit"
          >
            2048
          </Button>
        </Box>
        <Box ml={1}>
          <Button
            onClick={() => {
              history.push("/testing");
            }}
            color="inherit"
          >
            Testing
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
