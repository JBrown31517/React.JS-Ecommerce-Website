import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'heroicons-react';
import { useSelector, useDispatch } from 'react-redux';
import { openSlice } from '../reducers/openSlice';
import { useCart } from 'react-use-cart';

export default function Open() {
  const isOpen = useSelector((state) => state.open.value);
  const dispatch = useDispatch();
  const { items, removeItem, isEmpty, updateItemQuantity, cartTotal } =
    useCart();

  return (
    <Transition.Root show={isOpen} as={Fragment} className="z-100">
      <Dialog
        as="div"
        className="fixed z-100 inset-0 overflow-hidden"
        onClose={() => dispatch(openSlice.actions.closeCart())}
      >
        <div className="absolute z-100 inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        {' '}
                        Shopping cart{' '}
                      </Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={() =>
                            dispatch(openSlice.actions.closeCart())
                          }
                        >
                          <span className="sr-only">Close panel</span>
                          <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul className="-my-6 divide-y divide-gray-200">
                          {!isEmpty ? (
                            items.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <p> {product.title} </p>
                                      </h3>
                                      <p className="ml-4">{product.price}</p>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <button
                                      onClick={() =>
                                        updateItemQuantity(
                                          product.id,
                                          product.quantity - 1
                                        )
                                      }
                                    >
                                      {' '}
                                      -{' '}
                                    </button>
                                    <p className="text-gray-500">
                                      {' '}
                                      {product.quantity}{' '}
                                    </p>
                                    <button
                                      onClick={() =>
                                        updateItemQuantity(
                                          product.id,
                                          product.quantity + 1
                                        )
                                      }
                                    >
                                      {' '}
                                      +{' '}
                                    </button>

                                    <div className="flex">
                                      <button
                                        onClick={() => removeItem(product.id)}
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))
                          ) : (
                            <p>Your card is empty</p>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Total</p>
                      <p> {Number(cartTotal).toFixed(2)} </p>
                    </div>

                    <div className="mt-6">
                      <a
                        href="/"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        Checkout
                      </a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or{' '}
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                          onClick={() =>
                            dispatch(openSlice.actions.closeCart())
                          }
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
