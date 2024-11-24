import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", 
    },
    secondary: {
      main: "#dc004e", 
    },
    background: {
      default: "#1976d2", 
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#6a0dad", 
          color: "#ffffff", 
        },
      },
    },
  },
});

export default theme;
