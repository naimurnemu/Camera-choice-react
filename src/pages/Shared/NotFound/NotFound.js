import React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import notFound from "../../../images/not_found.svg";

const NotFound = () => {
    return (
        <div>
            <Box sx={{ m: "30px" }}>
                <Typography variant="h5" color="red">
                    Your finding page in not available.
                </Typography>
                <img style={{ width: "100%" }} src={notFound} alt="" />
                <br />
                <NavLink style={{ textDecoration: "none" }} to="/">
                    <Button variant="contained" color="warning">
                        Back to home
                    </Button>
                </NavLink>
            </Box>
        </div>
    );
};

export default NotFound;
