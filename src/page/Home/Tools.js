import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const Tools = () => {
    const { data: tools, isLoading } = useQuery('tools', () => fetch('fakeTools.json').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-16'>
            <h2 className='text-center font-bold text-3xl'>Our Product: {tools.length}</h2>
            <div className='grid grid-cols-3 gap-12 m-8'>
                {
                    tools.map(tool => <div class="card w-full bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={tool.img} alt="Shoes" class="rounded-xl mx-h-4" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">{tool.name}</h2>
                            <p>{tool.description}</p>
                            <p><span className='font-bold'>Min Order:</span> {tool.minOrder}</p>
                            <p><span className='font-bold'>Quantity:</span> {tool.quantity}</p>
                            <p><span className='font-bold'>Price:</span> {tool.balance}</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-sm btn-natural font-bold">Order Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Tools;