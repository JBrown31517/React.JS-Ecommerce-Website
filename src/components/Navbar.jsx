import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openSlice } from '../reducers/openSlice';
import { useCart } from 'react-use-cart';

const Navbar = () => {
  const [menuState] = useState(false);
  const dispatch = useDispatch();
  const { totalUniqueItems } = useCart();

  const navigation = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/' },
    { title: 'Contact Us', path: '/' },
  ];

  return (
    <nav className="bg-white border-b">
      <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto">
        <div className="flex-none lg:flex-initial">
          <a href="/">
            <img
              src="https://st.depositphotos.com/3242865/4421/v/950/depositphotos_44217119-stock-illustration-ecological-business-logo.jpg"
              width={120}
              height={50}
              alt="Lorem logo"
            />
          </a>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <div
            className={`bg-white absolute z-0 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${
              menuState ? '' : 'hidden'
            }`}
          >
            <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
              {navigation.map((item, idx) => (
                <li key={idx} className="text-gray-600 hover:text-gray-900">
                  <a href={item.path}>{item.title}</a>
                </li>
              ))}
              <li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
                <button
                  className="relative flex"
                  onClick={() => dispatch(openSlice.actions.openCart())}
                >
                  <svg
                    className="flex-1 w-8 h-8 fill-current"
                    viewbox="0 0 24 24"
                  >
                    <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                  </svg>
                  <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                    {totalUniqueItems}
                  </span>
                </button>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
            <form className="flex items-center space-x-2 border rounded-md p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-none text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                type="text"
                placeholder="Search"
              />
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
