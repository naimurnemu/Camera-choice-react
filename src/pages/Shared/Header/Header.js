import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CameraOutdoorIcon from "@mui/icons-material/CameraOutdoor";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import InfoIcon from "@mui/icons-material/Info";
import Dashboard from "@mui/icons-material/Dashboard";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { user, logOut } = useAuth();
    const theme = useTheme();
    const useStyle = makeStyles({
        navItem: {
            color: "#fff",
            textDecoration: "none",
            marginRight: "10px",
            fontWeight: 500,
            fontSize: "15px",
        },

        drawarItem: {
            color: "#000",
            textDecoration: "none",
            fontWeight: 500,
            fontSize: "16px",
            margin: "5px 0",
        },

        navIcon: {
            [theme.breakpoints.up("sm")]: {
                display: "none !important",
                textAlign: "left",
            },
        },
        navLogo: {
            [theme.breakpoints.down("sm")]: {
                textAlign: "right !important",
            },
        },
        navItemContainer: {
            [theme.breakpoints.down("sm")]: {
                display: "none",
            },
        },
    });
    const { navItem, navIcon, navItemContainer, navLogo, drawarItem } =
        useStyle();

    // drawar Item list
    const list = (
        <Box
            sx={{
                width: 200,
            }}
            role="presentation"
        >
            <List>
                {user?.email && (
                    <h4>
                        <PersonIcon /> {user?.displayName}
                    </h4>
                )}
                <Divider />
                <ListItem button>
                    <HomeIcon />
                    <Link className={drawarItem} to="/">
                        Home
                    </Link>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ShoppingBagIcon />
                    <Link className={drawarItem} to="/shop">
                        Shop
                    </Link>
                </ListItem>
                <Divider />
                <ListItem button>
                    <InfoIcon />
                    <Link className={drawarItem} to="/about">
                        About Us
                    </Link>
                </ListItem>
                <Divider />
                <ListItem button>
                    <Dashboard />
                    <Link className={drawarItem} to="/dashboard">
                        DashBoard
                    </Link>
                </ListItem>
                <Divider />
                <ListItem button>
                    {user.email ? (
                        <Button
                            onClick={logOut}
                            color="error"
                            variant="contained"
                        >
                            Logout
                        </Button>
                    ) : (
                        <Link className={drawarItem} to="/login">
                            <Button color="primary" variant="outlined">
                                <LoginIcon />
                                Login
                            </Button>
                        </Link>
                    )}
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            {/*---------- Navigation Bar----------- */}
            <AppBar variant="elevation" position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ ms: 2 }}
                        className={navIcon}
                        onClick={() => setIsOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h5"
                        component="div"
                        className={navLogo}
                        sx={{ flexGrow: 1, textAlign: "left" }}
                    >
                        <span style={{ color: "black", fontWeight: 600 }}>
                            <CameraOutdoorIcon />
                            Camera
                        </span>
                        Choice
                    </Typography>

                    <Box className={navItemContainer}>
                        <Link className={navItem} to="/">
                            Home
                        </Link>
                        <Link className={navItem} to="/shop">
                            Shop
                        </Link>
                        <Link className={navItem} to="/about">
                            About Us
                        </Link>
                        {user.email ? (
                            <>
                                <Link className={navItem} to="/dashboard">
                                    DashBoard
                                </Link>
                                <Link className={navItem} to="/">
                                    <Button
                                        size="small"
                                        onClick={logOut}
                                        color="error"
                                        variant="contained"
                                    >
                                        Logout
                                    </Button>
                                </Link>
                            </>
                        ) : (
                            <Link className={navItem} to="/login">
                                <Button
                                    size="small"
                                    sx={{ bgcolor: "#fae8be", color: "black" }}
                                    variant="outlined"
                                >
                                    Login
                                </Button>
                            </Link>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Expand drawar by click */}
            <div>
                <React.Fragment>
                    <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
                        {list}
                    </Drawer>
                </React.Fragment>
            </div>
        </Box>
    );
};

export default Header;
