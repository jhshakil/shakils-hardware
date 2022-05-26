import React from 'react';
import Footer from '../Footer/Footer';
import AllReview from '../Review/AllReview';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Capability from './Capability';
import HomeReview from './HomeReview';
import OurWork from './OurWork';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <Tools></Tools>
            <Capability></Capability>
            <HomeReview></HomeReview>
            <OurWork></OurWork>
            <Footer></Footer>
        </div>
    );
};

export default Home;