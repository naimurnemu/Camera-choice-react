import { CircularProgress } from "@mui/material";
import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    // Private route reload control
    if (isLoading) {
        return (
            <div style={{ height: "600px" }}>
                <CircularProgress color="success" />
                <h5>Loading..</h5>
            </div>
        );
    } else {
        return (
            <Route
                {...rest}
                render={({ location }) =>
                    user.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location },
                            }}
                        />
                    )
                }
            />
        );
    }
};

export default PrivateRoute;
