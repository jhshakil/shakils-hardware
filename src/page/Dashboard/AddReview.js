import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className='my-4 flex justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center">
                    <h2 className="card-title text-3xl font-bold">Add a review</h2>
                    <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text"
                                className="input input-bordered w-full"
                                {...register("name")}
                            />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                className="input input-bordered w-full"
                                {...register("email")}
                            />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Comment</span>
                            </label>
                            <input type="text"
                                placeholder="Enter Your Description"
                                className="input input-bordered w-full"
                                {...register("comment", {
                                    required: {
                                        value: true,
                                        message: 'Comment is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.comment?.type === 'required' &&
                                    <span className='text-red-500'>{errors.comment.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number"
                                placeholder="Enter Your Rating"
                                className="input input-bordered w-full"
                                {...register("rating", {
                                    required: {
                                        value: true,
                                        message: 'rating is Required'
                                    },
                                    pattern: {
                                        value: /^(0|[1-5]\d*)(\.\d+)?$/,
                                        massage: 'Provide a valid Rating'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.rating?.type === 'required' &&
                                    <span className='text-red-500'>{errors.rating.message}</span>}
                                {errors.rating?.type === 'pattern' &&
                                    <span className='text-red-500'>{errors.rating.message}</span>}
                            </label>
                        </div>
                        <input className='btn btn-natural block m-auto w-full font-bold'
                            type="submit" value='Add Review' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;