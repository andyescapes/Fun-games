import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import React from "react";
import QuestionCard from "../components/QuestionCard";
import { Typography } from "@material-ui/core";

function Dashboard() {


  const useStyles = makeStyles({
    boxStyle: {
      margin: "auto",
    },
  });

  const classes = useStyles();
  return (
    <>
      <Box mt ={5}>

      
      <Typography variant={"h1"} gutterBottom>Game Centre</Typography>
      <Grid container spacing={4}>
        <Grid item sm={2} xs={1}></Grid>
        <Grid item sm={8} xs={10}>

            <Typography variant = "h4">
              Hello, please play some games during your stay. I have developed a react tictactoe and 2048 game for you!
            </Typography>

        </Grid>
        <Grid item sm={2} xs={1}></Grid>
      </Grid>
</Box>
    </>
  );
}

export default Dashboard;
