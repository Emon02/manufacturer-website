import React from 'react';
import { Link } from 'react-router-dom';

const Tools = () => {
    return (
        <section>
            <div className="container px-5 py-10 lg:py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-8 lg:mb-16">
                    <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl mb-4 lg:mb-8">Our Tools</h2>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261" />
                        </a>
                        <div className="mt-4 text-center">
                            <h2 className="text-gray-900 text-xl font-medium">Shooting Stars</h2>
                            <p className="mt-1 text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ipsam debitis omnis. Accusamus nemo, iste possimus fugiat dicta eveniet aut!</p>
                            <p className="mt-1 text-base font-medium">Price: $21.15</p>
                            <p className="mt-1 text-base font-medium">Available Quantity</p>
                            <p className="mt-1 text-base font-medium">Minimum Order Quantity</p>
                        </div>
                        <button className='btn btn-primary w-full text-white my-5'>Buy now</button>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262" />
                        </a>
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                            <p className="mt-1">$12.00</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263" />
                        </a>
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                            <p className="mt-1">$18.40</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;