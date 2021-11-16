import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const HomeProduct = ({ productOverview }) => {
    const { img, title, price, sensor, spaciality, retio } = productOverview;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ textAlign: "left" }}>
                <CardActionArea>
                    <CardMedia component="img" height="300" image={img} alt="Camera-Image" />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {title.slice(0, 40)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            &bull;&nbsp;&nbsp;{sensor}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            &bull;&nbsp;&nbsp;{spaciality}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            &bull;&nbsp;&nbsp;{retio}
                        </Typography>{" "}
                        <Typography
                            variant="h6"
                            sx={{
                                textAlign: "end",
                                color: "darkkhaki",
                                fontWeight: 600,
                            }}
                        >
                            Price: ${price}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Link style={{ textDecoration: "none" }}>
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
                </CardActions>
            </Card>
        </Grid>
    );
};

export default HomeProduct;
