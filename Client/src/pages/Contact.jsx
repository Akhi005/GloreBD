import Divider from "@mui/material/Divider";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
      <NavBar color={"#ffebf0"} />
      
      <div className="flex flex-col items-center justify-center px-4 py-6 bg-[#ffebf0] text-center">
        <h1 className="text-[#6b7280] text-2xl sm:text-3xl font-semibold flex flex-wrap justify-center gap-2">
          CONTACT <span className="text-[#374151]">US</span>
        </h1>
        <div className="w-12 mt-2">
          <Divider sx={{ borderWidth: "1px", borderColor: "#374151" }} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-5 p-5 bg-[#ffebf0]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="p-5 w-full max-w-md"
            src="https://i.ibb.co/wFDR9QFg/about-img-4-Bbpa-MTv.webp"
            alt="Contact"
          />
        </div>
        <div className="flex-1 mx-4 md:mx-10 text-justify text-sm">
          <h2 className="text-2xl md:text-3xl my-4 font-semibold">Our Store</h2>
          <p>
            <span className="font-semibold">ঠিকানা:</span> ৭২২/৩ রসনা ভিলা, ৪র্থ তলা বসুন্ধরা লেন, পশ্চিম কাজীপাড়া, মিরপুর - 1216
          </p>
          <p>
            <span className="font-semibold">মোবাইল নং:</span> (+88) 01855-375963
          </p>
          <p>
            <span className="font-semibold">ইমেইল:</span> hello@glorebd.com
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
