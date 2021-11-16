import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "./Homebanner.css";
import { Link } from "react-router-dom";

const HomeBanner = () => {
    return (
        <Box>
            <div className="banner-container">
                <img
                    style={{ width: "100%" }}
                    src="https://i.ibb.co/CbBY1Ls/home-banner.jpg"
                    alt=""
                />
                <div className="banner-content">
                    <Typography
                        className="fonts"
                        variant="h3"
                        gutterBottom
                        component="div"
                    >
                        <span>
                            Capture your <br />
                            Beautiful moments
                        </span>
                        <br />
                        <Link style={{ textDecoration: "none" }} to="/shop">
                            <Button
                                sx={{
                                    padding: "10px 20px",
                                    borderRadius: "35px",
                                    fontWeight: "600px",
                                    mt: 2,
                                }}
                                variant="contained"
                            >
                                Explore Shop
                            </Button>
                        </Link>
                    </Typography>
                </div>
            </div>
        </Box>
    );
};

export default HomeBanner;
