import React from "react";
import { Grid, Box } from "@material-ui/core";

const Dashboard = () => {
    return (
        <Grid container spacing={2}>
            <Grid item sm={12} xs={12} md={12}>
                <Box
                    display="flex"
                    width="100%"
                    alignItems="center"
                    justifyContent="center"
                    mt={4}
                >
                    <Box>This is Dashboard</Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
