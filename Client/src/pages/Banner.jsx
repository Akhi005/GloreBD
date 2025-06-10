import { Button } from "@material-tailwind/react";

export default function Banner(){
    return(
        <div className=" mx-20 mb-16 bg-[#ffebf0] rounded-3xl flex items-center justify-center">
        <div className="flex-1 text-center ">
            <h1 className="text-7xl pb-5 font-bold">নতুন <span className="block pt-5 text-[#c43882]">কালেকশন</span></h1>
            <div className="text-lg">
                <p>✨ GloreBD - এর সাথে ফ্যাশনে পা রাখুন নতুন দিগন্তে! ❤️</p>
<p>আমাদের এক্সক্লুসিভ নতুন কালেকশন এখন উপলব্ধ!</p>
<p>আপনার প্রিয় ফ্যাশন স্টাইল খুঁজে নিন আর নিজেকে সাজান অনন্যভাবে। ❤️</p>
<Button className="text-white bg-[#c43882] text-lg mt-8 px-6 py-3 rounded-xl">অর্ডার করুন</Button>
</div>
        </div>
        <img className="px-5 pt-5 " src="https://i.ibb.co/5xJR5krg/hero-o4bu130g.webp" alt="" width="480px" height="50px" />
        </div>
    )
}