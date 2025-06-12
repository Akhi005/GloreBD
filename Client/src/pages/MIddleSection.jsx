export default function MiddleSection() {
  return (
    <div className="bg-[#ffd5df] px-4 md:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <img
            src="https://i.ibb.co/HfDFzJ2p/fl6q1ht2.png"
            alt="Exchange Policy"
            width="50"
            height="50"
            className="mb-4"
          />
          <h2 className="text-lg font-semibold">Easy Exchange Policy</h2>
          <p className="text-sm md:text-base">We offer hassle-free exchange policy</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://i.ibb.co/Z6nhnFhK/download.webp"
            alt="Return Policy"
            width="50"
            height="50"
            className="mb-4"
          />
          <h2 className="text-lg font-semibold">3 Days Return Policy</h2>
          <p className="text-sm md:text-base">We provide 3 days free return policy</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://i.ibb.co/rR9LZGNQ/download-1.webp"
            alt="Customer Support"
            width="50"
            height="50"
            className="mb-4"
          />
          <h2 className="text-lg font-semibold">Best Customer Support</h2>
          <p className="text-sm md:text-base">We provide 24/7 customer support</p>
        </div>
      </div>
    </div>
  );
}
