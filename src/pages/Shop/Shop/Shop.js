import { Typography } from "@mui/material";
import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Products from "../Products/Products";

const Shop = () => {
    return (
        <div style={{marginTop: "80px"}}>
            <Header />
            <Typography sx={{ bgcolor: "honeydew", py: 1, fontWeight:"500" }} variant="h4">
                Explore Camera Details & Purchage Your Choice
            </Typography>
            <Typography sx={{ bgcolor: "honeydew", py: 2, fontWeight:"500" }} variant="body1" component="div">
            Search Product Photography Manchester, Information from Trusted Internet Sources. Explore the Best Info Now Unique Results. Find All Info You Want. Quick Answers. Useful & Relevant.
            </Typography>
            <hr />
            <Products />
            <Footer />
        </div>
    );
};

export default Shop;
