import React from "react";
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    Typography,
    makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import AuthRequired from "../General/AuthRequired";
const useStyles = makeStyles((theme) => ({
    primaryDark: {
        backgroundColor: theme.palette.primary.dark,
    },
    primaryLight: {
        backgroundColor: theme.palette.primary.light,
    },
    primaryMain: {
        backgroundColor: theme.palette.primary.main,
    },
    secondaryDark: {
        backgroundColor: theme.palette.secondary.dark,
    },
    secondaryLight: {
        backgroundColor: theme.palette.secondary.light,
    },
    secondarymain: {
        backgroundColor: theme.palette.secondary.main,
    },
}));
const NavBar = () => {
    const history = useHistory();
    const classes = useStyles();
    const handleClick = (type) => (event) => {
        if (type === "dashboard") {
            history.push("/dashboard");
        } else if (type === "signin") {
            history.push("/signin");
        } else if (type === "signout") {
            localStorage.removeItem("short_link_auth");
            window.location.href = "/";
        }
    };
    const handleLogoClick = () => {
        history.push("/");
    };
    return (
        <React.Fragment>
            <AppBar position="fixed" className={classes.primaryLight}>
                <Toolbar>
                    <Box px={2} display="flex" alignItems="center" width="100%">
                        <Box flexShrink={1} width="100%">
                            <Button variant="text" onClick={handleLogoClick}>
                                <Typography variant="h6" color="textPrimary">
                                    <strong>Short Link</strong>
                                </Typography>
                            </Button>
                        </Box>

                        <Box flexShrink={2} px={1}>
                            <AuthRequired>
                                <Button
                                    variant="contained"
                                    className={classes.secondaryLight}
                                    onClick={handleClick("dashboard")}
                                >
                                    Dashboard
                                </Button>
                            </AuthRequired>
                        </Box>

                        <Box flexShrink={2} px={1}>
                            <AuthRequired
                                fallback={
                                    <Button
                                        className={classes.secondaryLight}
                                        variant="contained"
                                        onClick={handleClick("signin")}
                                    >
                                        Login
                                    </Button>
                                }
                            >
                                <Button
                                    className={classes.secondaryLight}
                                    variant="contained"
                                    onClick={handleClick("signout")}
                                >
                                    Signout
                                </Button>
                            </AuthRequired>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default NavBar;
