import { createMuiTheme } from "@material-ui/core/styles";
const defaultTheme = createMuiTheme();

export const theme = createMuiTheme({
    palette: {
        common: {
            black: "rgba(39, 10, 10, 1)",
            white: "rgba(255, 255, 255, 1)",
        },
        background: {
            paper: "#F8F8F8",
            default: "#F8F8F8",
        },
        primary: {
            light: "#ec407a",
            main: "#e91e63",
            dark: "#c2185b",
            contrastText: "#fff",
        },
        secondary: {
            light: "#4791db",
            main: "#1976d2",
            dark: "#115293",
            contrastText: "#fff",
        },
        error: {
            light: "#e57373",
            main: "#f44336",
            dark: "#d32f2f",
            contrastText: "#fff",
        },
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.54)",
            disabled: "rgba(0, 0, 0, 0.38)",
            hint: "rgba(0, 0, 0, 0.38)",
        },
    },
    status: {
        danger: "orange",
    },
    typography: {
        h3: {
            fontSize: "1.2rem",
            "@media (min-width:600px)": {
                fontSize: "1.5rem",
            },
            [defaultTheme.breakpoints.up("md")]: {
                fontSize: "2.4rem",
            },
        },
    },
    overrides: {
        MuiCard: {
            root: {
                // borderRadius: 10
            },
        },
        MuiButton: {
            root: {
                textTransform: "none",
            },
        },
    },
});
