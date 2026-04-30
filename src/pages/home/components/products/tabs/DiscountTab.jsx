import SingleDiscount from "./SingleDiscount";
import { useState } from "react";
import Banner5 from "../../../../../assets/img/banner5.png";

const tabsList = [
  {
    caption: "Wood Chair",
    id: 1,
    products: [
      {
        img: Banner5,
        title: "20% Discount Of All Products",
        caption: "Eams Sofa Compact(Wood chair)",
        desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, neque veniam? Dignissimos saepe alias fuga?",
        benefits: [
          { title: "Material expose like metals" },
          { title: "Simple natural colors" },
          { title: "clear line and geomatic figure" },
          { title: "Material expose like metals" },
        ],
      },
    ],
  },
  {
    caption: "Plastic Chair",
    id: 2,
    products: [
      {
        img: Banner5,
        title: "20% Discount Of All Products",
        caption: "Eams Sofa Compact(Plastic Chair)",
        desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, neque veniam? Dignissimos saepe alias fuga?",
        benefits: [
          { title: "Material expose like metals" },
          { title: "Simple natural colors" },
          { title: "clear line and geomatic figure" },
          { title: "Material expose like metals" },
        ],
      },
    ],
  },
  {
    caption: "Sofa Collection",
    id: 3,
    products: [
      {
        img: Banner5,
        title: "20% Discount Of All Products",
        caption: "Eams Sofa Compact(Sofa Collection)",
        desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, neque veniam? Dignissimos saepe alias fuga?",
        benefits: [
          { title: "Material expose like metals" },
          { title: "Simple natural colors" },
          { title: "clear line and geomatic figure" },
          { title: "Material expose like metals" },
        ],
      },
    ],
  },
];
export default function DiscountTab() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activeTab = tabsList[activeTabIndex];

  return (
    <div className="md:w-8/12 mx-auto max-md:px-5">
      <h1 className="text-center text-2xl lg:text-4xl text-liberty font-bold">
        Discount Item
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
      <div className="mt-5 md:mt-12">
        {activeTab.products.map((product, index) => {
          return <SingleDiscount product={product} key={index} />;
        })}
      </div>
    </div>
  );
}
