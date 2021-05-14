import React from "react";
import { Card, Grid, Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import MyModal from "../components/MyModal";
import "../App.css";

export const Tictactoe = ({}) => {
  const [turn, setturn] = React.useState(0);
  const useStyles = makeStyles({
    cardStyle: {
      backgroundColor: "rgba(244, 244, 244, 0.18)",
      borderWidth: "2px",
      boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.35)",
    },
    home: {
      textAlign: "center",
      width: "100%",
      height: "100%",
    },
    gameCell: {
      height: "100%",
      width: "100%",
      background: turn === 0 ? "rgb(255,220,220)" : "rgb(220,220,255)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "2em",
    },
  });

  const classes = useStyles();
  const history = useHistory();
  const [result, setresult] = React.useState("");
  const [finished, setfinished] = React.useState(false);
  const [selection, setselection] = React.useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [count, setcount] = React.useState(0);

  const checkStatus = (select) => {
    for (let cols = 0; cols < 3; cols++) {
      if (
        select[cols][0] === select[cols][1] &&
        select[cols][1] === select[cols][2] &&
        select[cols][0] != 0
      ) {
        setresult(select[cols][0]);
        setfinished(true);
        break;
      }
    }

    for (let rows = 0; rows < 3; rows++) {
      if (
        select[0][rows] === select[1][rows] &&
        select[1][rows] === select[2][rows] &&
        select[0][rows] != 0
      ) {
        setresult(select[0][rows]);
        setfinished(true);
        break;
      }
    }

    if (
      select[0][0] === select[1][1] &&
      select[1][1] === select[2][2] &&
      select[0][0] != 0
    ) {
      setresult(select[0][0]);
      setfinished(true);
    }
    if (
      select[0][2] === select[1][1] &&
      select[1][1] === select[2][0] &&
      select[0][2] != 0
    ) {
      setresult(select[0][2]);
      setfinished(true);
    }
  };

  const selectSquare = (y, x) => {
    const selectCopy = [...selection];
    if (selectCopy[y][x] == 0) {
      if (turn === 0) {
        selectCopy[y][x] = "O";
      } else {
        selectCopy[y][x] = "X";
      }
      setturn(turn === 0 ? 1 : 0);
      setselection(selectCopy);
      checkStatus(selection);
      setcount(count + 1);
    }
  };

  React.useEffect(() => {
    if (count === 9) {
      checkStatus(selection);
      setresult("Draw");
      setfinished(true);
    }
  }, [count]);
  return (
    <>
   <Box mt ={5}>
   <Grid container>
      <Grid item xs={3}>

      </Grid>
      <Grid item xs={6}>
        <Box mb={5}>
          <Typography variant ="h4">
          Play Tictactoe Red goes first!
        </Typography>
        </Box>
        
   {finished && (
        <MyModal setter={setfinished} result={result} count={count}></MyModal>
      )}
      <div class="game-grid">
        <div className={classes.gameCell} onClick={() => selectSquare(0, 0)}>
          {selection[0][0] != 0 && selection[0][0]}
        </div>
        <div className={classes.gameCell} onClick={() => selectSquare(0, 1)}>
          {selection[0][1] != 0 && selection[0][1]}
        </div>
        <div className={classes.gameCell} onClick={() => selectSquare(0, 2)}>
          {selection[0][2] != 0 && selection[0][2]}
        </div>
        <div className={classes.gameCell} onClick={() => selectSquare(1, 0)}>
          {selection[1][0] != 0 && selection[1][0]}
        </div>
        <div className={classes.gameCell} onClick={() => selectSquare(1, 1)}>
          {selection[1][1] != 0 && selection[1][1]}
        </div>
        <div className={classes.gameCell} onClick={() => selectSquare(1, 2)}>
          {selection[1][2] != 0 && selection[1][2]}
        </div>
        <div className={classes.gameCell} onClick={() => selectSquare(2, 0)}>
          {selection[2][0] != 0 && selection[2][0]}
        </div>
        <div className={classes.gameCell} onClick={() => selectSquare(2, 1)}>
          {selection[2][1] != 0 && selection[2][1]}
        </div>
        <div className={classes.gameCell} onClick={() => selectSquare(2, 2)}>
          {selection[2][2] != 0 && selection[2][2]}
        </div>
      </div>
      </Grid>
      <Grid item xs={3}>

      </Grid>
      <Grid item xs={3}>

      </Grid>

   
    </Grid>
   </Box>
    </>
  );
};
