import React from 'react';
import Counter from '/src/utils/Counter.jsx';
import FormatBDtaka from '/src/utils/FormatBDtaka';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useCart } from '../context/CartItemContext';

export default function CartItemsList() {
 const { cartItems, updateQuantity, removeItem,calculateItemTotal}=useCart();
 
  return (
    <>
      {cartItems && cartItems.length > 0 ? (
        <div className="mt-4 overflow-y-auto" style={{ Height: 'calc(100% - 190px)' }}>
          {cartItems.map((item) => (
            <div key={item._id} className='flex items-center border-b border-pink-200 pb-2 mb-2'>
      {item.images?.[0]?.secure_url ? (
        <img
          src={item.images[0].secure_url}
          alt={item.name}
          className="w-20 h-20 object-cover rounded"
        />
      ) : (
        <div className="w-20 h-20 bg-gray-200 flex items-center justify-center rounded text-sm text-gray-500">
          No Image
        </div>
      )}
      <div className="flex-1"> 
        <h2 className="font-semibold text-lg text-pink-600 px-3">{item.name}</h2>
        <div className='flex w-full justify-between px-3 items-center'>
          <p className="text-gray-700 text-md font-bold">Price: ৳{FormatBDtaka(item.price)}</p>
          <p>X</p>
        <div className="flex items-center mt-1">
          <Counter
            value={item.quantity || 1}
            onChange={(newQuantity) => updateQuantity(item._id, newQuantity)}
          />
        </div>
        </div>
        <div className='flex w-full mt-3 justify-between px-3'><p className='text-xl text-pink-700 font-semibold'>= ৳{calculateItemTotal(item)}</p>
          <button
            onClick={() => removeItem(item._id)}
            className="ml-2 text-pink-500 hover:text-pink-700 focus:outline-none cursor-pointer">
            <RiDeleteBin6Fill size={24}/>
          </button>
        </div>
      </div>
    </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-4 text-gray-500">Your cart is empty.</p>
      )}
    </>
  );
}