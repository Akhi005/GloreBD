import { useState } from "react";
import { useCart } from "/src/context/CartItemContext";
import RightSidebar from '/src/pages/RightSideBar';

export default function OrderButton({ product, quantity }) {
  
  const { addToCart } = useCart();
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  const handleAddToCart = () => {
     addToCart(product,quantity)
    setIsRightSidebarOpen(true);
  };
  
  const closeRightSidebar = () => {
    setIsRightSidebarOpen(false);
  };
  return (
    <>
      <button onClick={handleAddToCart} className="bg-[#c43882] cursor-pointer hover:bg-[#a02d6b] text-white py-3 px-6 rounded-lg shadow-md transition-colors duration-300"> অর্ডার করুন
      </button>
      <RightSidebar isOpen={isRightSidebarOpen} onClose={closeRightSidebar} />
      </>
   )
}