import React, { useState } from "react";
import {
    Button,
    Box,
    Grid,
    Container,
    TextField,
    Typography,
    CircularProgress,
    Alert,
} from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import loginBanner from "../../../images/login.svg";
import { useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { signInWithGoogle, loginUserWithEmail, user, error, isLoading } =
        useAuth();
    const location = useLocation();
    const history = useHistory();

    // Input Field data Handle
    const handleOnBlur = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };

    // Form submit handler
    const handleLoginSubmit = (event) => {
        loginUserWithEmail(
            loginData?.email,
            loginData?.password,
            location,
            history
        );
        event.preventDefault();
    };

    // Handeling Google signIn
    const googleSignInHandler = () => {
        signInWithGoogle(location, history);
    };

    return (
        <Box>
            <Container>
                <Grid container spacing={3} sx={{ alignItems: "center" }}>
                    <Grid xs={12} md={6} sx={{ p: 3 }}>
                        <img
                            style={{ width: "100%", height: "100%" }}
                            src={loginBanner}
                            alt=""
                        />
                    </Grid>
                    <Grid xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>
                            Please Login
                        </Typography>
                        {/* Loading for controll reload */}
                        {isLoading ? (
                            <div>
                                <CircularProgress />
                            </div>
                        ) : (
                            <form onSubmit={handleLoginSubmit}>
                                <TextField
                                    sx={{ width: 3 / 4, m: 1 }}
                                    type="email"
                                    name="email"
                                    label="Enter Your Email"
                                    onBlur={handleOnBlur}
                                    size="small"
                                />
                                <TextField
                                    sx={{ width: 3 / 4, m: 1 }}
                                    type="password"
                                    name="password"
                                    label="Enter Password"
                                    onBlur={handleOnBlur}
                                    size="small"
                                />
                                <Button
                                    sx={{ width: 3 / 4, m: 1 }}
                                    variant="contained"
                                    type="submit"
                                    color="success"
                                >
                                    Login
                                </Button>
                            </form>
                        )}
                        {user?.email && (
                            <Alert
                                sx={{ p: 2, width: 2 / 4, mx: "auto" }}
                                severity="success"
                            >
                                Login successful!
                            </Alert>
                        )}
                        {error && <Alert severity="error">{error}</Alert>}
                        {/* Regiter Routing */}
                        <NavLink
                            style={{ textDecoration: "none" }}
                            to="/register"
                        >
                            <Button>New User? Please Register</Button>
                        </NavLink>
                        <hr style={{ width: "50%" }} />
                        <Button
                            onClick={googleSignInHandler}
                            color="error"
                            variant="contained"
                        >
                            <GoogleIcon /> Google signIn
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Login;
