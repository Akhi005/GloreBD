import { SocialIcon } from 'react-social-icons'
import { FaFacebook ,FaFacebookMessenger} from "react-icons/fa";
import { Link } from "react-router";

export default function Footer(){
    return(
        <div className='bg-[#000000] text-white p-8 '>
          <div className="grid grid-cols-4 ">
            <div>
               <div className="p-5 mr-12"> <img src="https://i.ibb.co/dRqcYJN/logo-Co-RENOR5-1.webp" alt="" /></div>
                <p className="text-sm">আমাদের কালেকশন আপনাকে দেবে ফ্যাশনের আধুনিকতা এবং ঐতিহ্যের একটি নিখুঁত সংমিশ্রণ।</p>
            </div>
            <div className="pl-5 font-semibold">
                <h2 className="py-3 text-xl font-semibold">Explore More</h2>
                <div className="text-[#6b7280]"><p className="hover:text-[#c43882] cursor-pointer">New Arrivals</p>
                <p className="hover:text-[#c43882] cursor-pointer">About Us</p>
                <p className="hover:text-[#c43882] cursor-pointer">Contact</p></div>
            </div>
            <div className='font-semibold'>
                    <h2 className="py-3 text-xl font-semibold">Client Experience</h2>
                        <div className="text-[#6b7280]"><p className="hover:text-[#c43882] cursor-pointer">Track Your Order</p> 
                        <p className="hover:text-[#c43882] cursor-pointer">Returns & Exchanges</p> 
                        <p className="hover:text-[#c43882] cursor-pointer">Customer Reviews</p> 
                        <p className="hover:text-[#c43882] cursor-pointer">Privacy Policy</p> 
                        <p className="hover:text-[#c43882] cursor-pointer">FAQ</p></div>  
            </div>
            <div className='font-semibold'>
                <h2 className="py-3 text-xl">GET IN TOUCH</h2>
                       <div > <p  className="text-[#6b7280]  hover:text-[#c43882] cursor-pointer">মোবাইল নং: (+88) 01855-375963</p> 
                        <p  className="text-[#6b7280] hover:text-[#c43882] cursor-pointer">ইমেইল: hello@glorebd.com</p> 
                        <div className='flex w-full justify-start items-center'>
                            <Link to="https://www.facebook.com/GLorebd/"><FaFacebook size={28} className='mr-5 hover:text-[#c43882]'/></Link>
                            <Link to="https://www.m.me/EMegaDeal"><FaFacebookMessenger size={28} className='mr-4 hover:text-[#c43882]'/></Link>
                            <SocialIcon bgColor="black" fgColor="white" url="https://twitter.com" />
                            <SocialIcon  bgColor="black" fgColor="white" url="https://instagram.com" />
                        </div>
                       </div>
            </div>
          </div>
          <p className="pb-5 pt-12 text-white w-full flex justify-center items-center ">© 2025 Powered by <Link to="https://calquick.app/">
          Cal<span className="font-bold text-lg text-orange-600">Q</span>uick</Link></p>
        </div>
    )
}