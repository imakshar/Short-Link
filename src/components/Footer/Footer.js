import React from "react";
import {
    AppBar,
    Toolbar,
    Box,
    makeStyles,
    Typography,
    Icon,
    IconButton,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
    footer: {
        zIndex: "3",
        position: "relative",
        backgroundColor: "transparent !important",
    },
}));

const Footer = () => {
    const classes = useStyles();
    const handleGithubClick = () => {
        window.open("https://github.com/imakshar/Short-Link");
    };
    return (
        <AppBar className={classes.footer} color="primary">
            <Toolbar>
                <Box
                    mx={4}
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-end"
                    width="100%"
                    alignContent="flex-start"
                    px={2}
                >
                    <Box>
                        <Typography color="textPrimary">
                            © 2020, made with
                            <Icon style={{ paddingTop: 3, color: "red" }}>
                                favorite
                            </Icon>
                            by Akshar Sarvaiya
                        </Typography>
                    </Box>
                    <Box pl={2}>
                        <IconButton size="medium" onClick={handleGithubClick}>
                            <GitHubIcon
                                fontSize="inherit"
                                style={{
                                    color: "black",
                                }}
                            />
                        </IconButton>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
