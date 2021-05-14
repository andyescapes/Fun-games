import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import React from "react";
import QuestionCard from "../components/QuestionCard";

function Game2048(props) {
  const useStyles = makeStyles({
    cardStyle: {
      aspectRatio: 1 / 1,
      backgroundColor: props.value == 0 ? "#919191" : "white",
      // fontSize: "30pt",
      margin: "auto",
    },
  });

  const classes = useStyles();
  return (
    <>
      <Card
        className={classes.cardStyle}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant={"h3"}>
          {props.value != 0 && props.value}
        </Typography>
      </Card>
    </>
  );
}

export default Game2048;
