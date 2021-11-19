import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Button } from "@mui/material";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import DashboardHome from "../DashboardHome/DashboardHome";
import Reviews from "../../Reviews/Reviews/Reviews";
import ManageProducts from "../ManageProducts/ManageProducts";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import AllOrders from "../AllOrders/AllOrders";
import Pay from "../Pay/Pay";

// drawar width size
const drawerWidth = 200;

const DashBoard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, logOut } = useAuth();

    // drawar toggole handler
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Drawar items
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <ListItem>
                <Link
                    style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "18px",
                        fontWeight: 600,
                    }}
                    to="/home"
                >
                    <Button color="inherit">Go Home</Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link
                    style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "18px",
                        fontWeight: 600,
                    }}
                    to="/shop"
                >
                    <Button color="inherit">Explore Shop</Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link
                    style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "18px",
                        fontWeight: 600,
                    }}
                    to={`${url}`}
                >
                    <Button color="inherit">My orders</Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link
                    style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "18px",
                        fontWeight: 600,
                    }}
                    to={`${url}/reviews`}
                >
                    <Button color="inherit">User's Feedback</Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link
                    style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "18px",
                        fontWeight: 600,
                    }}
                    to={`${url}/pay`}
                >
                    <Button color="inherit">Pay</Button>
                </Link>
            </ListItem>

            {admin && (
                <>
                    <Divider />
                    <ListItem>
                        <Link
                            style={{
                                textDecoration: "none",
                                color: "black",
                                fontSize: "18px",
                                fontWeight: 600,
                            }}
                            to={`${url}/makeAdmin`}
                        >
                            <Button color="inherit">Make an Admin</Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            style={{
                                textDecoration: "none",
                                color: "black",
                                fontSize: "18px",
                                fontWeight: 600,
                            }}
                            to={`${url}/addProduct`}
                        >
                            <Button color="inherit">Add Product</Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            style={{
                                textDecoration: "none",
                                color: "black",
                                fontSize: "18px",
                                fontWeight: 600,
                            }}
                            to={`${url}/allOrders`}
                        >
                            <Button color="inherit">All Orders</Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            style={{
                                textDecoration: "none",
                                color: "black",
                                fontSize: "18px",
                                fontWeight: 600,
                            }}
                            to={`${url}/manageProducts`}
                        >
                            <Button color="inherit">Manage Products</Button>
                        </Link>
                    </ListItem>
                </>
            )}
            <ListItem>
                <Link
                    style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "18px",
                        fontWeight: 600,
                    }}
                    to="/"
                >
                    <Button
                        size="small"
                        onClick={logOut}
                        color="error"
                        variant="contained"
                    >
                        Logout
                    </Button>
                </Link>
            </ListItem>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            User Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: "block", sm: "none" },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: drawerWidth,
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: "none", sm: "block" },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: drawerWidth,
                            },
                            textAlign: "start",
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                    }}
                >
                    <Toolbar />
                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome />
                        </Route>
                        <Route exact path={`${path}/reviews`}>
                            <Reviews />
                        </Route>
                        <Route exact path={`${path}/pay`}>
                            <Pay />
                        </Route>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin />
                        </AdminRoute>
                        <AdminRoute path={`${path}/addProduct`}>
                            <AddProduct />
                        </AdminRoute>
                        <AdminRoute path={`${path}/allOrders`}>
                            <AllOrders />
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageProducts`}>
                            <ManageProducts />
                        </AdminRoute>
                    </Switch>
                </Box>
            </Box>
        </Box>
    );
};

export default DashBoard;
