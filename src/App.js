import Footer from "./components/Footer";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Game2048 from "./pages/Game2048";
import { Testing } from "./pages/Testing";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";
import Edit from "./pages/Edit";
//theme shit
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { MuiThemeProvider, Typography } from "@material-ui/core";

function App() {
  let theme = createMuiTheme({
    typography: {
      fontFamily: '"Helvetica Neue"',
    },
  });
  theme = responsiveFontSizes(theme);

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Header></Header>
            <Dashboard></Dashboard>
            <Footer></Footer>
          </Route>
          <Route path="/edit">
            <Header></Header>
            <Edit></Edit>
            <Footer></Footer>
          </Route>
          <Route path="/2048">
            <Header></Header>
            <Game2048></Game2048>
            <Footer></Footer>
          </Route>

          <Route path="/testing">
            {" "}
            <Header></Header>
            <Testing />
          </Route>

          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
