import {
    Button,
    Box,
    Container,
    Grid,
    TextField,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Alert,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const AddToCart = () => {
    const [orderData, setOrderData] = useState({});
    const [product, setProduct] = useState({});
    const [isClickd, setIsClicked] = useState(false);
    const { productId } = useParams();
    const { user } = useAuth();

    // Load spacific product
    const url = `https://polar-dusk-85924.herokuapp.com/product/${productId}`;
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);

    const { email, displayName } = user || {};
    const { img, title, price, sensor, spaciality, retio, description } =
        product || {};

    // order info handle event
    const handleOnBlur = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newOrderData = { ...orderData, email, img, title, price };
        newOrderData[field] = value;
        setOrderData(newOrderData);
    };

    // Order data
    console.log(orderData);

    // Order form handler
    const handleOrderSubmit = (event) => {
        axios.post("https://polar-dusk-85924.herokuapp.com/orders", orderData).then((res) => {
            setIsClicked(true);
            if (res?.data?.cknowledged) {
                setIsClicked(true);
            }
        });

        event.preventDefault();
    };

    return (
        <Box>
            <Header />
            <Container sx={{ mt: 8 }}>
                <Typography
                    gutterBottom
                    variant="h5"
                    sx={{ py: 3 }}
                    component="div"
                >
                    {title}
                </Typography>
                <Grid container sx={{ alignItems: "center" }} spacing={2}>
                    <Grid item xs={12} md={6}>
                        <form onSubmit={handleOrderSubmit}>
                            <TextField
                                sx={{ width: 3 / 4, m: 2 }}
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                                label="Your Email"
                                variant="standard"
                                defaultValue={email}
                                disabled
                            />
                            <TextField
                                sx={{ width: 3 / 4, m: 2 }}
                                type="text"
                                name="name"
                                onBlur={handleOnBlur}
                                label="Your Name"
                                variant="standard"
                                defaultValue={displayName}
                            />
                            <TextField
                                sx={{ width: 3 / 4, m: 2 }}
                                type="text"
                                name="address"
                                onBlur={handleOnBlur}
                                label="Address"
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: 3 / 4, m: 2 }}
                                type="text"
                                name="zipcode"
                                label="Your Postal Code"
                                onBlur={handleOnBlur}
                                variant="standard"
                            />
                            {isClickd ? (
                                <Button
                                    sx={{ width: 3 / 4, m: 1 }}
                                    variant="contained"
                                    type="submit"
                                    disabled
                                >
                                    Proceed To Order
                                </Button>
                            ) : (
                                <Button
                                    sx={{ width: 3 / 4, m: 1 }}
                                    variant="contained"
                                    type="submit"
                                >
                                    Proceed To Order
                                </Button>
                            )}
                        </form>
                        {isClickd && (
                            <Alert severity="success">
                                Successfully Proceed Order!
                            </Alert>
                        )}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <CardActionArea>
                                <CardContent>
                                    <Box sx={{ textAlign: "start" }}>
                                        <Typography
                                            variant="h6"
                                            sx={{ textAlign: "start" }}
                                            color="primary"
                                        >
                                            <b>Price: </b>${price}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            color="CaptionText"
                                        >
                                            <b>Senser-type: </b>
                                            {sensor}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            color="CaptionText"
                                        >
                                            <b>Spaciality: </b>
                                            {spaciality} & {retio}.
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="CaptionText"
                                        >
                                            <b>Description: </b>
                                            {description}.
                                        </Typography>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        image={img}
                                        alt="green iguana"
                                    />
                                </CardContent>
                            </CardActionArea>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </Box>
    );
};

export default AddToCart;
