import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const EditOrder = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { data: product, isLoading, refetch } = useQuery('profile', () =>
        fetch(`https://floating-harbor-58011.herokuapp.com/product/${id}`).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const onSubmit = async data => {
        const name = data.name;
        const description = data.description;
        const minOrder = data.minOrder;
        const quantity = data.quantity;
        const price = data.price;
        const productData = { name, description, minOrder, quantity, price }
        const url = `https://floating-harbor-58011.herokuapp.com/editProduct/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }, body: JSON.stringify(productData)
        }).then(res => res.json()).then(result => {
            console.log(result);
            toast.success('Update successfully');
            navigate('/dashboard')
            return refetch()
        })
    }
    return (
        <div className='my-4 flex justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center">
                    <h2 className="card-title text-3xl font-bold">Add a review</h2>
                    <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text"
                                defaultValue={product.name}
                                placeholder="Enter Your Product Name"
                                className="input input-bordered w-full"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Product is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className='text-red-500'>{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Product Description</span>
                            </label>
                            <input type="text"
                                value={product.description}
                                placeholder="Enter Your Description"
                                className="input input-bordered w-full"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Description is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.description?.type === 'required' && <span className='text-red-500'>{errors.description.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Min Order</span>
                            </label>
                            <input type="number"
                                defaultValue={product.minOrder}
                                placeholder="Enter Your Min Order"
                                className="input input-bordered w-full"
                                {...register("minOrder", {
                                    required: {
                                        value: true,
                                        message: 'Min Order is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.minOrder?.type === 'required' && <span className='text-red-500'>{errors.minOrder.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number"
                                defaultValue={product.quantity}
                                placeholder="Enter Your Quantity"
                                className="input input-bordered w-full"
                                {...register("quantity", {
                                    required: {
                                        value: true,
                                        message: 'quantity is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.quantity?.type === 'required' && <span className='text-red-500'>{errors.quantity.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number"
                                defaultValue={product.price}
                                placeholder="Enter Your Price"
                                className="input input-bordered w-full"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'price is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.price?.type === 'required' && <span className='text-red-500'>{errors.price.message}</span>}
                            </label>
                        </div>
                        {/* <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="file"
                                placeholder="Enter Your Image"
                                className="input input-bordered w-full"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Image is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.image?.type === 'required' && <span className='text-red-500'>{errors.image.message}</span>}
                            </label>
                        </div> */}
                        <input className='btn btn-natural block m-auto w-full font-bold'
                            type="submit" value='Add Review' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditOrder;