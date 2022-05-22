import React from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import HomeReview from './HomeReview';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <HomeReview></HomeReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;