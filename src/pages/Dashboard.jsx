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
  const [quiz, setQuiz] = React.useState([
    { name: "cool quiz", duration: 12, image: "" },
    { name: "amazing quiz", duration: 12, image: "" },
  ]);

  const useStyles = makeStyles({
    boxStyle: {
      height: "90px",
    },
  });

  const classes = useStyles();
  return (
    <>
      <Typography variant={"h1"}>lol</Typography>
      <Typography variant={"body"}>lasdfasfasdfasfasfdol</Typography>
      <Grid container spacing={2}>
        <Grid item sm={2} xs={1}></Grid>
        <Grid item sm={8} xs={10}>
          <Grid container spacing={2}>
            {quiz.map((item) => {
              return (
                <Grid item md={4}>
                  <QuestionCard></QuestionCard>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item sm={2} xs={1}></Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
