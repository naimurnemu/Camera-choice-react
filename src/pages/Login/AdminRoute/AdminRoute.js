import { CircularProgress } from "@mui/material";
import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
    const { user , admin , isLoading } = useAuth();

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
                    user.email && admin ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: location },
                            }}
                        />
                    )
                }
            />
        );
    }
};

export default AdminRoute;