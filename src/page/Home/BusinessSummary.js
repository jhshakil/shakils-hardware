import React from 'react';

const BusinessSummary = () => {
    return (
        <div className="card">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl font-bold">Our Business Summary</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="w-full my-4 grid grid-cols-4">
                    <div>
                        <p className='font-bold'>Factory</p>
                        <h3 className='text-5xl  my-4 font-bold text-neutral'>7</h3>
                    </div>
                    <div>
                        <p className='font-bold'>Worker</p>
                        <h3 className='text-5xl  my-4 font-bold text-neutral'>50000 +</h3>
                    </div>
                    <div>
                        <p className='font-bold'>Client</p>
                        <h3 className='text-5xl  my-4 font-bold text-neutral'>700 +</h3>
                    </div>
                    <div>
                        <p className='font-bold'>Dealer</p>
                        <h3 className='text-5xl  my-4 font-bold text-neutral'>12000 +</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;