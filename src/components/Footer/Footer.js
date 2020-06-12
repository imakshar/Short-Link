import React from "react";
import {
    AppBar,
    Toolbar,
    Box,
    makeStyles,
    Typography,
    Icon,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    footer: {
        zIndex: "3",
        position: "relative",
        backgroundColor: "transparent !important",
    },
}));
const Footer = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.footer} color="primary">
            <Toolbar>
                <Box
                    mx={4}
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="flex-end"
                    width="100%"
                    alignContent="flex-start"
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
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
