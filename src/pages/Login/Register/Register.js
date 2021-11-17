import React, { useState } from "react";
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Container,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import registerBanner from "../../../images/register.svg";
import { NavLink, useHistory } from "react-router-dom";

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const history = useHistory();
    const { user, error, registerUserWithEmail, isLoading } = useAuth();

    // text field handle
    const handleOnBlur = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    };

    // Register From submit handler
    const handleRegisterSubmit = (event) => {
        if (registerData?.password1 !== registerData?.password2) {
            alert("Re-Type Password not match");
            return;
        }
        registerUserWithEmail(
            registerData?.email,
            registerData?.password1,
            registerData?.name,
            history
        );
        event.preventDefault();
    };


    return (
        <Box>
            <Container>
                <Grid container sx={{ alignItems: "center", m: 5 }} spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img
                            style={{ width: "100%" }}
                            src={registerBanner}
                            alt="Register banner"
                        />
                    </Grid>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                        <Typography variant="h4" color="darkred" gutterBottom>
                            Register New Account
                        </Typography>
                        {isLoading ? (
                            <div>
                                <CircularProgress />
                            </div>
                        ) : (
                            <form onSubmit={handleRegisterSubmit}>
                                <TextField
                                    sx={{ width: 3 / 4, m: 2 }}
                                    type="text"
                                    name="name"
                                    onBlur={handleOnBlur}
                                    label="Your Name"
                                    variant="filled"
                                    size="small"
                                />
                                <TextField
                                    sx={{ width: 3 / 4, m: 2 }}
                                    type="email"
                                    name="email"
                                    onBlur={handleOnBlur}
                                    label="Your Email"
                                    variant="filled"
                                    size="small"
                                />
                                <TextField
                                    sx={{ width: 3 / 4, m: 2 }}
                                    type="password"
                                    name="password1"
                                    onBlur={handleOnBlur}
                                    label="Password"
                                    variant="filled"
                                    size="small"
                                />
                                <TextField
                                    sx={{ width: 3 / 4, m: 2 }}
                                    type="password"
                                    name="password2"
                                    label="Re-type Password"
                                    onBlur={handleOnBlur}
                                    variant="filled"
                                    size="small"
                                />
                                <Button
                                    sx={{ width: 3 / 4, m: 1 }}
                                    variant="contained"
                                    type="submit"
                                >
                                    Register
                                </Button>
                            </form>
                        )}
                        {user?.email && (
                            <Alert
                                sx={{ p: 2, width: 2 / 4, mx: "auto" }}
                                severity="success"
                            >
                                Congrats! New Account Created
                            </Alert>
                        )}
                        {error && <Alert severity="error">{error}</Alert>}
                        <NavLink style={{ textDecoration: "none" }} to="/login">
                            <Button>Already Registerd? Please Login</Button>
                        </NavLink>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Register;
