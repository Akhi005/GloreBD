import {useState,useEffect} from 'react'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Badge } from "@material-tailwind/react";
import Sidebar from './SideBar';

export default function NavBar(){
    const [scrolled, setScrolled] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
      if (window.scrollY > 50) {
         setScrolled(true);
      } else {
         setScrolled(false); 
      }};
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
    }}, []); 
    
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return(
        <>
        <nav className={`flex sticky z-50 relative top-0 ${scrolled?'bg-white':"bg-[#ffebf0]"} justify-between items-center px-20 py-4 text-md font-semibold`}>
        <div className="flex gap-7">
           <button className="flex gap-1 items-center cursor-pointer" onClick={toggleSidebar}><HiOutlineMenuAlt1 size={24}/><p>Menu</p></button>
           <div className="flex gap-1 items-center"><IoSearch size={24}/><p>Search</p></div>
        </div>
        <div>
          <img src="https://i.ibb.co/Xk8Zt70V/logo-Co-RENOR5.webp" alt="" width="160px" height="130px"/>
        </div>
        <div  className="flex gap-5">
            <div  className="flex gap-1 items-center"><RiShoppingBag2Fill size={24} /><p>Shop</p></div>
            <div className="relative"><MdOutlineShoppingBag size={28}/><Badge className="absolute -top-3 -right-2 bg-[#c43882] text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold" placement="bottom-end" content="0" color="bg-red-500" overlap="circular"></Badge></div>
        </div>
       </nav>
       <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        </>
    )
}