import { Grid, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import likeDislike from "../../../images/likeDislike.svg";
import AddReview from "../AddReview/AddReview";
import Review from "../Review/Review";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isClickd, setIsClicked] = useState(false);
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, [isClickd]);

    return (
        <Box>
            <Header />
            <br />
            <br />
            <h1>
                Your Personal Opinion Make us Happy & Inspire to do Some Great!
            </h1>
            <Box>
                <Grid
                    container
                    sx={{
                        justifyContent: "space-evenly",
                        alignItems: "center",
                    }}
                    spacing={2}
                >
                    {reviews.map((review) => (
                        <Review key={review._id} review={review} />
                    ))}
                </Grid>
            </Box>
            <Grid
                container
                sx={{
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}
                spacing={3}
            >
                <Grid item xs={12} md={6}>
                    <AddReview
                        setIsClicked={setIsClicked}
                        isClickd={isClickd}
                        reviews={reviews}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={likeDislike} alt="" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Reviews;
