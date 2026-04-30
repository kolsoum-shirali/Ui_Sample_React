import SingleCard from "./SingleCard";
import { useState } from "react";

import chair12 from "../../../../../assets/img/chair12.png";
import chair5 from "../../../../../assets/img/chair5.png";
import chair8 from "../../../../../assets/img/chair8.png";
import chair11 from "../../../../../assets/img/chair11.png";
import chair7 from "../../../../../assets/img/chair7.png";
const tabsList = [
  {
    caption: "New Arrival",
    id: 1,
    products: [
      { img: chair12, title: "Comport Handy Craft", new_price: 4200, old_price: 6500 },
      { img: chair5,  title: "Comport Handy Craft", new_price: 4200, old_price: 6500 },
      { img: chair8,  title: "Comport Handy Craft", new_price: 4200, old_price: 6500 },
      { img: chair11, title: "Comport Handy Craft", new_price: 4200, old_price: 6500 },
      { img: chair7,  title: "Comport Handy Craft", new_price: 4200, old_price: 6500 },
      { img: chair11, title: "Comport Handy Craft", new_price: 4200, old_price: 6500 },
    ],
  },
  {
    caption: "Best Seller",
    id: 2,
    products: [
      { img: chair12, title: "Best Seller Craft", new_price: 5200, old_price: 7500 },
      { img: chair5,  title: "Best Seller Craft", new_price: 5200, old_price: 7500 },
      { img: chair8,  title: "Best Seller Craft", new_price: 5200, old_price: 7500 },
      { img: chair11, title: "Best Seller Craft", new_price: 5200, old_price: 7500 },
      { img: chair7,  title: "Best Seller Craft", new_price: 5200, old_price: 7500 },
      { img: chair11, title: "Best Seller Craft", new_price: 5200, old_price: 7500 },
    ],
  },
  {
    caption: "Featured",
    id: 3,
    products: [
      { img: chair12, title: "Featured Craft", new_price: 6200, old_price: 8500 },
      { img: chair5,  title: "Featured Craft", new_price: 6200, old_price: 8500 },
      { img: chair8,  title: "Featured Craft", new_price: 6200, old_price: 8500 },
      { img: chair11, title: "Featured Craft", new_price: 6200, old_price: 8500 },
      { img: chair7,  title: "Featured Craft", new_price: 6200, old_price: 8500 },
      { img: chair11, title: "Featured Craft", new_price: 6200, old_price: 8500 },
    ],
  },
  {
    caption: "Special Offer",
    id: 4,
    products: [
      { img: chair12, title: "Special Offer Craft", new_price: 3200, old_price: 6500 },
      { img: chair5,  title: "Special Offer Craft", new_price: 3200, old_price: 6500 },
      { img: chair8,  title: "Special Offer Craft", new_price: 3200, old_price: 6500 },
      { img: chair11, title: "Special Offer Craft", new_price: 3200, old_price: 6500 },
      { img: chair7,  title: "Special Offer Craft", new_price: 3200, old_price: 6500 },
      { img: chair11, title: "Special Offer Craft", new_price: 3200, old_price: 6500 },
    ],
  },
]; 
export default function ProductsTab() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activeTab = tabsList[activeTabIndex];

  return (
    <div className="md:w-8/12 mx-auto max-md:px-5">
      <h1 className="text-center text-2xl lg:text-4xl text-liberty font-bold">
        Latest Products
      </h1>
     <div className="mt-5">
        <ul className="flex justify-center gap-2 md:gap-4 lg:gap-x-8">
          {tabsList.map((tab, idx) => (
            <li
              key={tab.id + "-" + idx}
              className={`cursor-pointer text-base md:text-lg ${
                idx === activeTabIndex
                  ? "text-mainPink underline-offset-2 underline"
                  : "text-liberty"
              }`}
              onClick={() => setActiveTabIndex(idx)}
            >
              {tab.caption}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-3 gap-5 lg:gap-x-10 lg:gap-y-24 mt-5 md:mt-12">
        {activeTab.products.map((product, index) => {
          return <SingleCard product={product} key={index} />;
        })}
      </div>
    </div>
  );
}
