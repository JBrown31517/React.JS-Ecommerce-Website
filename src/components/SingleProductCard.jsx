import React from 'react';
import { useCart } from 'react-use-cart';

const SingleProductCard = (props) => {
  const product = props.product;
  const { addItem } = useCart();
  return (
    <div>
      <div className="relative z-0 block border border-gray-100">
        <button
          type="button"
          name="wishlist"
          className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </button>

        <img
          loading="lazy"
          alt="product details"
          className="object-contain w-full h-56"
          src={product.image}
        />

        <div className="p-6">
          <p className="text-sm font-medium text-gray-600">{product.title}</p>

          <h5 className="mt-1 text-lg font-bold">{product.price}</h5>

          <button
            onClick={() => addItem(product)}
            name="add"
            type="button"
            className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
          >
            <span className="text-sm font-medium">Add to Cart</span>

            <svg
              className="w-5 h-5 ml-1.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
