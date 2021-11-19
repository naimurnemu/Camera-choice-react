import {
    Box,
    Card,
    CardContent,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import homeReview from "../../../images/homereviewBanner.svg";

const HomeReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    const homeReviews = reviews.slice(0, 6);

    return (
        <Box>
            <h2>Our Clients Says:</h2>
            <Container>
                <Grid
                    container
                    sx={{
                        justifyContent: "space-evenly",
                        alignItems: "center",
                    }}
                    spacing={2}
                >
                    <Grid item sx={12} md={6}>
                        <img
                            style={{ width: "100%" }}
                            src={homeReview}
                            alt=""
                        />
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <Box sx={{ m: 1 }}>
                            <Grid container spacing={1}>
                                {homeReviews.map((review) => (
                                    <Grid item xs={12} md={6}>
                                        <Card
                                            sx={{
                                                textAlign: "start",
                                                m: 2,
                                                bgcolor: "aliceblue",
                                            }}
                                        >
                                            <CardContent>
                                                <Typography
                                                    sx={{ fontSize: 12 }}
                                                    color="text.secondary"
                                                    gutterBottom
                                                >
                                                    from
                                                    {review?.email}
                                                </Typography>

                                                <Typography
                                                    variant="h5"
                                                    gutterBottom
                                                    sx={{ mb: 1, mt: 0 }}
                                                    color="primary"
                                                >
                                                    "{review?.feedback}."
                                                </Typography>
                                                <p
                                                    style={{
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    <span>
                                                        <Rating
                                                            name="read-only"
                                                            value={review?.rate}
                                                            readOnly
                                                        />
                                                    </span>
                                                    <br />
                                                    <span>
                                                        <small>
                                                            at {review?.time}
                                                        </small>
                                                    </span>
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HomeReview;
