import React from 'react';
import Footer from '../Footer/Footer';

const MyProtfolio = () => {
    return (
        // <div className="hero">
        //     <div className="hero-content flex-col lg:flex-row">
        //         <div className="avatar w-1/4">
        //             <div className="w-42 rounded-xl">
        //                 <img src="my-protfolio.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='' />
        //             </div>
        //         </div>

        //         <div className='p-8 w-3/4'>
        //             <h1 className="text-3xl lg:text-5xl font-bold">Md Jahid Hasan</h1>
        //             <p className="py-2">Email: jhshakil11275@gmail.com</p>
        //             <p className="py-2">Education: Running BSC in Physics, Govt Titumir College</p>
        //             <p className="py-2">Skill: React.js, Node.js, Javascript, Express.js, HTML5, CSS3</p>
        //             <h1 className="text-3xl lg:text-3xl font-bold">My Project</h1>
        //             <p className="py-2">Car Dealer : <a href="https://car-dealer-af8e9.web.app/">Live Site</a></p>
        //             <p className="py-2">To Do List : <a href="https://to-do-list-fb6db.web.app">Live Site</a></p>
        //             <p className="py-2">Pro Developer : <a href="https://pro-developer-firebase.web.app/">Live Site</a></p>

        //         </div>
        //     </div>
        // </div>
        <div>
            <div class="hero px-1 lg:px-32">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src='profile.png' class="max-w-sm rounded-full" alt='Profile' />
                    <div className='pr-16'>
                        <h1 class="text-5xl font-bold">Jahid Hasan Shakil</h1>
                        <p class="py-6 text-xl">MERN Stack Developer</p>
                        <a href="https://drive.google.com/file/d/11NiY5wHE7nxq0H_9I3xHHIwL-A7je3PW/view?usp=sharing" target='_blank' rel='noopener noreferrer'><button className='btn'>See Resume</button></a>
                    </div>
                </div>
            </div>
            <div className='my-16 p-8'>
                <h2 className='text-3xl font-bold text-center'>My Skill</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 my-4'>
                    <div class="card w-full bg-base-100 shadow-xl">
                        <div class="card-body block m-auto">
                            <h2 class="card-title">Frontend</h2>
                            <div className='flex items-center'>
                                <p>Javascript</p>
                                <progress class="progress w-56 ml-4" value="90" max="100"></progress>
                            </div>
                            <div className='flex items-center'>
                                <p>React</p>
                                <progress class="progress w-56 ml-4" value="95" max="100"></progress>
                            </div>
                            <div className='flex items-center'>
                                <p>Bootstrap</p>
                                <progress class="progress w-56 ml-4" value="80" max="100"></progress>
                            </div>
                            <div className='flex items-center'>
                                <p>Tailwind</p>
                                <progress class="progress w-56 ml-4" value="90" max="100"></progress>
                            </div>
                            <div className='flex items-center'>
                                <p>HTML5</p>
                                <progress class="progress w-56 ml-4" value="100" max="100"></progress>
                            </div>
                            <div className='flex items-center'>
                                <p>CSS3</p>
                                <progress class="progress w-56 ml-4" value="98" max="100"></progress>
                            </div>
                        </div>
                    </div>
                    <div class="card w-full bg-base-100 shadow-xl">
                        <div class="card-body block m-auto">
                            <h2 class="card-title">Backend</h2>
                            <div className='flex items-center'>
                                <p>Node.js</p>
                                <progress class="progress w-56 ml-4" value="80" max="100"></progress>
                            </div>
                            <div className='flex items-center'>
                                <p>Express.js</p>
                                <progress class="progress w-56 ml-4" value="90" max="100"></progress>
                            </div>
                            <div className='flex items-center'>
                                <p>MongoDB</p>
                                <progress class="progress w-56 ml-4" value="60" max="100"></progress>
                            </div>
                        </div>
                    </div>
                    <div class="card w-full bg-base-100 shadow-xl">
                        <div class="card-body block m-auto">
                            <h2 class="card-title">Tools</h2>
                            <div className='flex items-center'>
                                <p>Firebase</p>
                                <progress class="progress w-56 ml-4" value="700" max="100"></progress>
                            </div>
                            <div className='flex items-center'>
                                <p>Figma</p>
                                <progress class="progress w-56 ml-4" value="60" max="100"></progress>
                            </div>
                            <div className='flex items-center'>
                                <p>GitHub</p>
                                <progress class="progress w-56 ml-4" value="80" max="100"></progress>
                            </div>
                            <div className='flex items-center'>
                                <p>Heroku</p>
                                <progress class="progress w-56 ml-4" value="40" max="100"></progress>
                            </div>
                            <div className='flex items-center'>
                                <p>React Query</p>
                                <progress class="progress w-56 ml-4" value="80" max="100"></progress>
                            </div>
                            <div className='flex items-center'>
                                <p>React Form</p>
                                <progress class="progress w-56 ml-4" value="60" max="100"></progress>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='project' className='my-8 p-8'>
                <h1 className='text-3xl text-center font-bold'>My Project</h1>
                <div className='my-12 grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    <div class="card w-full bg-base-100 shadow-xl">
                        <figure><img src="project1.jpg" alt="Shoes" /></figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title text-2xl">Manufacture Website</h2>
                            <p><small>This is a manufacturer website. It is a MERN Stack project. This website is controlled by Admin. Admin can add products and manage orders. Here <a href='https://github.com/jhshakil/shakils-hardware-client' target='_blank' rel='noopener noreferrer'>client site code</a> and <a href='https://github.com/jhshakil/shakils-hardware-server' target='_blank' rel='noopener noreferrer'>server site code</a></small></p>
                            <div class="card-actions">
                                <button class="btn btn-sm"><a href='https://shakils-hardware.web.app/' target='_blank' rel='noopener noreferrer'>Live Site</a></button>
                            </div>
                        </div>
                    </div>
                    <div class="card w-full bg-base-100 shadow-xl">
                        <figure><img src="project2.jpg" alt="Shoes" /></figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title text-2xl">Warehouse Management Website</h2>
                            <p><small>This is a Warehouse Management Website. It is a MERN Stack project. Add product, Add Quantity and Delete Product are the main feature in this website. Here <a href='https://github.com/jhshakil/warehouse-management-client' target='_blank' rel='noopener noreferrer'>client site code</a> and <a href='https://github.com/jhshakil/warehouse-management-server' target='_blank' rel='noopener noreferrer'>server site code</a></small></p>
                            <div class="card-actions">
                                <button class="btn btn-sm"><a href='https://car-dealer-af8e9.web.app/' target='_blank' rel='noopener noreferrer'>Live Site</a></button>
                            </div>
                        </div>
                    </div>
                    <div class="card w-full bg-base-100 shadow-xl">
                        <figure><img src="project3.jpg" alt="Shoes" /></figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title text-2xl">To-Do List Website</h2>
                            <p><small>This is a To-Do List website. It is a MERN Stack project. People can add task and delete their task. Here <a href='https://github.com/jhshakil/to-do-list-client' target='_blank' rel='noopener noreferrer'>client site code</a> and <a href='https://github.com/jhshakil/to-do-list-server' target='_blank' rel='noopener noreferrer'>server site code</a></small></p>
                            <div class="card-actions">
                                <button class="btn btn-sm"><a href='https://to-do-list-fb6db.web.app/' target='_blank' rel='noopener noreferrer'>Live Site</a></button>
                            </div>
                        </div>
                    </div>
                    <div class="card w-full bg-base-100 shadow-xl">
                        <figure><img src="project4.jpg" alt="Shoes" /></figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title text-2xl">Randomly Collect Product</h2>
                            <p><small>This is a Javascript project. This project people can add some product and choose randomly one product by clicking a button. Here <a href='https://github.com/jhshakil/lucky-one' target='_blank' rel='noopener noreferrer'>code</a></small></p>
                            <div class="card-actions">
                                <button class="btn btn-sm"><a href='https://meek-belekoy-cc7525.netlify.app/' target='_blank' rel='noopener noreferrer'>Live Site</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProtfolio;