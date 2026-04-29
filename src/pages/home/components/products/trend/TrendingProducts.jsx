import SingleTrend from "./SingleTrend";
import chair2 from "../../../../../assets/img/chair2.png";
import chair5 from "../../../../../assets/img/chair5.png";
import chair6 from "../../../../../assets/img/chair6.png";
import chair7 from "../../../../../assets/img/chair7.png";
import DiscountBanner from '../../banner/DiscountBanner'
const products = [
  {
    img: chair2,
    title: "Cantilever chair",
    new_price: 26.0,
    old_price: 42.0,
  },
  {
    img: chair5,
    title: "Cantilever chair",
    new_price: 26.0,
    old_price: 42.0,
  },
  {
    img: chair6,
    title: "Cantilever chair",
    new_price: 26.0,
    old_price: 42.0,
  },
  {
    img: chair7,
    title: "Cantilever chair",
    new_price: 26.0,
    old_price: 42.0,
  },
];

export default function TrendingProducts() {
  return (
    <div className="md:w-8/12 mx-auto max-md:px-5">
      <h1 className="text-center text-2xl lg:text-4xl text-liberty font-bold">
        Trending Products
      </h1>
     <div className="space-y-10">
       <div className="grid grid-cols-4 gap-5 lg:gap-7 mt-5 md:mt-10">
        {products.map((product, index) => (
          <SingleTrend product={product} key={index} />
        ))}
      </div>
      <DiscountBanner/>
     </div>
    </div>
  );
}
