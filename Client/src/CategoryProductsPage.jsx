import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Divider from "@mui/material/Divider";
import FormatBDtaka from './utils/FormatBDtaka'
import { Button } from "@material-tailwind/react";

export default function CategoryProductsPage() {
  const { categoryId } = useParams(); 
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (categoryId) { 
      const fetchProductsByCategory = async () => {
        setLoading(true);
        setError(null);
        try {
          const res = await axios.get(`https://glore-bd-backend-node-mongo.vercel.app/api/product`);
          console.log(res.data.data)
          if (res.status === 200 && res.data && Array.isArray(res.data.data)) {
            const filteredProducts = res.data.data.filter(product =>
            product.category && product.category._id === categoryId);
            setCategoryProducts(filteredProducts);
          }
          else {
            setError("Failed to retrieve products.");
            console.error("API response error:", res);
          }
        } catch (err) {
          setError("An unexpected error occurred while fetching category products.");
          console.error("Fetch error:", err);
        } finally {
          setLoading(false);
        }
      };
      fetchProductsByCategory();
    }
  }, [categoryId]); 
  if (loading) {
    return <div className="text-center p-8">Loading products...</div>;
  }
  console.log(categoryProducts)
  if (error) {
    return <div className="text-center p-8 text-red-500">{error}</div>;
  }

  return (
    <div className="p-8">
      <div className='w-full flex justify-center py-5'><p className="w-12 ml-2"><Divider sx={{ borderWidth: '1px',borderColor: '#374151'}}/></p></div>
      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryProducts.map(product => (
          <div key={product._id} className="rounded-lg bg-white overflow-hidden">
            <div className="w-full h-[400px] overflow-hidden ">
              <img
                src={product.images[0]?.secure_url}
                alt={product.name}
                className="w-full h-full object-cover cursor-pointer transition-transform duration-700 ease-in-out transform hover:scale-130"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2 p-3">{product.name}</h2> 
            <div className='flex w-full justify-between items-center p-3'>
              <Button className="text-white bg-[#c43882] rounded">অর্ডার করুন</Button>
              <h3 className='text-[#c43882] text-lg flex items-center font-semibold'>
                <span className='text-xl font-bold '>৳</span>
                {FormatBDtaka(product.price)}
              </h3>
            </div>
          </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No products found for this category.</p>
      )}
    </div>
  );
}