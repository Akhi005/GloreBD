import { Button } from "@material-tailwind/react";
import OrderButton from "../utils/OrderButton"

export default function Banner() {
  return (
    <div className="mx-4 lg:mx-20 mb-10 lg:mb-16 bg-[#ffebf0] rounded-3xl flex flex-col lg:flex-row items-center justify-between px-5 pt-5 gap-8">
      
      <div className="flex-1 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold ">
          নতুন <span className="block pt-2 text-[#c43882]">কালেকশন</span>
        </h1>

        <div className="mt-4 text-sm sm:text-base lg:text-lg space-y-1">
          <p>✨ <span className="text-[#c43882] font-semibold">GloreBD</span> - এর সাথে ফ্যাশনে পা রাখুন নতুন দিগন্তে! ❤️</p>
          <p className="hidden sm:block">আমাদের এক্সক্লুসিভ নতুন কালেকশন এখন উপলব্ধ!</p>
          <p className="hidden sm:block">আপনার প্রিয় ফ্যাশন স্টাইল খুঁজে নিন আর নিজেকে সাজান অনন্যভাবে। ❤️</p>
        </div>

        <OrderButton/>
      </div>
      <div className="w-full lg:w-[480px] flex justify-center">
        <img
          src="https://i.ibb.co/5xJR5krg/hero-o4bu130g.webp"
          alt="Banner Model"
          className="w-48 sm:w-60 md:w-72 lg:w-full object-contain"
        />
      </div>
    </div>
  );
}
