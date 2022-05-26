import React from 'react';
import order from '../../image/icon/order.svg';
import factory from '../../image/icon/factory.svg';
import packaging from '../../image/icon/package.svg'
import delivery from '../../image/icon/dealer.svg'

const OurWork = () => {
    return (
        <div className="card">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl font-bold">How We Work</h2>
                <div className="w-full my-4 grid grid-cols-1 lg:grid-cols-4">
                    <div>
                        <div class="avatar">
                            <div class="w-16 rounded-xl">
                                <img src={order} alt='' />
                            </div>
                        </div>
                        <h3 className='text-5xl  my-4 font-bold text-neutral'>1</h3>
                        <p className='font-bold'>We Collect Order</p>
                    </div>
                    <div>
                        <div class="avatar">
                            <div class="w-16 rounded-xl">
                                <img src={factory} alt='' />
                            </div>
                        </div>
                        <h3 className='text-5xl  my-4 font-bold text-neutral'>2</h3>
                        <p className='font-bold'>Make in The Factory</p>
                    </div>
                    <div>
                        <div class="avatar">
                            <div class="w-16 rounded-xl">
                                <img src={packaging} alt='' />
                            </div>
                        </div>
                        <h3 className='text-5xl  my-4 font-bold text-neutral'>3</h3>
                        <p className='font-bold'>Package Carefully</p>
                    </div>
                    <div>
                        <div class="avatar">
                            <div class="w-16 rounded-xl">
                                <img src={delivery} alt='' />
                            </div>
                        </div>
                        <h3 className='text-5xl  my-4 font-bold text-neutral'>4</h3>
                        <p className='font-bold'>First Delivery</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWork;