import { Box, Container, Grid } from "@mui/material";
import React from "react";
import "./Featured.css";

const Featured = () => {
    return (
        <Box sx={{ my: 5, p: 2, bgcolor: "#ccc1a9" }}>
            <h1>Featured Products</h1>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={12}>
                                <div className="box-container">
                                    <img
                                        src="https://template.hasthemes.com/garcia/garcia/assets/images/products/product2-3.jpg"
                                        alt=""
                                    />
                                    <div className="text-container">
                                        <h5>
                                            <span>Red Digital Camera</span>
                                            <span>$275.99</span>
                                        </h5>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <div className="box-container">
                                    <img
                                        src="https://template.hasthemes.com/garcia/garcia/assets/images/products/product-7.jpg"
                                        alt=""
                                    />
                                    <div className="text-container">
                                        <h5>
                                            <span>Red Digital Camera</span>
                                            <span>$285.99</span>
                                        </h5>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <div className="box-container">
                                    <img
                                        src="https://template.hasthemes.com/garcia/garcia/assets/images/products/product-15.jpg"
                                        alt=""
                                    />
                                    <div className="text-container">
                                        <h5>
                                            <span>Smart 4K Camera</span>
                                            <span>$599.99</span>
                                        </h5>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            display="grid"
                            gridTemplateColumns="repeat(12, 1fr)"
                            gridTemplateRows="repeat(2, 1fr)"
                            gap={1}
                        >
                            <Box gridColumn="span 6" gridRow="span 2">
                                <div className="box-container">
                                    <img
                                        src="https://template.hasthemes.com/garcia/garcia/assets/images/products/product2-4.jpg"
                                        alt=""
                                    />
                                    <div className="text-container">
                                        <h5>
                                            <span>Puls Coolpix SS3</span>
                                            <span>$215.99</span>
                                        </h5>
                                    </div>
                                </div>
                            </Box>
                            <Box gridColumn="span 6" gridRow="span 1">
                                <div className="box-container">
                                    <img
                                        src="https://template.hasthemes.com/garcia/garcia/assets/images/products/product-14.jpg"
                                        alt=""
                                    />
                                    <div className="text-container">
                                        <h5>
                                            <span>Relar ProPlus 110</span>
                                            <span>$325.99</span>
                                        </h5>
                                    </div>
                                </div>
                            </Box>
                            <Box gridColumn="span 6" gridRow="span 1">
                                <div className="box-container">
                                    <img
                                        src="https://template.hasthemes.com/garcia/garcia/assets/images/products/product-11.jpg"
                                        alt=""
                                    />
                                    <div className="text-container">
                                        <h5>
                                            <span>
                                                Axor Digital camera (Pink)
                                            </span>
                                            <span>$295.99</span>
                                        </h5>
                                    </div>
                                </div>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Featured;
