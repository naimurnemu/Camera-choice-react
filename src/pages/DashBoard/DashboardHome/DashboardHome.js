import * as React from "react";
import { Grid, Typography } from "@mui/material";
import dashboardBanner from "../../../images/Dashboard.svg";
import MyOrders from "../MyOrders/MyOrders";

const DashboardHome = () => {
    return (
        <Grid container sx={{ alignItems: "center" }} spacing={1}>
            <Grid item xs={12} md={8}>
                <MyOrders />
            </Grid>
            <Grid item xs={12} md={4}>
                <img style={{ width: "100%" }} src={dashboardBanner} alt="" />
                <Typography variant="h5" component="div">
                    Manage your activities by Dashboard
                </Typography>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;
