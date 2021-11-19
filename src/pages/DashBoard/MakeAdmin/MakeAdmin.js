import { Container, Grid, Box, TextField, Button, Alert } from "@mui/material";
import React, { useState } from "react";
import adminBannar from "../../../images/admin.svg";

const MakeAdmin = () => {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false)
    const handleOnBlur = (event) => {
        setEmail(event.target.value);
    };

    const handleMakeAdmin = (event) => {
        const user = { email };
        fetch("http://localhost:5000/users/admin", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) =>{
                if(data.modifiedCount){
                    setSuccess(true)
                }
                
            });

        event.preventDefault();
    };
    return (
        <Container>
            <h1>Make an Admin: </h1>
            <Box sx={{ p: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <form onSubmit={handleMakeAdmin}>
                            <TextField
                                sx={{ width: "75%", mb: 4 }}
                                type="email"
                                label="Email"
                                onBlur={handleOnBlur}
                                variant="standard"
                            />
                            <Button
                                type="submit"
                                sx={{ width: "75%" }}
                                color="primary"
                                variant="contained"
                            >
                                Make Admin
                            </Button>
                        </form>
                        {success && (
                            <Alert
                                sx={{ p: 2, width: 2 / 4, mx: "auto" }}
                                severity="success"
                            >
                                Admin Made successful!
                            </Alert>
                        )}
                        <br />
                        <br />
                        <br />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <img
                            style={{ width: "100%" }}
                            src={adminBannar}
                            alt=""
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default MakeAdmin;
