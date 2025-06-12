import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { Link } from "react-router-dom"; 
import FormatBDtaka from '../utils/FormatBDtaka';
import CartItemsList from './CartItemList';
import { useCart } from '../context/CartItemContext';

export default function RightSidebar({ isOpen, onClose }) {   
 const {  cartItems, clearCart, subtotal}=useCart()
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={onClose}
        ></div>
      )}
      <div
        className={`p-3 fixed top-0 right-0 h-full w-[90%] max-w-xs bg-white shadow-lg z-50
          transform transition-transform duration-400 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            
        <div className="p-4 flex justify-between bg-pink-100 items-center font-bold">
          <h2 className="text-xl text-gray-500">Shopping Cart</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900 cursor-pointer">
            <IoCloseOutline size={20} />
          </button>
        </div>
        <CartItemsList/>
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
            <div className="flex justify-between font-bold text-lg mb-2">
              <span>Subtotal:</span>
            <span>৳{FormatBDtaka(subtotal) || 0}</span>
            </div>
            <div className="flex justify-between gap-2"> 
              <button
                onClick={clearCart}
                className="flex-1 cursor-pointer text-center border border-gray-400 text-gray-700 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                Clear All
              </button>
              <Link
                to="/checkout" 
                className={`flex-1 text-center py-3 rounded-md transition-colors
                  ${cartItems.length==0 
                    ? 'bg-pink-200 cursor-not-allowed text-white' 
                    : 'bg-[#c43983] hover:bg-[#a92d70] text-white'
                  }`}
              >
                Checkout →
              </Link>
            </div>
          </div>
       
      </div>
    </>
  );
}