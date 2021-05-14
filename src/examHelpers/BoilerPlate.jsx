import React from "react";
import { Card, Grid, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";

export const ProductCard = ({}) => {
  const useStyles = makeStyles({
    cardStyle: {
      backgroundColor: "rgba(244, 244, 244, 0.18)",
      borderWidth: "2px",
      boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.35)",
    },
    grid: {
      backgroundColor: "grey",
    },
  });

  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <Box mt={5}>
        <Grid container spacing={2}>
          <Grid item sm={2}></Grid>
          <Grid item sm={8}>
            <h1>hello world</h1>
          </Grid>
          <Grid item sm={2}></Grid>
        </Grid>
      </Box>
    </>
  );
};
