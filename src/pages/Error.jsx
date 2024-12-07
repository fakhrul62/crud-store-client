import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <main className="h-screen w-full flex flex-col justify-center items-center bg-mongo">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div className="bg-fireb px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <button className="mt-5">
          <Link
            to="/"
            className="relative inline-block text-sm font-medium text-white group active:text-wgite focus:outline-none focus:ring"
          >
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5   group-hover:translate-y-0 group-hover:translate-x-0"></span>
            <span className="relative block px-8 py-3   border border-current">
             <span className=' '>Go Home</span>
            </span>
          </Link>
        </button>
      </main>
    );
};

export default Error;