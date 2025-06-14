import React, { useEffect, useState, useMemo } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import Divider from '@mui/material/Divider'; 
import { Link } from "react-router";
import fetchProducts from '../utils/FetchData'

export default function Sidebar({ isOpen, onClose }) {
  const [btn, setBtn] = useState(false);
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await fetchProducts();
          setFetchData(res);
      } catch {
        alert("An unexpected error has occurred.");
      }
    };
    FetchData();
  }, [btn]);

  const uniqueCategories = useMemo(() => {
    const seen = new Set();
    return fetchData
      .map(item => item.category)
      .filter(category => {
        if (!category || seen.has(category._id)) return false;
        seen.add(category._id);
        return true;
      });
  }, [fetchData]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={onClose}
        ></div>
      )}
      <div
        className={`pt-8 fixed top-0 left-0 h-full w-[90%] max-w-xs bg-white shadow-lg z-50
          transform transition-transform duration-400 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4 flex justify-between items-center font-bold">
          <h2 className="text-xl font-bold">Categories</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900 cursor-pointer">
            <IoCloseOutline size={20} />
          </button>
        </div>
        <nav className="px-4">
          <ul className="space-y-2 text-sm font-semibold">
            <li>
              <button
                onClick={() => setBtn(!btn)}
                className="block py-2 hover:text-[#c43882] rounded cursor-pointer"
              >
                Women's Clothing
              </button>
            </li>
          </ul>
          <Divider sx={{ borderColor: '#ffd5df' }} />
          {btn && (
            <div>
              <ul>
                {uniqueCategories.map(category => (
                  <li key={category._id} onClick={onClose}>
                    <Link
                      to={`/category-product/${category._id}`}
                      className="block py-1 hover:text-[#c43882] rounded"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}
