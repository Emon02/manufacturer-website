import React from 'react';
import BusinessSummery from './BusinessSummery';
import HomeBanner from './HomeBanner';
import HomeContactUS from './HomeContactUS';
import Review from './Review';
import Subscribe from './Subscribe';
import Tools from './Tools';

const Home = () => {
    return (
        <div className='bg-[#FDF7FF]'>
            <div className='container mx-auto'>
                <HomeBanner></HomeBanner>
                <Tools></Tools>
                <BusinessSummery></BusinessSummery>
                <Review></Review>
                <HomeContactUS></HomeContactUS>
                <Subscribe></Subscribe>
            </div>
        </div>
    );
};

export default Home;