import {
    Grid,
    Box,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Button,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { img, title, price, sensor, spaciality, retio, _id } = product || {};
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Box>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        sx={{ maxHeight: "300px" }}
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {title.slice(0, 45)}
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{ textAlign: "start" }}
                            color="error"
                        >
                            amount: ${price}
                        </Typography>
                        <Box sx={{ textAlign: "end" }}>
                            
                            <Typography variant="body2" color="CaptionText">
                                {sensor}&nbsp;&nbsp;&bull;
                            </Typography>
                            <Typography variant="body2" color="CaptionText">
                                {spaciality}&nbsp;&nbsp;&bull;
                            </Typography>
                            <Typography variant="body2" color="CaptionText">
                                {retio}&nbsp;&nbsp;&bull;
                            </Typography>
                        </Box>

                        <Typography variant="div" sx={{ textAlign: "end" }}>
                            <Link
                                style={{
                                    textDecoration: "none",
                                }}
                                to={`/product/${_id}`}
                            >
                                <Button
                                    sx={{
                                        padding: "10px 20px",
                                        borderRadius: "35px",
                                        fontWeight: "600px",
                                        mt: 2,
                                    }}
                                    variant="contained"
                                    size="small"
                                    color="warning"
                                >
                                    Buy Now
                                </Button>
                            </Link>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Box>
        </Grid>
    );
};

export default Product;
