import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import SingleFeature from "./SingleFeature";
import chair8 from "../../../../../assets/img/chair8.png";
import chair9 from "../../../../../assets/img/chair9.png";
import chair10 from "../../../../../assets/img/chair10.png";
import chair11 from "../../../../../assets/img/chair11.png";

const products = [
  {
    img: chair8,
    title: "Cantilever chair",
    code: "Code - Y523201",
    price: 42.0,
  },
  {
    img: chair9,
    title: "Cantilever chair",
    code: "Code - Y523201",
    price: 42.0,
  },
  {
    img: chair10,
    title: "Cantilever chair",
    code: "Code - Y523201",
    price: 42.0,
  },
  {
    img: chair11,
    title: "Cantilever chair",
    code: "Code - Y523201",
    price: 42.0,
  },
  {
    img: chair10,
    title: "Cantilever chair",
    code: "Code - Y523201",
    price: 42.0,
  },
  {
    img: chair11,
    title: "Cantilever chair",
    code: "Code - Y523201",
    price: 42.0,
  },
];

export default function FeatureProducts() {
  return (
    <div className="md:w-8/12 mx-auto max-md:px-5">
      <h1 className="text-center text-2xl lg:text-4xl text-liberty font-bold">
        Feature Products
      </h1>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="pt-5 pb-10 lg:py-10"
        spaceBetween={40}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product, index) => {
          return (
            <SwiperSlide key={index}>
              <SingleFeature product={product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
