import { Box, CircularProgress, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    if (products.length === 0) {
        return (
            <div>
                
                <br />
                <CircularProgress />
                <p>Loading...</p>
            </div>
        );
    } else {
        return (
            <Box>
                <Container>
                    <Grid container spacing={3}>
                        {products.map((product) => (
                            <Product
                                product={product}
                                key={product._id}
                            ></Product>
                        ))}
                    </Grid>
                </Container>
            </Box>
        );
    }
};

export default Products;
