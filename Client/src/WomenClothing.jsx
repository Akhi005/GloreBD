import React, {use } from 'react'; 
import axios from 'axios'
import { Button } from "@material-tailwind/react";
import FormatBDtaka from './utils/FormatBDtaka'

async function fetchDataForWomenClothing() {
  const response = await axios.get('https://glore-bd-backend-node-mongo.vercel.app/api/product'); 
  if (response.status!=200) {
    throw new Error('Failed to fetch data');
  }
  return response.data;
}

let womenClothingPromise = null; 

function getWomenClothingData() {
  if (womenClothingPromise === null) {
    womenClothingPromise = fetchDataForWomenClothing();
  }
  return womenClothingPromise;
}

export default function WomenClothing() {
  const apiResponse = use(getWomenClothingData());
  return (
    <>
      <h1 className='font-bold text-xl my-3 text-left ml-12 mt-8'>Women's Clothing</h1>
      {apiResponse.data && apiResponse.data.length > 0 ? (
        <ul className='flex gap-5 px-12 h-[520px] '>
          {apiResponse.data.map(item => (
            <li key={item._id} className='flex-1 bg-white rounded-2xl '>
                <img className='h-[400px] w-full rounded-t-2xl' src={`${item.images[0].secure_url}`}  alt=""/> 
                <h2 className='font-bold text-lg pt-2 pb-5'>{item.name}</h2>
                <div className='flex w-full justify-between px-5 items-center'>
                    <Button className="text-white bg-[#c43882] rounded-xl">অর্ডার করুন</Button>
                    <h3 className='text-[#c43882] text-lg flex items-center'><span className='text-xl font-bold flex items-center'>৳</span>{FormatBDtaka(item.price)}</h3>
                </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No clothing items found.</p>
      )}
    </>
  );
}
