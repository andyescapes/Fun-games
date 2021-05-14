import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import React from "react";
import GameCard from "../components/GameCard";

function Game2048() {
  const [board, setBoard] = React.useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  const useStyles = makeStyles({
    cardStyle: {
      aspectRatio: 1 / 1,
    },
    grid: {
      backgroundColor: "grey",
    },
  });

  const genRandom = (board) => {
    const indexes = [];

    for (let rows = 0; rows < 4; rows++) {
      for (let cols = 0; cols < 4; cols++) {
        if (board[cols][rows] == 0) {
          indexes.push([cols, rows]);
        }
      }
    }
    let indexTuple = indexes[Math.floor(Math.random() * indexes.length)];

    board[indexTuple[0]][indexTuple[1]] = 2;
  };

  const checkIfDupe = (rowItems) => {
    for (let i = 0; i < rowItems.length - 1; i++) {
      if (rowItems[i] == rowItems[i + 1]) {
        return true;
      }
    }
    return false;
  };

  React.useEffect(() => {
    const boardCopy = [...board];
    genRandom(boardCopy);
    setBoard(boardCopy);
  }, []);

  React.useEffect(() => {
    const handleKeyPress = (event) => {
      console.log(event.key);

      if (event.key == "ArrowUp") {
        const boardCopy = [...board];

        for (let rows = 0; rows < 4; rows++) {
          const rowItems = [];

          for (let cols = 0; cols < 4; cols++) {
            if (boardCopy[cols][rows] !== 0) {
              rowItems.push(boardCopy[cols][rows]);
            }
          }

          let transformCount = 0;
          if (rowItems.length >= 2) {
            while (checkIfDupe(rowItems) && transformCount < 2) {
              transformCount++;
              console.log(rowItems);
              const rowLength = rowItems.length;
              for (let i = 0; i < rowLength - 1; i++) {
                if (rowItems[i] == rowItems[i + 1]) {
                  rowItems[i] += rowItems[i];
                  rowItems.splice(i + 1, 1);
                  break;
                }
              }
            }
          }

          for (let cols = 0; cols < 4; cols++) {
            if (rowItems.length - 1 >= cols) {
              boardCopy[cols][rows] = rowItems[cols];
            } else {
              boardCopy[cols][rows] = 0;
            }
          }
        }
        console.log(boardCopy);
        genRandom(boardCopy);
        setBoard(boardCopy);
      } else if (event.key == "ArrowDown") {
        const boardCopy = [...board];

        for (let rows = 0; rows < 4; rows++) {
          const rowItems = [];

          for (let cols = 3; cols >= 0; cols--) {
            if (boardCopy[cols][rows] !== 0) {
              rowItems.push(boardCopy[cols][rows]);
            }
          }

          let transformCount = 0;
          if (rowItems.length >= 2) {
            while (checkIfDupe(rowItems) && transformCount < 2) {
              transformCount++;
              console.log(rowItems);
              const rowLength = rowItems.length;
              for (let i = 0; i < rowLength - 1; i++) {
                if (rowItems[i] == rowItems[i + 1]) {
                  rowItems[i] += rowItems[i];
                  rowItems.splice(i + 1, 1);
                  break;
                }
              }
            }
          }
          let count = 0;
          for (let cols = 3; cols >= 0; cols--) {
            if (rowItems.length - 1 >= count) {
              boardCopy[cols][rows] = rowItems[count];
            } else {
              boardCopy[cols][rows] = 0;
            }
            count++;
          }
        }
        console.log(boardCopy);
        genRandom(boardCopy);
        setBoard(boardCopy);
      } else if (event.key == "ArrowLeft") {
        const boardCopy = [...board];

        for (let cols = 0; cols < 4; cols++) {
          const rowItems = [];

          for (let rows = 0; rows < 4; rows++) {
            if (boardCopy[cols][rows] !== 0) {
              rowItems.push(boardCopy[cols][rows]);
            }
          }

          let transformCount = 0;
          if (rowItems.length >= 2) {
            while (checkIfDupe(rowItems) && transformCount < 2) {
              transformCount++;
              console.log(rowItems);
              const rowLength = rowItems.length;
              for (let i = 0; i < rowLength - 1; i++) {
                if (rowItems[i] == rowItems[i + 1]) {
                  rowItems[i] += rowItems[i];
                  rowItems.splice(i + 1, 1);
                  break;
                }
              }
            }
          }

          for (let rows = 0; rows < 4; rows++) {
            if (rowItems.length - 1 >= rows) {
              boardCopy[cols][rows] = rowItems[rows];
            } else {
              boardCopy[cols][rows] = 0;
            }
          }
        }
        console.log(boardCopy);
        genRandom(boardCopy);
        setBoard(boardCopy);
      } else if (event.key == "ArrowRight") {
        const boardCopy = [...board];

        for (let cols = 0; cols < 4; cols++) {
          const rowItems = [];

          for (let rows = 3; rows >= 0; rows--) {
            if (boardCopy[cols][rows] !== 0) {
              rowItems.push(boardCopy[cols][rows]);
            }
          }

          let transformCount = 0;
          if (rowItems.length >= 2) {
            while (checkIfDupe(rowItems) && transformCount < 2) {
              transformCount++;
              console.log(rowItems);
              const rowLength = rowItems.length;
              for (let i = 0; i < rowLength - 1; i++) {
                if (rowItems[i] == rowItems[i + 1]) {
                  rowItems[i] += rowItems[i];
                  rowItems.splice(i + 1, 1);
                  break;
                }
              }
            }
          }
          let count = 0;
          for (let rows = 3; rows >= 0; rows--) {
            if (rowItems.length - 1 >= count) {
              boardCopy[cols][rows] = rowItems[count];
            } else {
              boardCopy[cols][rows] = 0;
            }
            count++;
          }
        }
        console.log(boardCopy);
        genRandom(boardCopy);
        setBoard(boardCopy);
      }
    };
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [board]);

  const classes = useStyles();
  return (
    <>
    <Box mt ={8} mr={20} ml={20}>
      <Typography variant = "h4">
              Press the arrow keys to play, the goal is to reach 2048
            </Typography>
    </Box>
    
      <Box m={8} >
        <Grid container>

          <Grid item xs={3}>

          </Grid>
          <Grid item xs={6}>
<Grid container spacing={2} className={classes.grid}>
          <Grid item sm={3}>
            <GameCard value={board[0][0]}></GameCard>
          </Grid>
          <Grid item sm={3}>
            <GameCard value={board[0][1]}></GameCard>
          </Grid>
          <Grid item sm={3}>
            <GameCard value={board[0][2]}></GameCard>
          </Grid>
          <Grid item sm={3}>
            <GameCard value={board[0][3]}></GameCard>
          </Grid>
          <Grid item sm={3}>
            <GameCard value={board[1][0]}></GameCard>
          </Grid>
          <Grid item sm={3}>
            <GameCard value={board[1][1]}></GameCard>
          </Grid>
          <Grid item sm={3}>
            <GameCard value={board[1][2]}></GameCard>
          </Grid>
          <Grid item sm={3}>
            <GameCard value={board[1][3]}></GameCard>
          </Grid>
          <Grid item sm={3}>
            <GameCard value={board[2][0]}></GameCard>
          </Grid>
          <Grid item sm={3}>
            <GameCard value={board[2][1]}></GameCard>
          </Grid>
          <Grid item sm={3}>
            <GameCard value={board[2][2]}></GameCard>
          </Grid>
          <Grid item sm={3}>
            <GameCard value={board[2][3]}></GameCard>
          </Grid>
          <Grid item sm={3}>
            <GameCard value={board[3][0]}></GameCard>
          </Grid>
          <Grid item sm={3}>
            <GameCard value={board[3][1]}></GameCard>
          </Grid>
          <Grid item sm={3}>
            <GameCard value={board[3][2]}></GameCard>
          </Grid>
          <Grid item sm={3}>
            <GameCard value={board[3][3]}></GameCard>
          </Grid>
        </Grid>
          </Grid>
          <Grid item xs={3}>

          </Grid>

        </Grid>
        
      </Box>
    </>
  );
}

export default Game2048;
