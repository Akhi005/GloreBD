import { useState, useEffect } from 'react';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Badge } from "@material-tailwind/react";
import LeftSidebar from './LeftSideBar';
import RightSidebar from './RightSideBar';
import { useSearch } from '../context/SearchContext';
import { Link } from 'react-router';
import { useCart } from '../context/CartItemContext';

export default function NavBar({color}) {
  const [scrolled, setScrolled] = useState(false);
  const { setShowSearch } = useSearch();
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const { cartItems } = useCart();
  const [cartItemLen, setCartItemLen] = useState(0);
  
  useEffect(() => {
    const totalItems = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
    setCartItemLen(totalItems);
  }, [cartItems]);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLeftSidebar = () => setIsLeftSidebarOpen(!isLeftSidebarOpen);
  const toggleRightSidebar = () => setIsRightSidebarOpen(!isRightSidebarOpen);

  return (
    <>
       <nav className={`flex font-bold items-center justify-between px-4 lg:px-20 py-3 sticky top-0 z-50 transition-colors duration-300 ${
         scrolled ? 'bg-white' : color ? `bg-[${color}]` : 'bg-[#ffd5df]'}`}>
        <div className="flex items-center gap-4 sm:gap-6">
          <button onClick={toggleLeftSidebar} className="flex cursor-pointer items-center gap-1 text-sm sm:text-base">
            <HiOutlineMenuAlt1 size={22} />
            <span className="hidden sm:inline">Menu</span>
          </button>
          <Link to="/collections"><button onClick={() => setShowSearch(true)} className="cursor-pointer flex items-center gap-1 text-sm sm:text-base">
            <IoSearch size={22} />
            <span className="hidden sm:inline">Search</span>
          </button></Link>
        </div>
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src="https://i.ibb.co/Xk8Zt70V/logo-Co-RENOR5.webp"
              alt="Logo"
              className="h-10 sm:h-12 object-contain"
            />
          </Link>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden sm:flex items-center gap-1 text-[#c43882] text-sm sm:text-base">
            <RiShoppingBag2Fill size={22} />
            <span>Shop</span>
          </div>
          <button onClick={toggleRightSidebar} className="relative cursor-pointer">
            <MdOutlineShoppingBag size={26} />
            <Badge
              content={cartItemLen || 0}
              className="absolute -top-2 -right-2 bg-[#c43882] text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold"
            />
          </button>
        </div>
      </nav>
      <LeftSidebar isOpen={isLeftSidebarOpen} onClose={toggleLeftSidebar} />
      <RightSidebar isOpen={isRightSidebarOpen} onClose={toggleRightSidebar} />
    </>
  );
}
