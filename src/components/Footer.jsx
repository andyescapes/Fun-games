import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import React from "react";

function Footer() {
  const useStyles = makeStyles({
    boxStyle: {
      height: "80px",
      position: "fixed",
      bottom: 0,
      left: 0,
      backgroundColor: "grey",
    },
  });

  const [time, setTime] = React.useState("");

  React.useEffect(() => {
    setInterval(() => {
      const time = new Date();
      setTime(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
    }, 1000);
  }, []);

  const classes = useStyles();
  return (
    <div>
      <Box color="white">
        <Grid container spacing={5} className={classes.boxStyle}>
          <Grid item sm={2} xs={4}>
            <Box>Big Brain</Box>
          </Grid>
          <Grid item sm={8} xs={4}></Grid>
          <Grid item sm={2} xs={4}>
            <Box>{time}</Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Footer;
