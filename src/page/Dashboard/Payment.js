import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1kzcGxt14VauoBWJzfIgWE0SX9onWglP24bENxR3RMOeWWMUts4mYKhubnlXETeJHitgCnOjvgGufRVLL7xuIT006BSvK1aV');

const Payment = () => {
    const { id } = useParams()
    const url = `https://floating-harbor-58011.herokuapp.com/order/${id}`;
    const { data: paymentData, isLoading } = useQuery(['payment', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='flex justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">{paymentData.name}</h2>
                    <p>{paymentData.email}</p>
                    <p>Product: {paymentData.product}</p>
                    <p>Address: {paymentData.address}</p>
                    <p>Number: {paymentData.number}</p>
                    <p>Quantity: {paymentData.orderQuantity}</p>
                    <p>Total Cost: {paymentData.totalPrice}</p>
                </div>
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm paymentData={paymentData} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;