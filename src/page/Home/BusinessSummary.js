import React from 'react';
import factory from '../../image/icon/factory.svg'
import worker from '../../image/icon/worker.svg'
import client from '../../image/icon/client.svg'
import dealer from '../../image/icon/dealer.svg'

const BusinessSummary = () => {
    return (
        <div className="card">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl font-bold">Our Business Summary</h2>
                <p>We Provide Best Service In Our Country</p>
                <div className="w-full my-4 grid grid-cols-4">
                    <div>
                        <div class="avatar">
                            <div class="w-16 rounded-xl">
                                <img src={factory} alt='' />
                            </div>
                        </div>
                        <p className='font-bold'>Factory</p>
                        <h3 className='text-5xl  my-4 font-bold text-neutral'>7</h3>
                    </div>
                    <div>
                        <div class="avatar">
                            <div class="w-16 rounded-xl">
                                <img src={worker} alt='' />
                            </div>
                        </div>
                        <p className='font-bold'>Worker</p>
                        <h3 className='text-5xl  my-4 font-bold text-neutral'>50000 +</h3>
                    </div>
                    <div>
                        <div class="avatar">
                            <div class="w-16 rounded-xl">
                                <img src={client} alt='' />
                            </div>
                        </div>
                        <p className='font-bold'>Client</p>
                        <h3 className='text-5xl  my-4 font-bold text-neutral'>700 +</h3>
                    </div>
                    <div>
                        <div class="avatar">
                            <div class="w-16 rounded-xl">
                                <img src={dealer} alt='' />
                            </div>
                        </div>
                        <p className='font-bold'>Dealer</p>
                        <h3 className='text-5xl  my-4 font-bold text-neutral'>12000 +</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;