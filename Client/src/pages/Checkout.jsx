import CartItemsList from "/src/pages/CartItemList";
import Divider from "@mui/material/Divider";
import { useForm } from "react-hook-form";
import { useCart } from "/src/context/CartItemContext"; 

export default function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const { subtotal } = useCart();
  const deliveryArea = watch("deliveryArea");
  const deliveryCharges = {
    "ঢাকার ভিতরে ৳ 80": 80,
    "সাব-ঢাকা ৳ 100": 100, 
    "ঢাকার বাইরে ৳ 150": 150,
    "": 0 
  };
  const currentDeliveryCharge = deliveryCharges[deliveryArea] || 0;
  const grandTotal = subtotal + currentDeliveryCharge;

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full gap-5 px-5 py-8 bg-[#ffebf0] min-h-screen">
        <div className="flex-1 bg-white shadow-lg p-5 rounded-lg mb-5 lg:mb-0">
          <h3 className="font-bold text-xl bg-[#c43882] rounded-lg text-white p-2 text-center">Shopping Items</h3>
          <CartItemsList />
        </div>
        <div className="flex-1 bg-white shadow-lg p-5 rounded-lg">
          <div className="flex items-center w-full justify-center mb-5">
            <h1 className="text-[#6b7280] text-xl font-semibold">DELIVERY <span className="text-[#374151]">INFORMATION</span></h1>
            <div className="w-12 ml-2">
              <Divider sx={{ borderWidth: '1px', borderColor: '#374151' }} />
            </div>
          </div>
          <p className="text-sm text-gray-400 my-5 text-center">অর্ডার কনফার্ম করতে আপনার নাম, ঠিকানা, মোবাইল নাম্বার লিখে অর্ডার কনফার্ম করুন।</p>

          <form onSubmit={handleSubmit(onSubmit)} className="mx-4 flex flex-col gap-4">
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="name" className="text-sm font-medium">আপনার নাম*</label>
              <input
                id="name"
                className="border border-pink-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Enter Full Name"
                {...register("name", { required: true, minLength: 3 })}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name?.type === "required" && (
                <p role="alert" className="text-red-500 text-xs mt-1">সর্বনিম্ন ৩ অক্ষরের নাম দিন</p>
              )}
              {errors.name?.type === "minLength" && (
                <p role="alert" className="text-red-500 text-xs mt-1">নাম কমপক্ষে ৩ অক্ষরের হতে হবে।</p>
              )}
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="phone" className="text-sm font-medium">আপনার ফোন নাম্বার*</label>
              <input
                id="phone"
                type="number"
                className="border border-pink-200 p-2 rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Enter Contact Number"
                {...register("phone", { required: true, pattern: /^[0-9]+$/ })} 
                aria-invalid={errors.phone ? "true" : "false"}
              />
              {errors.phone?.type === "required" && (
                <p role="alert" className="text-red-500 text-xs mt-1">আপনার ফোন নাম্বার দিন</p>
              )}
              {errors.phone?.type === "pattern" && (
                <p role="alert" className="text-red-500 text-xs mt-1">সঠিক ফোন নাম্বার দিন।</p>
              )}
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="deliveryaddress" className="text-sm font-medium">আপনার ডেলিভারি ঠিকানা দিন*</label>
              <textarea
                id="deliveryaddress"
                className="border border-pink-200 p-2 rounded-lg resize-y min-h-[60px] focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Enter Delivery Address"
                {...register("deliveryaddress", { required: true })}
                aria-invalid={errors.deliveryaddress ? "true" : "false"}
              />
              {errors.deliveryaddress?.type === "required" && (
                <p role="alert" className="text-red-500 text-xs mt-1">আপনার ঠিকানা দিন</p>
              )}
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="delivery-area" className="text-sm font-medium">ডেলিভারি এলাকা*</label>
              <select
                id="delivery-area"
                className="border border-pink-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                {...register("deliveryArea", { required: true })}>
                <option value="">Select Delivery Area</option>
                <option value="ঢাকার ভিতরে ৳ 80">ঢাকার ভিতরে ৳ 80 (Inside Dhaka ৳ 80)</option>
                <option value="সাব-ঢাকা ৳ 100">সাব-ঢাকা ৳ 100 (Sub-Dhaka ৳ 100)</option>
                <option value="ঢাকার বাইরে ৳ 150">ঢাকার বাইরে ৳ 150 (Outside Dhaka ৳ 150)</option>
              </select>
              {errors.deliveryArea?.type === "required" && (
                <p role="alert" className="text-red-500 text-xs mt-1">ডেলিভারি এলাকা নির্বাচন করুন</p>
              )}
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="note" className="text-sm font-medium">গ্রাহক নোট (optional)</label>
              <input
                id="note"
                className="border border-pink-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Enter Your Note"
                {...register("note")} 
              />
            </div>
            <h3 className="my-5 text-lg font-semibold">Payment Method</h3>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="cod"
                value="Cash on Delivery"
                {...register("paymentMethod", { required: true })}
                className="form-radio text-pink-500 focus:ring-pink-500"
              />
              <label htmlFor="cod" className="text-base">Cash on Delivery</label>
            </div>
            {errors.paymentMethod?.type === "required" && (
              <p role="alert" className="text-red-500 text-xs mt-1">পেমেন্ট মেথড নির্বাচন করুন</p>
            )}
            <div className="flex items-center w-full justify-start mt-5">
              <h1 className="text-[#6b7280] text-xl font-semibold">CART <span className="text-[#374151]">TOTALS</span></h1>
              <div className="w-12 ml-2">
                <Divider sx={{ borderWidth: '1px', borderColor: '#374151' }} />
              </div>
            </div>

            <div className="mt-4 text-gray-700">
              <div className="flex justify-between py-1 border-b border-gray-200">
                <span>Subtotal:</span>
                <span className="font-semibold">৳ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-200">
                <span>Delivery Charge:</span>
                <span className="font-semibold">৳ {currentDeliveryCharge.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 text-xl font-bold text-[#c43882]">
                <span>Grand Total:</span>
                <span>৳ {grandTotal.toFixed(2)}</span>
              </div>
            </div>
            <input
              type="submit"
              value="Place Order"
              className="mt-6 w-full bg-[#c43882] text-white py-3 rounded-lg font-bold text-lg cursor-pointer hover:bg-[#a92b70] transition duration-200 ease-in-out shadow-md"
            />
          </form>
        </div>
      </div>
    </>
  );
}
