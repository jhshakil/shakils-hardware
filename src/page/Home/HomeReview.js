import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading'

const HomeReview = () => {
    const { data: reviews, isLoading } = useQuery('homeReview', () => fetch('http://localhost:5000/review').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-16'>
            <h2 className='text-center font-bold text-3xl'>Our Customer Review</h2>
            <div className='grid grid-cols-3 gap-12 m-8'>
                {
                    reviews.map(review => <div key={review._id} className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{review.name}</h2>
                            <p>{review.description}</p>
                            <div className="card-actions">
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={review.img} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <button className="btn btn-md block m-auto">See All Reviews</button>
        </div>
    );
};

export default HomeReview;