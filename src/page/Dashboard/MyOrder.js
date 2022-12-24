import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrder = () => {
    const [user] = useAuthState(auth)
    const { data: myOrders, isLoading, refetch } = useQuery('myOrder', () =>
        fetch(`https://shakils-hardware-server.vercel.app/myOrder?email=${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDelete = id => {
        console.log(id)
        const url = `https://shakils-hardware-server.vercel.app/order/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Delete Product')
                refetch()
            })
    }
    return (
        <div>
            <h1 className='text-3xl text-center font-bold my-8'>My Order</h1>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Payment</th>
                            <th>Remove</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((order, index) =>
                                <tr key={order._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={order.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{order.name}</div>
                                                <div className="text-sm opacity-50">{order.address}</div>
                                                <div className="text-sm opacity-50">{order.number}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{order.product}</td>
                                    <td>{order.orderQuantity}</td>
                                    <td>{order.totalPrice}</td>
                                    <td>Payment</td>
                                    <td>
                                        {
                                            !order.paid && <div className="dropdown dropdown-left dropdown-end">
                                                <label tabindex="0" className="btn btn-sm m-1">Delete</label>
                                                <div tabindex="0" className="dropdown-content card w-80 p-2 shadow bg-primary text-primary-content">
                                                    <div className="card-body">
                                                        <h3 className="card-title">Do You Want To Delete</h3>
                                                        <button className='btn w-1/2' onClick={() => handleDelete(order._id)}>Yes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </td>
                                    <td>
                                        {
                                            order.paid && <span className='btn btn-sm btn-primary text-white'>Paid</span>
                                        }
                                        {
                                            !order.paid && <Link to={`/dashboard/payment/${order._id}`} className='btn btn-sm'>Pay Now</Link>
                                        }
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;