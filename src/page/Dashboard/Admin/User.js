import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading';

const User = () => {
    const { data: users, isLoading, refetch } = useQuery('myOrder', () =>
        fetch(`http://localhost:5000/user`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const handleDelete = email => {
        const url = `http://localhost:5000/user/admin/${email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Successfully Make An Admin')
                refetch()
            })
    }
    return (
        <div>
            <h1 className='text-3xl text-center font-bold my-8'>All Order</h1>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>email</th>
                            <th>Role</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.email}</td>
                                    <td>{user.role || 'user'}</td>
                                    <td>
                                        {
                                            user.role !== 'admin' ? <div class="dropdown dropdown-left dropdown-end">
                                                <label tabindex="0" class="btn btn-sm m-1">Make Admin</label>
                                                <div tabindex="0" class="dropdown-content card w-80 p-2 shadow bg-primary text-primary-content">
                                                    <div class="card-body">
                                                        <h3 class="card-title">Do You Want To Delete</h3>
                                                        <button className='btn w-1/2' onClick={() => handleDelete(user.email)}>Yes</button>
                                                    </div>
                                                </div>
                                            </div> : <button className='btn btn-sm m-1 bg-primary text-white'>Already Admin</button>
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

export default User;