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
        fetch(`http://localhost:5000/profile?email=${user?.email}`).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-3xl my-8 font-bold'>My Profile</h1>
            <div class="my-16">
                <div class="w-full flex-col">
                    <div class="avatar block m-auto w-1/4">
                        <div class="w-32 rounded-xl">
                            <img src={profile.img} alt='' />
                        </div>
                        <div className='max-h-32'>
                            <EditImage></EditImage>
                        </div>
                    </div>
                    <div class="w-ful">
                        <div class="card-body grid grid-cols-3">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">name</span>
                                </label>
                                <input type="text" disabled value={user.displayName || profile?.name} class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" disabled value={user?.email} class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Location</span>
                                </label>
                                <input type="text" disabled value={profile?.location || ''} class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Education</span>
                                </label>
                                <input type="text" disabled value={profile?.education || ''} class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Linkedin Profile</span>
                                </label>
                                <input type="text" disabled value={profile?.linkedin || ''} class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Number</span>
                                </label>
                                <input type="text" disabled value={profile?.number || ''} class="input input-bordered" />
                            </div>

                        </div>
                        <div class="mt-6">
                            <EditProfile></EditProfile>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;