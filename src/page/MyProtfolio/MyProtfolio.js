import React from 'react';

const MyProtfolio = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div className="avatar w-1/4">
                    <div className="w-42 rounded-xl">
                        <img src="my-protfolio.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    </div>
                </div>

                <div className='p-8 w-3/4'>
                    <h1 className="text-3xl lg:text-5xl font-bold">Md Jahid Hasan</h1>
                    <p className="py-2">Email: jhshakil11275@gmail.com</p>
                    <p className="py-2">Education: Running BSC in Physics, Govt Titumir College</p>
                    <p className="py-2">Skill: React.js, Node.js, Javascript, Express.js, HTML5, CSS3</p>
                    <h1 className="text-3xl lg:text-3xl font-bold">My Project</h1>
                    <p className="py-2">Car Dealer : <a href="https://car-dealer-af8e9.web.app/">Live Site</a></p>
                    <p className="py-2">To Do List : <a href="https://to-do-list-fb6db.web.app">Live Site</a></p>
                    <p className="py-2">Pro Developer : <a href="https://pro-developer-firebase.web.app/">Live Site</a></p>

                </div>
            </div>
        </div>
    );
};

export default MyProtfolio;