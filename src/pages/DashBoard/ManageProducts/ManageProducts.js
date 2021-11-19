import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const ManageProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setAllProducts(data));
    }, []);

    // Product delete handle
    const handleDeleteProduct = (id) => {
        const proceed = window.confirm("Confirm to Remove this Product?");
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount === 1) {
                        const remaining = allProducts.filter(
                            (allProduct) => allProduct._id !== id
                        );
                        alert("Product deleted Done!");
                        setAllProducts(remaining);
                    }
                });
        }
    };

    return (
        <Box>
            <Container>
                <Grid container spacing={3}>
                    {allProducts.map((allProduct) => (
                        <Grid
                            key={allProduct._id}
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                        >
                            <Card>
                                <CardMedia
                                    component="img"
                                    image={allProduct?.img}
                                    alt="camera image"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="body1"
                                        component="div"
                                    >
                                        {allProduct?.title}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        onClick={() =>
                                            handleDeleteProduct(allProduct._id)
                                        }
                                        size="small"
                                        variant="contained"
                                        color="error"
                                    >
                                        Delete
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ManageProducts;
