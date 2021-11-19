import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import HomeProduct from "../HomeProduct/HomeProduct";

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://polar-dusk-85924.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    const productOverviews = products.slice(0, 6);
    return (
        <Box>
            <h1>Product Highlighits</h1>
            <Container>
                <Grid container spacing={2}>
                    {productOverviews.map((productOverview) => (
                        <HomeProduct
                            key={productOverview._id}
                            productOverview={productOverview}
                        ></HomeProduct>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default HomeProducts;
