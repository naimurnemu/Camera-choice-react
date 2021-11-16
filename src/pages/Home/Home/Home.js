import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Featured from "../Featured/Featured";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeProducts from "../HomeProducts/HomeProducts";

const Home = () => {
    return (
        <div>
            <Header />
            <HomeBanner />
            <HomeProducts />
            <Featured />
            <h2>This is home</h2>
            <Footer />
        </div>
    );
};

export default Home;
