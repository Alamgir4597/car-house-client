import React from 'react';
import Banner from '../Banner/Banner';
import ExtraOne from '../ExtraOne/ExtraOne';
import ExtraTwo from '../ExtraTwo/ExtraTwo';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Banner></Banner>
            <Products></Products>
            <ExtraOne></ExtraOne>
            <ExtraTwo></ExtraTwo>
            <Footer></Footer>
        </div>
    );
};

export default Home;