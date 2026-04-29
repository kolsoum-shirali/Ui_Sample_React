import Banner2 from "../../../../assets/img/banner2.png";
import Banner3 from "../../../../assets/img/banner3.png";
import chair2 from "../../../../assets/img/chair2.png";
import chair5 from "../../../../assets/img/chair5.png";
import chair6 from "../../../../assets/img/chair6.png";
import { Link } from "react-router-dom";

const bannersList = [
  { img: Banner2, title: "Shop Now", color: "bg-pink-50/50", classObj: "" },
  {
    img: Banner3,
    title: "View Collection",
    color: "bg-lavender/40",
    classObj: "mt-8",
  },
];
const chairDiscounts = [
  { img: chair2, title: "Executive Seat chair", price: 32.0 },
  { img: chair5, title: "Executive Seat chair", price: 32.0 },
  { img: chair6, title: "Executive Seat chair", price: 32.0 },
];
export default function DiscountBanner() {
  return (
    <div className="grid grid-cols-8 gap-7">
      {bannersList.map((banner, index) => {
        return (
          <div
            className={`col-span-8 lg:col-span-3 p-5 rounded ${banner.color}`}
            key={index}
          >
            <div className="space-y-2">
              <h3 className="text-liberty text-xl font-semibold">
                23% off in all products
              </h3>
              <h3 className="text-mainPink text-base underline font-medium">
                {banner.title}
              </h3>
            </div>
            <div className="flex justify-end">
              <img src={banner.img} alt={Banner2} className={banner.classObj} />
            </div>
          </div>
        );
      })}
      <div className="col-span-8 lg:col-span-2 flex flex-col justify-between">
        {chairDiscounts.map((item, index) => (
          <div key={index}>
            <Link to="/" className="grid grid-cols-12">
              <div className="col-span-3  bg-gray-100/60">
                <div className="lg:h-[50px] xl:h-[70px] aspect-square flex justify-center overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.img}
                    className="max-w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="col-span-9 text-sm flex flex-col justify-center p-2">
                <div className=" text-liberty font-medium ">
                  <h5 className="text-sm">{item.title}</h5>
                  <h6 className="text-xs line-through">
                    <span>$</span>
                    {item.price}
                  </h6>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
