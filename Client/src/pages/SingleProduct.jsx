import { useParams } from "react-router-dom";
import { use,useState,useEffect } from "react";
import NavBar from "./NavBar";
import StarRatings from 'react-star-ratings';
import FormatBDtaka from "../utils/FormatBDtaka";
import { FaAward, FaCarSide, FaShoppingBag } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import WomenClothing from './WomenClothing'
import { 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Typography,
  Divider 
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { 
  FaFacebook, 
  FaFacebookMessenger, 
  FaTwitter 
} from "react-icons/fa";
import { 
  RiInstagramFill, 
  RiWhatsappFill  
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { getProducts } from "../utils/FetchData";
import Counter from "../utils/Counter";
import OrderButton from "../utils/OrderButton"
import { useCart } from "../context/CartItemContext"

export default function SingleProduct() {
  const { id } = useParams();
  const {updateQuantity } = useCart();
  const products = use(getProducts());
  const product = products.find(p => p._id === id);
  const [quantity, setQuantity] = useState(product?.quantity || 1);
  useEffect(() => {
    if (product) {
      setQuantity(product.quantity);
    }
  }, [product]);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    if (product) {
      updateQuantity(id, newQuantity);
    }
  };
  if (!product) {
    return (
      <div className="text-center py-20">
        <p className="text-2xl text-gray-600">Product not found</p>
        <Link to="/" className="text-[#c43882] hover:underline mt-4 inline-block">Browse products</Link>
      </div>
    );
  }
  const relatedProducts = products.filter(p => p._id !== id && p.category?.name === product.category?.name).slice(0, 4);

  return (
    <div className="bg-[#ffebf0] min-h-screen">
      <NavBar />
      
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <img
            src={product.images[0]?.secure_url}
            alt={product.name}
            className="w-full h-auto max-h-[700px] object-contain"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <StarRatings
            rating={4.5}
            starRatedColor="#c43882"
            starDimension="24px"
            starSpacing="2px"
          />
          
          <div className="flex items-center gap-4 my-2">
            <span className="text-3xl text-[#c43882] font-bold">
              ৳{FormatBDtaka(product.price)}
            </span>
          </div>
          
          {product.category?.name && (
            <p className="text-gray-600">
              Category: <span className="font-medium">{product.category.name}</span>
            </p>
          )}
          
          <div className="my-4">
            <p className="font-medium mb-2">Quantity:</p>
            <div className="w-24">
            <Counter
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>
      </div>
      
          <OrderButton product={product}  quantity={quantity} />
          <div className="mt-6 space-y-3 text-gray-600">
            <div className="flex items-center gap-3">
              <FaAward className="text-[#c43882] text-xl" />
              <span>100% Original Product</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCarSide className="text-[#c43882] text-xl" />
              <span>Express Shipping</span>
            </div>
            <div className="flex items-center gap-3">
              <BsCashCoin className="text-[#c43882] text-xl" />
              <span>Cash on Delivery Available</span>
            </div>
            <div className="flex items-center gap-3">
              <FaShoppingBag className="text-[#c43882] text-xl" />
              <span>Easy return and exchange within 7 days</span>
            </div>
          </div>
          <Accordion 
            defaultExpanded
            sx={{ 
              backgroundColor: 'transparent', 
              boxShadow: 'none',
              '&:before': { display: 'none' }
            }} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-[#c43882]" />}>
              <Typography className="font-bold text-lg">
                Product Details
              </Typography>
            </AccordionSummary>
            <AccordionDetails><p className="text-gray-700">{product.description}</p>
            </AccordionDetails>
          </Accordion>
          
          <div className="mt-4">
            <p className="font-medium mb-2">Share this product:</p>
            <div className="flex gap-4">
              <Link to="https://www.facebook.com/GLorebd/" target="_blank">
                <FaFacebook className="text-2xl text-[#3b5998] hover:text-[#2d4373]" />
              </Link>
              <Link to="https://www.m.me/EMegaDeal" target="_blank">
                <FaFacebookMessenger className="text-2xl text-[#0084ff] hover:text-[#0066cc]" />
              </Link>
              <Link to="#" target="_blank">
                <FaTwitter className="text-2xl text-[#1da1f2] hover:text-[#0d8bd9]" />
              </Link>
              <Link to="#" target="_blank">
                <RiInstagramFill className="text-2xl text-[#e1306c] hover:text-[#c1225a]" />
              </Link>
              <Link to="#" target="_blank">
                <RiWhatsappFill className="text-2xl text-[#25d366] hover:text-[#128c7e]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {relatedProducts.length > 0 && (
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-center mb-10">
            <Divider className="flex-grow bg-gray-400" />
            <h2 className="px-4 text-2xl font-bold text-gray-700">
              RELATED PRODUCTS
            </h2>
            <Divider className="flex-grow bg-gray-400" />
          </div>
          <WomenClothing products={relatedProducts} />
        </div>
      )}
    </div>
  );
}