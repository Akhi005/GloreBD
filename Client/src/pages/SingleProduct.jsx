import { useParams } from "react-router-dom";
import FetchData from "../utils/FetchData";
import NavBar from "./NavBar";
import StarRatings from 'react-star-ratings';
import Counter from "../utils/Counter";
import { useCart } from "../context/CartItemContext";
import FormatBDtaka from "../utils/FormatBDtaka";
import { FaAward,FaCarSide,FaShoppingBag } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaFacebook ,FaFacebookMessenger,FaTwitter } from "react-icons/fa";
import { RiInstagramFill,RiWhatsappFill  } from "react-icons/ri";
import { Link } from "react-router";
import Divider from "@mui/material/Divider";

export default function SingleProduct() {
  const { id } = useParams();
  const { data: fetchData, loading, error } = FetchData();
  const {addToCart}=useCart();
  const filteredData = fetchData?.find(e => e._id === id);

  if (loading) return <p className="text-center mt-10">Loading product...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!filteredData) return <p className="text-center mt-10">Product not found.</p>;
   
  const handleAddToCart = (product) => {
      addToCart(product);
  };
  return (
    <>
      <NavBar />
      <div className="p-12 flex flex-col md:flex-row gap-10 bg-[#ffebf0] min-h-[400px]">
        <div className="w-full md:w-1/2">
          <img
            src={filteredData.images[0]?.secure_url}
            alt={filteredData.name}
             className="w-full h-full max-h-[700px] object-cover rounded-lg "
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-3">
          <h2 className="text-2xl font-bold mb-2">{filteredData.name}</h2>
           <StarRatings
        rating={4}
        starRatedColor="brown"
        starDimension="20px"
        starSpacing="5px"
      />
          <h3 className="text-2xl text-pink-700 font-bold mb-2"><span className="text-3xl">৳</span> {FormatBDtaka(filteredData.price)}</h3>
          <h4 className="text-md text-gray-500">Category: {filteredData.category?.name}</h4>
          <div className="w-24 my-3"><Counter/></div>
        <button onClick={() => handleAddToCart(filteredData)} className="text-white my-5 w-full bg-[#c43983] cursor-pointer rounded p-2">অর্ডার করুন</button>
        <div className="text-gray-400 font-semibold mb-5">
            <p className="flex gap-2 items-center"><FaAward />100% Original Product.</p>
            <p className="flex gap-2 items-center"><FaCarSide />Express Shipping</p>
            <p className="flex gap-2 items-center"><BsCashCoin/>Cash on Delivery Available</p>
            <p className="flex gap-2 items-center"><FaShoppingBag />Easy return and exchange policy within 3 days</p>
        </div>
         <Accordion sx={{ backgroundColor: '#ffebf0', boxShadow:'none' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />} >
          <Typography component="span" className="font-bold text-black">Description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>Body: Soft Georgette</p>
          <p>Design Work: Heavy Embroidery</p>
          <p>Sleeve: Soft Georgette</p>
        </AccordionDetails>
      </Accordion>
       <div className='flex w-full justify-start items-center'>
                            <Link to="https://www.facebook.com/GLorebd/"><FaFacebook size={28} className='mr-5 hover:text-[#c43882]'/></Link>
                            <Link to="https://www.m.me/EMegaDeal"><FaFacebookMessenger size={28} className='mr-4 hover:text-[#c43882]'/></Link>
                            <Link to=""><FaTwitter  size={28} className='mr-4 hover:text-[#c43882]'/></Link>
                            <Link to=""><RiInstagramFill  size={28} className='mr-4 hover:text-[#c43882]'/></Link>
                            <Link to=""><RiWhatsappFill   size={28} className='mr-4 hover:text-[#c43882]'/></Link>
                        </div>
        </div>
      </div>
      <div className="flex items-center w-full justify-center ">
          <h1 className="text-[#6b7280] text-3xl py-8 font-semibold">RELATED <span className="text-[#374151]">
          PRODUCTS</span></h1>
          <div className="w-12 ml-2"><Divider sx={{ borderWidth: '1px',borderColor: '#374151'}}/></div>
        </div>
      <div className="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {fetchData
    .filter(product => product._id !== id)
    .slice(0, 4)
    .map(product => (
      <div key={product._id} className="rounded-xl mb-8">
        <div className="w-full overflow-hidden rounded-t-xl">
            <img
              src={product.images[0]?.secure_url}
              alt={product.name}
              className="w-full h-[300px] object-cover cursor-pointer transition-transform duration-700 ease-in-out transform hover:scale-110"
            />
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

    </>
  );
}
