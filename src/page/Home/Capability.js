import React from 'react';
import bannerImage from '../../image/banner/banner.jpg'

const Capability = () => {
    return (
        <div className="hero min-h-min bg-gradient-to-r from-primary to-secondary text-white">
            <div className="hero-content py-0 justify-between flex-col lg:flex-row">
                <img src={bannerImage} className="max-w-lg" alt='images' />
                <div className='p-8'>
                    <h1 className="text-5xl font-bold">Our Capability</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-natural font-bold">About Us</button>
                </div>
            </div>
        </div>
    );
};

export default Capability;