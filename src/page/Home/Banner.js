import React from 'react';
import bannerImage from '../../image/banner/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-min bg-gradient-to-r from-primary to-secondary text-white">
            <div className="hero-content py-0 flex-col justify-between lg:flex-row-reverse">
                <img src={bannerImage} className="max-w-lg" alt='Banner' />
                <div className='p-8'>
                    <h1 className="text-5xl font-bold">Welcome To Shakil's Hardware</h1>
                    <p className="py-6">It is a hardware manufacture company. We produce lots of product and received order for customize product</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;