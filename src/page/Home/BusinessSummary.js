import React from 'react';
import bannerImage from '../../image/banner/banner.jpg'

const BusinessSummary = () => {
    return (
        <div class="hero min-h-min bg-gradient-to-r from-primary to-secondary text-white">
            <div class="hero-content py-0 justify-between flex-col lg:flex-row">
                <img src={bannerImage} class="max-w-lg" alt='images' />
                <div className='p-8'>
                    <h1 class="text-5xl font-bold">Business Summary</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-natural font-bold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;