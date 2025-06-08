import Divider from "@mui/material/Divider";
import WomenClothing from "./WomenClothing";

export default function LatestCollection() {
  return (
    <>
      <div className="mt-8 text-center bg-[#ffebf0] py-16">
        <div className="flex items-center w-full justify-center">
          <h1 className="text-[#6b7280] text-3xl py-5 font-semibold">LATEST <span className="text-[#374151]">
          COLLECTIONS</span></h1>
          <div className="w-12 ml-2"><Divider sx={{ borderWidth: '1px',borderColor: '#374151'}}/></div>
        </div>
        
        <div className="text-[#374151] ">
          <p>✨ নতুন স্টাইলে জ্বলে উঠুন! ✨</p>
          <p>ট্রেন্ডিং পণ্যগুলোর সাথে থাকুন সবসময় এক ধাপ এগিয়ে!
          আপনার ফ্যাশন, আপনার পরিচয়</p> <p><span className="text-[#c43882]">GloreBD</span> এর সাথে।❤️</p>
         <WomenClothing />
        </div>
      </div>
    </>
  );
}
