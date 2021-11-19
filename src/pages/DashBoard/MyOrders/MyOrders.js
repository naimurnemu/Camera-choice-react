import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    // find user all orders
    const url = `https://polar-dusk-85924.herokuapp.com/orders/${user.email}`;
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setMyOrders(data));
    }, []);

    // cancel Order handler
    const cancelOrder = (deleteId) => {
        const proceed = window.confirm("Are you want to Cancel Order?");
        if (proceed) {
            const deleteUrl = `https://polar-dusk-85924.herokuapp.com/order/${deleteId}`;
            fetch(deleteUrl, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount === 1) {
                        const remaining = myOrders.filter(
                            (myOrder) => myOrder.orderId !== deleteId
                        );

                        alert("Order cancel done!");
                        setMyOrders(remaining);
                    }
                });
        }
    };

    return (
        <div>
            <h2>My All Pendding Orders:</h2>
            <Box>
                {myOrders.map((order) => (
                    <Container>
                        <Card>
                            <Grid container>
                                <Grid item xs={4}>
                                    <CardMedia
                                        component="img"
                                        image={order?.img}
                                        alt="Camera & Exccosories Image"
                                    />
                                </Grid>
                                <Grid item xs={8}>
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                        >
                                            {order?.title.slice(0, 25)}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                mt: 0,
                                                mb: 2,
                                                color: "goldenrod",
                                            }}
                                            color="darkblue"
                                        >
                                            payment: ${order?.price}
                                        </Typography>
                                        <Button
                                            onClick={() =>
                                                cancelOrder(order?.orderId)
                                            }
                                            color="error"
                                            variant="contained"
                                            size="small"
                                        >
                                            Cancel
                                        </Button>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </Card>
                    </Container>
                ))}
            </Box>
        </div>
    );
};

export default MyOrders;
