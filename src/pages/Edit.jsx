import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import React from "react";
import QuestionCard from "../components/QuestionCard";

function Edit() {
  const [question, setQuestion] = React.useState([
    { question: "cool quiz", duration: 12, points: 123 },
    { question: "how are you", duration: 12, points: 25 },
  ]);

  const [q, setQ] = React.useState("");
  const [points, setPoints] = React.useState("");

  const useStyles = makeStyles({
    boxStyle: {
      backgroundColor: "rgba(244, 244, 244, 0.18)",
      borderWidth: "2px",
      boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.35)",
      height: "100vh",
    },
    center: {
      textAlign: "center",
    },
  });

  const classes = useStyles();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={5} md={2}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Nested List Items
              </ListSubheader>
            }
            className={classes.boxStyle}
          >
            {question.map((q) => {
              return (
                <ListItem
                  button
                  onClick={() => {
                    setPoints(q.points);
                    setQ(q.question);
                  }}
                  className={classes.center}
                >
                  <ListItemText primary={q.question} />
                </ListItem>
              );
            })}
          </List>
        </Grid>
        <Grid item xs={7} md={10}>
          <Box m={3}>
            <Typography variant="h5">{q}</Typography>
            <Typography variant="P">{points}</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Edit;
