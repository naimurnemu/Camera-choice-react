import { Card, CardContent, Grid, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import React from "react";

const Review = ({ review }) => {
    const { email, rate, feedback, time } = review || {};

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ textAlign: "start", m: 2 }}>
                <CardContent>
                    <Typography
                        sx={{ fontSize: 12 }}
                        color="text.secondary"
                        gutterBottom
                    >
                        from {email}
                    </Typography>

                    <Typography
                        variant="h5"
                        gutterBottom
                        sx={{ mb: 1, mt: 0 }}
                        color="primary"
                    >
                        "{feedback}."
                    </Typography>
                    <p
                        style={{
                            textAlign: "center",
                        }}
                    >
                        <span>
                            <Rating name="read-only" value={rate} readOnly />
                        </span>
                        <br />
                        <span>
                            <small>at {time}</small>
                        </span>
                    </p>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Review;
