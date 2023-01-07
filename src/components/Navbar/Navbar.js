import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-green-500 py-0">
            <div className="navbar justify-between py-0">
                <NavLink to='/' className="font-semibold text-xl">Manufacturer</NavLink>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/' className='text-2xl font-bold'>Home</NavLink></li>
                        <li><NavLink>Item 3</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/' className='text-md font-bold mr-2'>Home</NavLink></li>
                    <li><NavLink>Item 3</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;