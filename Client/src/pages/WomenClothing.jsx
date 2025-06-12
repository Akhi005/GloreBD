import  {use} from 'react';
import { Link } from 'react-router-dom';
import FormatBDtaka from '/src/utils/FormatBDtaka';
import { getProducts } from '../utils/FetchData'
import OrderButton from '../utils/OrderButton'

const WomenClothing = ({ products: propProducts }) => {
  const internalProducts = use(getProducts());
  const products = propProducts || internalProducts;

  return (
    <div className='px-12'>
      <h2 className='text-2xl font-bold text-left'>Women Clothing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
        {products?.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow" >
            <Link to={`/singleproduct/${product.category?.name}/${product._id}`}>
              <div className="h-[500px] overflow-hidden rounded-t-xl">
              <img
                src={product.images[0]?.secure_url}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-115"
              />
            </div>
            </Link>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                {product.name}
              </h3>
              <div className="flex justify-between items-center">
                <OrderButton product={product} quantity={ product.quantity} />
                <span className="text-[#c43882] font-semibold">
                  ৳{FormatBDtaka(product.price)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenClothing;
