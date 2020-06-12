import React from "react";
import classNames from "classnames";
import { Box, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3",
    },
    mainRaised: {
        margin: "-200px 30px 0px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    },
}));
const RisedCard = (props) => {
    const classes = useStyles();
    return (
        <Box pt={2} width="100%">
            <div className={classNames(classes.main, classes.mainRaised)}>
                {props.children}
            </div>
        </Box>
    );
};

export default RisedCard;
