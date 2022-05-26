import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Controller, useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const PlaceOrder = () => {
    const { id } = useParams()
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit, control } = useForm();
    const [totalCost, setTotalCost] = useState('');
    const url = `https://murmuring-sierra-99409.herokuapp.com/product/${id}`
    const { data: product, isLoading } = useQuery('productInfo', () => fetch(url).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    const changing = value => {
        if (value && (parseInt(value) >= 0)) {
            const totalCost = parseInt(value) * parseInt(product.price);
            setTotalCost(totalCost);
        } else {
            const totalCost = 0;
            setTotalCost(totalCost);
        }
    }

    const onSubmit = data => {
        const orderQuantity = parseInt(data.orderQuantity);
        const minOrder = parseInt(product.minOrder);
        const quantity = parseInt(product.quantity);
        console.log(product.quantity)
        const totalPrice = parseInt(product.price) * orderQuantity
        if (orderQuantity < minOrder) {
            return toast.error(`Please order minimum ${minOrder}`)
        } else if (orderQuantity > quantity) {
            return toast.error('DO not order maximum of quantity')
        }

        const content = {
            name: data.name,
            product: product.name,
            email: data.email,
            number: data.number,
            address: data.address,
            totalPrice: totalPrice,
            orderQuantity: data.orderQuantity,
            img: product.img
        }
        const url = 'https://murmuring-sierra-99409.herokuapp.com/order'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(content)
        }).then(res => res.json())
            .then(result => {
                toast.success('Order Place Successfully')
                navigate('/home')
            })
        const available = quantity - orderQuantity;
        const update = { available };
        fetch(`https://murmuring-sierra-99409.herokuapp.com/product/${product._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        }).then(res => res.json())
            .then(result => console.log(result))
    };

    return (
        <div className="hero min-h-screen">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-3xl text-center font-bold">Your Information</h2>
                    <form className='w-full grid grid-cols-1 lg:grid-cols-2 gap-16' onSubmit={handleSubmit(onSubmit)}>
                        <div className='px-16'>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text"
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
                        <div className="text-center px-2 lg:px-16 lg:text-left">
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
                                    <p><span className='font-bold'>Total Price:</span> {totalCost ? totalCost : parseInt(product.price) * parseInt(product.minOrder)}</p>
                                    <div className="form-control w-full ">
                                        <label className="label">
                                            <span className="label-text">Your Order Quantity</span>
                                        </label>
                                        <Controller
                                            control={control}
                                            name="orderQuantity"
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message: 'Quantity Number is Required'
                                                }
                                            }}
                                            render={({ field }) => (
                                                <input type="number"
                                                    defaultValue={product?.minOrder}
                                                    placeholder="Enter Your Order Quantity"
                                                    className="input input-bordered w-full"
                                                    {...field} ref={e => {
                                                        changing(field.value);
                                                        field.ref(e);
                                                    }} />
                                            )}
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