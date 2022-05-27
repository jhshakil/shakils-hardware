import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import EditImage from './EditImage';
import EditProfile from './EditProfile';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { data: profile, isLoading } = useQuery('profile', () =>
        fetch(`https://floating-harbor-58011.herokuapp.com/profile?email=${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()))
    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <h1 className='text-3xl p-2 my-8 font-bold'>My Profile</h1>
            <div className="my-16">
                <div className="w-full flex-col">
                    <div className="avatar block m-auto w-1/4">
                        <div className="w-32 rounded-xl">
                            <img src={profile?.img} alt='' />
                        </div>
                        <div className='max-h-32'>
                            <EditImage></EditImage>
                        </div>
                    </div>
                    <div className="w-ful p-2">
                        <div className="card-body grid grid-cols-1 lg:grid-cols-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">name</span>
                                </label>
                                <input type="text" disabled value={user?.displayName || profile?.name} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" disabled value={user?.email} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" disabled value={profile?.location || ''} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Education</span>
                                </label>
                                <input type="text" disabled value={profile?.education || ''} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Linkedin Profile</span>
                                </label>
                                <input type="text" disabled value={profile?.linkedin || ''} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Number</span>
                                </label>
                                <input type="text" disabled value={profile?.number || ''} className="input input-bordered" />
                            </div>

                        </div>
                        <div className="mt-6">
                            <EditProfile></EditProfile>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;