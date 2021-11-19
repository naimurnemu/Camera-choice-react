import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const AddReview = ({ reviews, setIsClicked, isClickd }) => {
    const [reviewData, setReviewData] = useState({});
    const { user } = useAuth();
    const { email } = user;
    const date = new Date();

    // review collect
    const handleOnBlur = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newReviewData = { ...reviewData, email };
        newReviewData[field] = value;
        newReviewData["time"] = date.toLocaleDateString();
        setReviewData(newReviewData);
    };

    // review submit
    const handleReviewSubmit = (event) => {
        axios.post("https://polar-dusk-85924.herokuapp.com/reviews", reviewData).then((res) => {
            if (res?.data?.acknowledged) {
                alert("Thanks For Your Honest Review");
                reviews.push(reviewData);
                setIsClicked(true);
            }
        });
        event.preventDefault();
    };
    return (
        <Box>
            <Typography
                sx={{ fontWeight: "600" }}
                variant="h5"
                gutterBottom
                component="div"
                color="primary"
            >
                Give a honest review:
            </Typography>
            <form onSubmit={handleReviewSubmit}>
                <TextField
                    sx={{ width: 3 / 4, m: 1 }}
                    type="number"
                    name="rate"
                    label="Add Point (max: 5) & (min: 1)"
                    onBlur={handleOnBlur}
                    size="small"
                />

                <TextField
                    sx={{ width: 3 / 4, m: 1 }}
                    type="text"
                    name="feedback"
                    label="Enter review"
                    onBlur={handleOnBlur}
                    size="small"
                />
                {isClickd ? (
                    <Button
                        sx={{ width: 3 / 4, m: 1 }}
                        variant="contained"
                        type="submit"
                        color="warning"
                        disabled
                    >
                        Add Review
                    </Button>
                ) : (
                    <Button
                        sx={{ width: 3 / 4, m: 1 }}
                        variant="contained"
                        type="submit"
                        color="warning"
                    >
                        Add Review
                    </Button>
                )}
            </form>
        </Box>
    );
};

export default AddReview;
