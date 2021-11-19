import { Box, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import "./About.css";

const About = () => {
    return (
        <div>
            <Header />
            <Box>
                <div className="about-img-content">
                    <img
                        src="https://i.ibb.co/g9K6YB3/Cmaera-Bazar-Background.jpg"
                        alt=""
                    />
                    <div className="about-text-content">
                        <Typography variant="h3" gutterBottom component="div">
                            About Us
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            component="div"
                        >
                            Passion may be a friendly or eager interest in or
                            admiration for a proposal, cause, discovery, or
                            activity or love to a feeling of unusual excitement.
                        </Typography>
                    </div>
                </div>
            </Box>
            <Container>
                <Grid container spacing={3}>
                    <Grid xs={12} md={6} item>
                        <Card sx={{ m: 4 }}>
                            <img
                                className="square-img"
                                src="https://i1.wp.com/camerabazar.net/wp-content/uploads/2021/01/2.png?w=432&ssl=1"
                                alt=""
                            />
                            <Typography
                                variant="h6"
                                gutterBottom
                                component="div"
                            >
                                What we really want to do?
                            </Typography>
                            <Typography
                                variant="body2"
                                gutterBottom
                                component="div"
                            >
                                "Camera Choice" is of the largest Digital SLR,
                                Camera,4K professional camera, Sony Bravia 4K
                                TV, Mobile, Laptop, CCTV Camera, Memory Card &
                                other Electronics Goods Sales & Servicing
                                company based in Uttora, Dhaka, Bangladesh,
                                Established in 2000.
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid xs={12} md={6} item>
                        <Card sx={{ m: 4 }}>
                            <img
                                className="square-img"
                                src="https://i2.wp.com/camerabazar.net/wp-content/uploads/2021/01/3.png?w=432&ssl=1"
                                alt=""
                            />
                            <Typography
                                variant="h6"
                                gutterBottom
                                component="div"
                            >
                                History of Beginning Us
                            </Typography>
                            <Typography
                                variant="body2"
                                gutterBottom
                                component="div"
                            >
                                So whenever we confirm an order, we can gladly
                                say that it never gets rejected. We gladly
                                receive offers of Electronics goods from
                                suppliers operating in any country all over the
                                world. We offer competitive pricing combined
                                with honest and helpful dealing with outstanding
                                service before, during and after the sale.
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "20px",
                }}
            >
                <div>
                    <img
                        className="circle-img"
                        src="https://i.ibb.co/BZBH2Yw/protfolio-profile-2.jpg"
                        alt=""
                    />
                    <Typography variant="h6" gutterBottom component="div">
                        Naimur Rahman
                      
                    </Typography>
                    <Typography variant="body2" gutterBottom component="div">
                        CEO/Founder
                        
                    </Typography>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
