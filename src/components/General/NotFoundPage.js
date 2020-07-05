import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import NavBar from "../Header/NavBar";

const NotFoundPage = () => {
    return (
        <Grid container>
            <Grid xs={12}>
                <NavBar />
            </Grid>
            <Grid item xs={12}>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="100%"
                    flexWrap="wrap"
                    flexDirection="column"
                    pt={12}
                >
                    <Box>
                        <img
                            src="/noClicks.png"
                            width="400"
                            height="300"
                            alt="oops"
                        />
                    </Box>
                    <Box>
                        <Typography variant="h6" color="textSecondary">
                            Oops, you have entered wrong url...
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default NotFoundPage;
