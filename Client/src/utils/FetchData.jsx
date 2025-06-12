import axios from 'axios';

 const fetchProducts = async () => {
  try {
    const res = await axios.get('https://glore-bd-backend-node-mongo.vercel.app/api/product');
    return res.data.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch products');
  }
};

export default fetchProducts;
const productCache = new Map();

export const getProducts = () => {
  if (!productCache.has('products')) {
    productCache.set('products', fetchProducts());
  }
  return productCache.get('products');
};