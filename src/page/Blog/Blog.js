import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 p-8 gap-8'>
            <div>
                <h1 className='text-3xl mb-4'>How I can  improve the performance of a React Application</h1>
                <p>In React Application there are lots of resources  to improve application performance. There are so many options like react form hook instants of any form , react query instant of data loading , react firebase hooks for easy authorization and authentication etc.</p>
            </div>
            <div>
                <h1 className='text-3xl mb-4'>What are the different ways to manage a state in a React application</h1>
                <p>There are so many ways to manage a state in a react application. One of the best ways to manage state in a react application is to use react query hooks. In react query hooks makes state management very easy.</p>
            </div>
            <div>
                <h1 className='text-3xl mb-4'>How does prototypical inheritance work</h1>
                <p>In JavaScript, an object can inherit properties of another object. The object from which the properties are inherited is named prototype. It is a feature in javascript. It is a method by which an object can inherit the properties and methods of another object.</p>
            </div>
            <div>
                <h1 className='text-3xl mb-4'>Why you do not set the state directly in React</h1>
                <p>When i set state that means next i update this so that i do not set the state directly in react. If it is set products = [...] I do not modify this state. It looks like a fixed value. If i want update the state i set  const [products, setProducts] = useState([]).</p>
            </div>
            <div>
                <h1 className='text-3xl mb-4'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name</h1>
                <p>In an array of products if i want to implement a search to find products by name,  i use query parameter and i set query parameter as name.
                </p>
            </div>
        </div>
    );
};

export default Blog;