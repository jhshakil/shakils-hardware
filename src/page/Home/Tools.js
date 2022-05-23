import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import PlaceOrder from '../Order/PlaceOrder';
import Loading from '../Shared/Loading';

const Tools = () => {
    const navigate = useNavigate();
    const { data: tools, isLoading } = useQuery('tools', () => fetch('http://localhost:5000/product').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    const setOrder = id => {
        navigate(`/placeOrder/${id}`)
    }
    return (
        <div className='my-8'>
            <h2 className='text-center font-bold text-3xl'>Our Production</h2>
            <div className='grid grid-cols-3 gap-12 m-8'>
                {
                    tools.map(tool => <div key={tool._id} className="card w-full bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={tool.img} alt="Shoes" className="rounded-xl mx-h-4" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{tool.name}</h2>
                            <p>{tool.description}</p>
                            <p><span className='font-bold'>Min Order:</span> {tool.minOrder}</p>
                            <p><span className='font-bold'>Quantity:</span> {tool.quantity}</p>
                            <p><span className='font-bold'>Price:</span> {tool.price}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => setOrder(tool._id)} className="btn btn-sm btn-natural font-bold">Order Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Tools;