import React from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import HomeReview from './HomeReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <HomeReview></HomeReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;