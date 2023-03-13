import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	shadows: ["none"],
	palette: {
		mode: 'dark'
	},
	typography: {
		button: {
		textTransform: "none",
		fontWeight: 600,
		},
	},
});