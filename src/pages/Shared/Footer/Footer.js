import React from "react";
import Box from "@mui/material/Box";
import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RedditIcon from "@mui/icons-material/Reddit";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
    const footerStyles = makeStyles({
        footerItem: {
            color: "#d1d1c7",
            margin: "0",
            padding: "5px",
            textDecoration: "none",
            fontSize: "15px",
        },
        mediaIcon: {
            display: "inline-block",
            margin: "5px",
            background: "#808080",
            color: "#f1d1f7",
            padding: "5px 8px",
            borderRadius: "35px",
        },
    });

    const { footerItem, mediaIcon } = footerStyles();
    return (
        <Box
            component="div"
            sx={{
                bgcolor: "#212121",
                flexGrow: 1,
                color: "#d1f0f0",
                textAlign: "justify",
            }}
        >
            <Container sx={{ py: 3 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom component="div">
                            About us
                        </Typography>
                        <Typography
                            variant="body2"
                            className={footerItem}
                            gutterBottom
                        >
                            The new hero pieces bring instant fashion
                            credibility. Bright florals clash with camouflage
                            prints. Best our customer supports.
                        </Typography>
                        <p style={{ margin: 0 }}>
                            <Link className={footerItem} to="/reviews">
                                Feedbacks & Reviews
                            </Link>
                        </p>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom component="div">
                            Information
                        </Typography>
                        <p style={{ marginBottom: "5px" }}>
                            <Link className={footerItem} to="/shop">
                                Explore Shop
                            </Link>
                        </p>
                        <p className={footerItem}>Privacy Policy</p>
                        <p className={footerItem}>Terms & Conditions</p>
                        <p className={footerItem}>Return Policy</p>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom component="div">
                            Follow us
                        </Typography>
                        <span className={mediaIcon}>
                            <TwitterIcon />
                        </span>
                        <span className={mediaIcon}>
                            <FacebookOutlinedIcon />
                        </span>
                        <span className={mediaIcon}>
                            <InstagramIcon />
                        </span>
                        <span className={mediaIcon}>
                            <PinterestIcon />
                        </span>
                        <span className={mediaIcon}>
                            <RedditIcon />
                        </span>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom component="div">
                            Get In Touch
                        </Typography>

                        <p className={footerItem}>
                            <HomeIcon />
                            <br />
                            <span>114, Uttora, Dhaka.</span>
                        </p>
                        <hr style={{ margin: 0 }} />
                        <p className={footerItem}>
                            <PhoneIcon />
                            <br />
                            <span>(102) 6666 8888</span>
                        </p>
                        <hr style={{ margin: 0 }} />
                        <p className={footerItem}>
                            <EmailIcon />
                            <br /> <span>info@camerashop.com</span>
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
