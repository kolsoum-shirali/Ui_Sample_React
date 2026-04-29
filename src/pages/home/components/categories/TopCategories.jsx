import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import chair1 from "../../../../assets/img/chair1.png";
import chair2 from "../../../../assets/img/chair2.png";
import chair3 from "../../../../assets/img/chair3.png";
import chair4 from "../../../../assets/img/chair4.png";

import SingleTopCategory from "./SingleTopCategory";
const categories = [
  { img: chair1, price: "56.00" },
  { img: chair2, price: "56.00" },
  { img: chair3, price: "56.00" },
  { img: chair4, price: "56.00" },
  { img: chair1, price: "56.00" },
  { img: chair2, price: "56.00" },
];
export default function TopCategories() {
  return (
    <div className="md:w-8/12 mx-auto max-md:px-5">
      <h1 className="text-center text-2xl lg:text-4xl text-liberty font-bold">
        Top Categories
      </h1>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="pt-5 pb-10 lg:py-10"
        spaceBetween={5}
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
        {categories.map((cta, inx) => {
          return (
            <SwiperSlide key={inx}>
              <SingleTopCategory category={cta} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
