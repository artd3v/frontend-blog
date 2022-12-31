import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  shadows: ["none"],
  palette: {
    primary: {
      main: "#000",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
});
