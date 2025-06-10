import { useEffect, useState } from 'react';
import { useSearch } from '../context/SearchContext';
import ClearIcon from '@mui/icons-material/Clear';
import Divider from '@mui/material/Divider';
import { IoSearch } from "react-icons/io5";
import FormatBDtaka from '../utils/FormatBDtaka';
import { Checkbox } from '@material-tailwind/react';
import PriceSlider from '../utils/PriceSlider';
import RightSidebar from './RightSideBar'; 
import { useCart } from '../context/CartItemContext';
import FetchData from '../utils/FetchData';
import { Link } from 'react-router';

export default function CollectionPage() {
  const { showSearch } = useSearch();
  const [value, setValue] = useState('');
   const { data: fetchData, loading, error } = FetchData();
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOption, setSortOption] = useState('');
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
 const {addToCart}=useCart();
  const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];

 useEffect(() => {
    if (fetchData.length > 0) {
      setFilteredData(fetchData);
    }
  }, [fetchData]);

  useEffect(() => {
    let currentFiltered = [...fetchData];

    if (selectedCategories.length > 0) {
      currentFiltered = currentFiltered.filter(product =>
        selectedCategories.includes(product.category.name)
      );
    }

    currentFiltered = currentFiltered.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (sortOption === 'a-z') {
      currentFiltered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'z-a') {
      currentFiltered.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === 'lowtohigh') {
      currentFiltered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'hightolow') {
      currentFiltered.sort((a, b) => b.price - a.price);
    }
    setFilteredData(currentFiltered);
  }, [selectedCategories, fetchData, priceRange, sortOption]);

  const handleSelect = (category) => {
    setSelectedCategories(prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]);
  };

  const handlePriceRangeChange = (event, newValue, activeThumb) => {
    const minDistance = 10;
    if (activeThumb === 0) {
      setPriceRange([Math.min(newValue[0], priceRange[1] - minDistance), priceRange[1]]);
    } else {
      setPriceRange([priceRange[0], Math.max(newValue[1], priceRange[0] + minDistance)]);
    }
  };

  const handleSort = (e) => {
    setSortOption(e.target.value);
  };

  const searchedData = filteredData.filter(item =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );

  const closeRightSidebar = () => {
    setIsRightSidebarOpen(false);
  };
  const handleAddToCart = (product) => {
      addToCart(product);
      setIsRightSidebarOpen(true);
  };

  return (
    <div className="px-10 py-5">
      <div className='bg-[#ffebf0] mb-5'><Divider /></div>
      {showSearch && (
        <div className="w-full flex justify-center items-center mb-16 border-b border-gray-300">
          <div className='w-full mb-5 flex justify-center'>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Search..."
              className="w-1/2 py-2 rounded-full px-4 border bg-[#ffffff] border-gray-400 focus:outline-none"
            />
            <IoSearch size={24} className='relative right-8 top-2 text-gray-600' />
            <button className='text-gray-500' onClick={() => setValue("")}>
              <ClearIcon />
            </button>
          </div>
        </div>
      )}
       {loading && <p>Loading...</p>}
      {error && <p className="text-red-500 text-lg">{error}</p>}
      <div className='flex flex-col lg:flex-row w-full'>
        <div className='w-64 border h-fit border-gray-300 rounded-lg p-5'>
          <h3 className='font-bold'>Filter by Category</h3>
          <ul>
            {categories.map((cat, i) => (
              <li key={i} className='flex items-center'>
                <Checkbox
                  onChange={() => handleSelect(cat)}
                  checked={selectedCategories.includes(cat)}
                />
                {cat}
              </li>
            ))}
          </ul>
          <h3 className='font-bold'>Filter by Price</h3>
          <PriceSlider
            value={priceRange}
            onChange={handlePriceRangeChange} />
          <div className='mt-2 text-sm text-gray-700'>
            Price Range: <span className='font-semibold'>৳{FormatBDtaka(priceRange[0])} - ৳{FormatBDtaka(priceRange[1])}</span>
          </div>
        </div>
        <div className="ml-6 flex-1">
          <div className='w-full flex flex-col lg:flex-row justify-between items-center'>
            <div className="flex items-center justify-start">
              <h1 className="text-[#6b7280] text-xl pb-5 font-semibold">ALL <span className="text-[#374151]">
                COLLECTIONS</span></h1>
              <div className="w-12 ml-2 pb-5"><Divider sx={{ borderWidth: '1px', borderColor: '#374151' }} /></div>
            </div>
            <div className='mb-4'>
              <select value={sortOption} onChange={handleSort}
                className="bg-white border text-sm rounded-md focus:outline-none border-[#c43983]">
                <option value="">Sort by: Relevant</option>
                <option value="a-z">Name: A to Z</option>
                <option value="z-a">Name: Z to A</option>
                <option value="lowtohigh">Price: Low to High</option>
                <option value="hightolow">Price: High to Low</option>
              </select>
            </div>
          </div>
          {searchedData.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {searchedData.map(product => (
                <div key={product._id} className="rounded-xl bg-white">
                  <div className="w-full overflow-hidden rounded-t-xl">
                    <Link to={`/singleproduct/${product.category.name}/${product._id}`}><img
                      src={product.images[0]?.secure_url}
                      alt={product.name}
                      
                      className="w-full h-[300px] object-cover cursor-pointer transition-transform duration-700 ease-in-out transform hover:scale-110"
                    /></Link>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 p-3">{product.name}</h2>
                  <div className='flex w-full justify-between items-center p-3'>
                    <button onClick={() => handleAddToCart(product)} className="text-white bg-[#c43983] cursor-pointer rounded p-2">অর্ডার করুন</button>
                    <h3 className='text-[#c43882] text-lg font-semibold'>
                      <span className='text-xl font-bold'>৳</span>{FormatBDtaka(product.price)}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-lg">No collections found.</p>
          )}
        </div>
      </div>
      <RightSidebar
        isOpen={isRightSidebarOpen}
        onClose={closeRightSidebar}
      />
    </div>
  );
}
