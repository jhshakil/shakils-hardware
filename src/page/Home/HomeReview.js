import React from 'react';
import { useQuery } from 'react-query';

const HomeReview = () => {
    const { data: reviews } = useQuery('homeReview', () => fetch('fakeReview.json').then(res => res.json()))
    return (
        <div className='my-16'>
            <h2 className='text-center font-bold text-3xl'>Our Customer Review</h2>
            <div className='grid grid-cols-3 gap-12 m-8'>
                {
                    reviews?.map(review => <div class="card w-full bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">{review.name}</h2>
                            <p>{review.description}</p>
                            <div class="card-actions">
                                <div class="avatar">
                                    <div class="w-24 rounded-full">
                                        <img src={review.img} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <button class="btn btn-md block m-auto">See All Reviews</button>
        </div>
    );
};

export default HomeReview;