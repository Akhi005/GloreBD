import Divider from "@mui/material/Divider";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function About() {
  return (
    <>
      <NavBar color={"#ffebf0"} />

      <div className="flex flex-col lg:flex-row gap-5 h-full p-5 bg-[#ffebf0]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="p-5 w-full max-w-md"
            src="https://i.ibb.co/wFDR9QFg/about-img-4-Bbpa-MTv.webp"
            alt=""
          />
        </div>
        <div className="flex-1 mx-4 lg:mx-14 text-justify">
          <h2 className="text-2xl md:text-3xl text-center font-semibold my-3">Who We Are</h2>
          <p className="text-sm">
            GloreBD-এ আপনাকে স্বাগতম! আমরা বাংলাদেশের একটি গর্বিত ব্র্যান্ড। আমাদের যাত্রা শুরু হয়েছিল একটি স্বপ্ন নিয়ে—নারীদের জন্য এমন ফ্যাশন সরবরাহ করা যা মান, আভিজাত্য এবং আরামের প্রতিশ্রুতি দেয়। GloreBD সেই চাহিদা পূরণে প্রতিশ্রুতিবদ্ধ। আমাদের মূল লক্ষ্য হলো ফ্যাশন ও আরামকে একসাথে নিয়ে এসে এমন পোশাক তৈরি করা যা প্রতিটি নারীর ব্যক্তিত্ব ও সৌন্দর্যকে আরও উজ্জ্বল করে তোলে। আমাদের যাত্রায় অংশ নিন এবং নিজেকে সাজান অনন্যভাবে। আপনার ফ্যাশন, আপনার পরিচয় GloreBD এর সাথে।
          </p>
          <h2 className="text-lg md:text-xl text-center font-semibold my-5">✨ GloreBD-এর সাথে ফ্যাশনে পা রাখুন নতুন দিগন্তে! ✨</h2>
          <p className="text-sm">
            আমাদের এক্সক্লুসিভ নতুন কালেকশন এখন উপলব্ধ! আপনার প্রিয় ফ্যাশন স্টাইল খুঁজে নিন আর নিজেকে সাজান অনন্যভাবে। ❤️ আমাদের তিন পিস কালেকশন সাজানো হয়েছে আধুনিক ট্রেন্ড ও ঐতিহ্যের মিশেলে। প্রতিটি পোশাক এমনভাবে ডিজাইন করা হয়েছে যাতে এটি শুধু সুন্দর দেখায় না, বরং আরামদায়কও হয়। আমরা আমাদের প্রতিটি প্রোডাক্টের মান ও ফিনিশিং নিশ্চিত করতে সর্বোচ্চ যত্ন নিয়ে কাজ করি। আমাদের ফ্যাব্রিক নির্বাচন থেকে শুরু করে সেলাই পর্যন্ত প্রতিটি ধাপ পেশাদার ও মনোযোগী। প্রতিদিনের ব্যবহারের জন্য সহজলভ্য ডিজাইন থেকে উৎসবের জন্য ঝলমলে ডিজাইন পর্যন্ত আমাদের কালেকশনে রয়েছে সবকিছু। আমাদের কালেকশন আপনাকে দেবে ফ্যাশনের আধুনিকতা এবং ঐতিহ্যের একটি নিখুঁত সংমিশ্রণ।
          </p>
          <h2 className="text-lg md:text-xl text-center font-semibold my-5">✨ আপনার স্টাইল, আপনার পরিচয়! ✨</h2>
          <p className="text-sm">
            GloreBD-এ আপনি পাবেন এমন পোশাক যা আপনার আত্মবিশ্বাস বাড়াবে এবং আপনাকে নতুনভাবে তুলে ধরবে। আমরা জানি, আপনার স্টাইল শুধু আপনার সৌন্দর্যের প্রকাশ নয়, এটি আপনার আত্মবিশ্বাসেরও প্রতিফলন। আমাদের পেছনের দলটি গঠিত হয়েছে প্যাশনেট ডিজাইনার, দক্ষ ক্রাফটসম্যান এবং নিবেদিত ব্যবস্থাপকদের দ্বারা, যারা প্রতিটি পোশাককে নিখুঁতভাবে তৈরি করতে কঠোর পরিশ্রম করেন। আমাদের দল নারীদের চাহিদা বুঝতে সক্ষম এবং সেই অনুযায়ী নতুন ডিজাইন নিয়ে আসতে সর্বদা আগ্রহী। আমাদের প্রোডাক্ট ও সার্ভিস নিয়ে আরও জানতে, অথবা আমাদের সাথে আপনার মতামত ভাগ করে নিতে, আপনি যেকোনো সময় আমাদের সাথে যোগাযোগ করতে পারেন।
          </p>
        </div>
      </div>

      <div>
        <div className="flex flex-col sm:flex-row items-center sm:justify-start px-5 bg-[#ffebf0]">
          <h1 className="text-[#6b7280] text-xl sm:text-2xl font-semibold py-5 flex gap-2">
            WHY <span className="text-[#374151]">CHOOSE US</span>
          </h1>
          <div className="w-12 sm:ml-2">
            <Divider sx={{ borderWidth: "1px", borderColor: "#374151" }} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#ffebf0] pb-16 px-6 md:px-10">
          <div className="border border-gray-200 p-6 rounded-md shadow-sm">
            <h2 className="text-left my-3 font-semibold">গুণগত মান নিশ্চিতকরণ:</h2>
            <p className="text-sm">আমরা প্রতিটি পণ্য সাবধানে নির্বাচন ও যাচাই করি, যাতে এটি আমাদের কঠোর মান নিয়ন্ত্রণের মাপকাঠি পূরণ করে।</p>
          </div>
          <div className="border border-gray-200 p-6 rounded-md  shadow-sm">
            <h2 className="text-left my-3 font-semibold">সুবিধা:</h2>
            <p className="text-sm">আমাদের ব্যবহারকারী-বান্ধব ইন্টারফেস এবং ঝামেলামুক্ত অর্ডার প্রক্রিয়ার মাধ্যমে কেনাকাটা এখন আগের যেকোনো সময়ের চেয়ে সহজ।</p>
          </div>
          <div className="border border-gray-200 p-6 rounded-md  shadow-sm">
            <h2 className="text-left my-3 font-semibold">অসাধারণ গ্রাহক সেবা:</h2>
            <p className="text-sm">আমাদের নিবেদিত পেশাদারদের দল সবসময় আপনার পাশে রয়েছে। আপনার সন্তুষ্টি নিশ্চিত করাই আমাদের সর্বোচ্চ অগ্রাধিকার।</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
