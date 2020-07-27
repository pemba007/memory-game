import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

export default darkTheme;
