import { Box } from "@mui/material";
import "./App.css";
import Content from "./components/content/content";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#61dafb",
    },
    secondary: {
      main: "#282c34",
    },

    background: {
      default: "#282c34;",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#7fffd4",
    },
  },

  typography: {
    fontFamily: ["Source Code Pro", "monospace"].join(","),
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="App">
        <Content />
      </Box>
    </ThemeProvider>
  );
}

export default App;
