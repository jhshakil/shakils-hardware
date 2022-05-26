import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading'

const HomeReview = () => {
    const { data: reviews, isLoading, refetch } = useQuery('homeReview', () => fetch('http://localhost:5000/review').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    let sliceReview = [...reviews].reverse().slice(0, 3)
    return (
        <div className='my-16'>
            <h2 className='text-center font-bold text-3xl'>Our Customer Review</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 m-8'>
                {
                    sliceReview.map(review => <div key={review._id} className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body grid grid-cols-2">
                            <div className="card-actions">
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={review.img} alt='' />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className="card-title">{review.name}</h2>
                                <p>{review.comment}</p>
                                <p>Rating: {review.rating}</p>
                            </div>
                        </div>
                    </div>)
                }

            </div>
            <button className="btn btn-md block m-auto"><Link to='/allReview'>See All Reviews</Link></button>
        </div>
    );
};

export default HomeReview;