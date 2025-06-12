import { useState, useMemo, Suspense,use } from 'react';
import { useSearch } from '/src/context/SearchContext';
import ClearIcon from '@mui/icons-material/Clear';
import Divider from '@mui/material/Divider';
import { IoSearch } from "react-icons/io5";
import FormatBDtaka from '/src/utils/FormatBDtaka';
import { Checkbox } from '@material-tailwind/react';
import PriceSlider from '/src/utils/PriceSlider';
import RightSidebar from './RightSideBar'; 
import { useCart } from '/src/context/CartItemContext';
import { getProducts } from '/src/utils/FetchData';
import { Link } from 'react-router-dom';

export default function CollectionPage() {
  const { showSearch } = useSearch();
  const [value, setValue] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOption, setSortOption] = useState('');
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const { addToCart } = useCart();
  
  const categories = ["Category 1","Category 2","Category 3","Category 4"];

  const products = use(getProducts());

  const searchedData = useMemo(() => {
    let filtered = [...products];
    if (value) {
      filtered = filtered.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
    }
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => selectedCategories.includes(product.category.name))
    }
    filtered = filtered.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    switch (sortOption) {
      case 'a-z':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'z-a':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'lowtohigh':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'hightolow':
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
         break;
    }
    
    return filtered;
  }, [products, value, selectedCategories, priceRange, sortOption]);

  const handleSelect = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const handlePriceRangeChange = (newValue) => {
    setPriceRange(newValue);
  };

  const handleSort = (e) => {
    setSortOption(e.target.value);
  };

  const closeRightSidebar = () => {
    setIsRightSidebarOpen(false);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setIsRightSidebarOpen(true);
  };

  return (
    <div className="px-4 md:px-10 py-5">
      <div className='bg-[#ffebf0] mb-5'><Divider /></div>
      
      {showSearch && (
        <div className="w-full flex justify-center items-center mb-8 md:mb-16">
          <div className='w-full max-w-2xl relative mb-5'>
            <div className="relative">
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search products..."
                className="w-full py-3 px-6 rounded-full border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c43983]"
              />
              <IoSearch size={24} className='absolute right-4 top-3 text-gray-500' />
              {value && (
                <button 
                  className='absolute right-12 top-3 text-gray-500'
                  onClick={() => setValue("")} >
                  <ClearIcon fontSize="small" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      
      <div className='flex flex-col lg:flex-row w-full gap-6'>
        <div className='w-full lg:w-72 border border-gray-200 rounded-xl p-5 h-fit shadow-sm'>
          <h3 className='font-bold text-lg mb-4'>Filter by Category</h3>
          <ul className='space-y-2'>
            {categories.map((cat) => (
              <li key={cat} className='flex items-center'>
                <Checkbox
                  color="pink"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => handleSelect(cat)}
                  crossOrigin="anonymous"
                />
                <span className='ml-2 text-gray-700'>{cat}</span>
              </li>
            ))}
          </ul>
          
          <h3 className='font-bold text-lg mt-8 mb-4'>Filter by Price</h3>
          <PriceSlider
            value={priceRange}
            onChange={handlePriceRangeChange}
          />
          <div className='mt-4 text-gray-700'>
            <span className='font-medium'>Price Range: </span>
            <span className='font-semibold text-[#c43882]'>
              ৳{FormatBDtaka(priceRange[0])} - ৳{FormatBDtaka(priceRange[1])}
            </span>
          </div>
        </div>
        <div className="flex-1">
          <div className='w-full flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6'>
            <div className="flex items-center mb-4 lg:mb-0">
              <h1 className="text-gray-600 text-xl font-semibold">
                ALL <span className="text-gray-900">COLLECTIONS</span>
              </h1>
              <div className="w-12 ml-2">
                <Divider sx={{ borderWidth: '1px', borderColor: '#374151' }} />
              </div>
            </div>
            
            <div className='w-full lg:w-auto'>
              <select 
                value={sortOption} 
                onChange={handleSort}
                className="w-full lg:w-auto bg-white border text-sm rounded-lg focus:outline-none border-[#c43983] px-4 py-2"
              >
                <option value="">Sort by: Relevant</option>
                <option value="a-z">Name: A to Z</option>
                <option value="z-a">Name: Z to A</option>
                <option value="lowtohigh">Price: Low to High</option>
                <option value="hightolow">Price: High to Low</option>
              </select>
            </div>
          </div>
          
          <Suspense fallback={
            <div className="text-center py-20">
              <p className="text-lg text-gray-600">Loading collections...</p>
            </div>
          }>
            {searchedData.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {searchedData.map(product => (
                  <div key={product._id} className="rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-full overflow-hidden rounded-t-xl">
                      <Link to={`/singleproduct/${product.category.name}/${product._id}`}>
                        <img
                          src={product.images[0]?.secure_url}
                          alt={product.name}
                          className="w-full h-72 object-cover cursor-pointer transition-transform duration-500 hover:scale-105"
                        />
                      </Link>
                    </div>
                    <div className="p-4">
                      <h2 className="text-lg font-semibold mb-2 line-clamp-2 h-14">
                        {product.name}
                      </h2>
                      <div className='flex justify-between items-center mt-4'>
                        <button 
                          onClick={() => handleAddToCart(product)}
                          className="text-white bg-[#c43983] cursor-pointer hover:bg-[#a32e6a] rounded-lg px-4 py-2 transition-colors"
                        >অর্ডার করুন
                        </button>
                        <h3 className='text-[#c43882] text-lg font-semibold'>
                          <span className='text-xl'>৳</span>
                          {FormatBDtaka(product.price)}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600">
                  {value ? "No products match your search" : "No products found"}
                </p>
                <button 
                  className="mt-4 text-[#c43882] hover:underline"
                  onClick={() => {
                    setValue('');
                    setSelectedCategories([]);
                    setPriceRange([0, 1000]);
                  }}
                >
                  Clear all filters
                </button>
              </div>
            )}
          </Suspense>
        </div>
      </div>
      
      <RightSidebar
        isOpen={isRightSidebarOpen}
        onClose={closeRightSidebar}
      />
    </div>
  );
}