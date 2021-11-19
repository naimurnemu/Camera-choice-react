import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Featured from "../Featured/Featured";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeProducts from "../HomeProducts/HomeProducts";
import HomeReview from "../HomeReview/HomeReview";

const Home = () => {
    return (
        <div>
            <Header />
            <HomeBanner />
            <HomeProducts />
            <Featured />
            <HomeReview />
            <Footer />
        </div>
    );
};

export default Home;
