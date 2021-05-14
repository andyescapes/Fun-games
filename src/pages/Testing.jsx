import * as React from "react";
import { Card, Grid, Box, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";

export const Testing = ({}) => {
  // TODO - add your component here
  const useStyles = makeStyles({
    cardStyle: {
      backgroundColor: "rgba(244, 244, 244, 0.18)",
      borderWidth: "2px",
      boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.35)",
    },
    grid: {
      backgroundColor: "white",
    },
  });
  const [name, setname] = React.useState("");

  React.useEffect(() => {
    setname(localStorage.getItem("name"));
  }, []);

  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <Box mt={5}>
        <Grid container spacing={2}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <div
              style={{
                display: "flex",
                columnGap: "20px",
                flexDirection: "row",
              }}
            >
              <Card
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundColor: "white",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TextField
                  label="name"
                  value={name}
                  onChange={(event) => {
                    setname(event.target.value);
                    localStorage.setItem("name", name);
                  }}
                ></TextField>
              </Card>
              <Card
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundColor: "grey",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h1>test</h1>
              </Card>
              <Card
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundColor: "grey",
                }}
              >
                3
              </Card>
            </div>

            <Card>
              <Box m={{ xs: 0, md: 10 }}>
                <h2>
                  whats up dudessssfs howdy boiz whats happening boiz whats
                  happeningboiz whats happeningboiz whats happening boiz whats
                  happening boiz whats happening boiz whats happening
                </h2>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Box>
    </>
  );
};
