import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrder = () => {
    const [user] = useAuthState(auth)
    const { data: myOrders, isLoading, refetch } = useQuery('myOrder', () =>
        fetch(`https://floating-harbor-58011.herokuapp.com/myOrder?email=${user?.email}`, {
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
        const url = `https://floating-harbor-58011.herokuapp.com/order/${id}`;
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
                                    {/* <td><button onClick={() => console.log(order._id)}>Cancle</button></td> */}
                                    {/* <td><button>
                                        <label order={order} for="order-cancel" className="btn btn-sm modal-button">Cancel Order</label>
                                        <input type="checkbox" id="order-cancel" className="modal-toggle" />
                                        <div className="modal modal-bottom sm:modal-middle">
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg">Do You Want To Cancel This Order</h3>
                                                <div className="modal-action">

                                                    <label onClick={() => console.log(order._id)} for="order-cancel" className="btn">Yes</label>
                                                    <label onClick={() => handleDelete(order._id)} for="order-cancel" className="btn">Yes</label>
                                                    <label for="order-cancel" className="btn">No</label>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                    </td> */}
                                    <td>
                                        <div className="dropdown dropdown-left dropdown-end">
                                            <label tabindex="0" className="btn btn-sm m-1">Delete</label>
                                            <div tabindex="0" className="dropdown-content card w-80 p-2 shadow bg-primary text-primary-content">
                                                <div className="card-body">
                                                    <h3 className="card-title">Do You Want To Delete</h3>
                                                    <button className='btn w-1/2' onClick={() => handleDelete(order._id)}>Yes</button>
                                                </div>
                                            </div>
                                        </div>
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