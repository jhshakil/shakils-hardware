import React from 'react';
import { appendErrors, useForm } from 'react-hook-form';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='my-16 flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body items-center">
                    <h2 class="card-title text-3xl font-bold">Log In</h2>
                    <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full ">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="Type here"
                                class="input input-bordered w-full"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        massage: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.pattern.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full ">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password"
                                placeholder="Type here"
                                class="input input-bordered w-full"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span className='text-red-500'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-500'>{errors.password.message}</span>}
                            </label>
                        </div>
                        <input className='btn btn-natural block m-auto w-full font-bold' type="submit" value='Log In' />
                    </form>
                    <div class="divider">OR</div>
                    <div class="card-actions w-full">
                        <button class="btn btn-natural font-bold w-full">Google Log In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;