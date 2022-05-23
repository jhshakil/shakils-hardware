import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const PlaceOrder = () => {
    const { id } = useParams()
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const url = `http://localhost:5000/product/${id}`
    const { data: product, isLoading } = useQuery('productInfo', () => fetch(url).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const onSubmit = data => {
        console.log(data);
    };
    return (
        <div class="hero min-h-screen">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-3xl text-center font-bold">Your Information</h2>
                    <form className='w-full grid grid-cols-2 gap-16' onSubmit={handleSubmit(onSubmit)}>
                        <div className='px-16'>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text"
                                    readOnly
                                    value={user?.displayName || ''}
                                    className="input input-bordered w-full"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                        }
                                    })}
                                />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    readOnly value={user?.email || ''}
                                    className="input input-bordered w-full"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                        }
                                    })}
                                />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Mobile Number</span>
                                </label>
                                <input type="number"
                                    placeholder="Enter Your Mobile Number"
                                    className="input input-bordered w-full"
                                    {...register("number", {
                                        required: {
                                            value: true,
                                            message: 'Mobile Number is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.number?.type === 'required' && <span className='text-red-500'>{errors.number.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Your Address</span>
                                </label>
                                <input type="text"
                                    placeholder="Enter Your address"
                                    className="input input-bordered w-full"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: 'Address is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.address?.type === 'required' && <span className='text-red-500'>{errors.address.message}</span>}
                                </label>
                            </div>
                            <input className='btn btn-natural block m-auto w-full font-bold' type="submit" value='Place Order' />
                        </div>
                        <div class="text-center px-16 lg:text-left">
                            <div className="card w-full bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={product.img} alt="Shoes" className="rounded-xl mx-h-4" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product.name}</h2>
                                    <p>{product.description}</p>
                                    <p><span className='font-bold'>Min Order:</span> {product.minOrder}</p>
                                    <p><span className='font-bold'>Available Quantity:</span> {product.quantity}</p>
                                    <p><span className='font-bold'>Price:</span> {product.price}</p>
                                    <div className="form-control w-full ">
                                        <label className="label">
                                            <span className="label-text">Your Order Quantity</span>
                                        </label>
                                        <input type="number"
                                            defaultValue={product?.minOrder}
                                            placeholder="Enter Your Order Quantity"
                                            className="input input-bordered w-full"
                                            {...register("orderQuantity", {
                                                required: {
                                                    value: true,
                                                    message: 'Quantity Number is Required'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.orderQuantity?.type === 'required' && <span className='text-red-500'>{errors.orderQuantity.message}</span>}
                                        </label>
                                    </div>
                                    {/* <div className="card-actions justify-end">
                                <button onClick={() => setOrder(tool._id)} className="btn btn-sm btn-natural font-bold">Order Now</button>
                            </div> */}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;