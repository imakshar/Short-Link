import React from "react";
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    makeStyles,
    Typography,
} from "@material-ui/core";
import AuthRequired from "../General/AuthRequired";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    transparent: {
        backgroundColor: "transparent !important",
        boxShadow: "none",
        paddingTop: "25px",
        color: "#FFFFFF",
        position: "fixed",
        zIndex: "1100",
    },
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
const Header = (props) => {
    const classes = useStyles();
    const history = useHistory();
    React.useEffect(() => {
        if (props.changeColorOnScroll) {
            window.addEventListener("scroll", headerColorChange);
        }
        return function cleanup() {
            if (props.changeColorOnScroll) {
                window.removeEventListener("scroll", headerColorChange);
            }
        };
    });
    // const handleDrawerToggle = () => {
    //     setMobileOpen(!mobileOpen);
    // };
    const headerColorChange = () => {
        const { color, changeColorOnScroll } = props;
        const windowsScrollTop = window.pageYOffset;
        if (windowsScrollTop > changeColorOnScroll.height) {
            document.body
                .getElementsByTagName("header")[0]
                .classList.remove(classes[color]);
            document.body
                .getElementsByTagName("header")[0]
                .classList.add(classes[changeColorOnScroll.color]);
        } else {
            document.body
                .getElementsByTagName("header")[0]
                .classList.add(classes[color]);
            document.body
                .getElementsByTagName("header")[0]
                .classList.remove(classes[changeColorOnScroll.color]);
        }
    };
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
    return (
        <AppBar className={classes.transparent}>
            <Toolbar>
                <Box px={2} display="flex" alignItems="center" width="100%">
                    <Box flexShrink={1} width="100%">
                        <Button variant="text">
                            <Typography variant="h6" color="textPrimary">
                                <strong>Short Link</strong>
                            </Typography>
                        </Button>
                    </Box>
                    <AuthRequired>
                        <Box flexShrink={2} px={1}>
                            <Button
                                className={classes.secondaryLight}
                                variant="contained"
                                onClick={handleClick("dashboard")}
                            >
                                Dashboard
                            </Button>
                        </Box>
                    </AuthRequired>
                    <AuthRequired
                        fallback={
                            <Box flexShrink={2} px={1}>
                                <Button
                                    className={classes.secondaryLight}
                                    variant="contained"
                                    onClick={handleClick("signin")}
                                >
                                    Login
                                </Button>
                            </Box>
                        }
                    >
                        <Box flexShrink={2} px={1}>
                            <Button
                                className={classes.secondaryLight}
                                variant="contained"
                                onClick={handleClick("signout")}
                            >
                                Signout
                            </Button>
                        </Box>
                    </AuthRequired>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
