//responsive boxes
<Box m={{ xs: 0, md: 10 }}>
  <h2>
    whats up dudessssfs howdy boiz whats happening boiz whats happeningboiz
    whats happeningboiz whats happening boiz whats happening boiz whats
    happening boiz whats happening
  </h2>
</Box>;

//responsive grids
<Grid item xs={1} md={2}></Grid>;

//theme shit to change font size
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { MuiThemeProvider, Typography } from "@material-ui/core";
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

return <MuiThemeProvider theme={theme}></MuiThemeProvider>;
