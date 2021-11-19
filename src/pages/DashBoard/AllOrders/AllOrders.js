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

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    // find all users orders
    useEffect(() => {
        fetch("https://polar-dusk-85924.herokuapp.com/orders")
            .then((res) => res.json())
            .then((data) => setAllOrders(data));
    }, []);

    // Admin Order handler
    const handleDeleteOrder = (deleteId) => {
        const proceed = window.confirm("Confirm to Cancel Order?");
        if (proceed) {
            fetch(`https://polar-dusk-85924.herokuapp.com/order/${deleteId}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount === 1) {
                        const remaining = allOrders.filter(
                            (allOrder) => allOrder.orderId !== deleteId
                        );

                        alert("This Order canceled!");
                        setAllOrders(remaining);
                    }
                });
        }
    };

    return (
        <div>
            <h2>All Orders of Users:</h2>
            <Box>
                <Grid container spacing={3}>
                    {allOrders.map((allOrder) => (
                        <Grid item xs={12} md={6}>
                            <Container>
                                <Card>
                                    <Grid
                                        container
                                        sx={{
                                            alignItems: "center",
                                            borderBottom: 1,
                                            p: 2
                                        }}
                                        spacing={2}
                                    >
                                        <Grid item xs={4}>
                                            <CardMedia
                                                component="img"
                                                image={allOrder?.img}
                                                alt="green iguana"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                >
                                                    {allOrder?.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        mt: 0,
                                                        mb: 2,
                                                        color: "darkblue",
                                                    }}
                                                >
                                                    Order by: {allOrder?.email}
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                        <Grid Item xs={2}>
                                            <CardActions>
                                                <Button
                                                    onClick={() =>
                                                        handleDeleteOrder(
                                                            allOrder?.orderId
                                                        )
                                                    }
                                                    color="error"
                                                    variant="contained"
                                                    size="small"
                                                >
                                                    Cancel
                                                </Button>
                                            </CardActions>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Container>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
};

export default AllOrders;
