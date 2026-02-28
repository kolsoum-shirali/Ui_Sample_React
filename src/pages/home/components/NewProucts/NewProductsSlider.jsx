import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import SingleProduct from "./SingleProduct";
import product1 from "../../../../assets/img/Products/1.webp";
import product2 from "../../../../assets/img/Products/2.jpg";
import product3 from "../../../../assets/img/Products/3.jpg";
import product4 from "../../../../assets/img/Products/4.jpg";
import product5 from "../../../../assets/img/Products/5.jpeg";
import product6 from "../../../../assets/img/Products/6.jpg";
import product7 from "../../../../assets/img/Products/7.jpg";
import product8 from "../../../../assets/img/Products/8.jpg";

const products = [
  { img: product1, title: "گل کلم", oldPrice: 55000, newPrice: 40000 },
  { img: product2, title: "سیب زمینی", oldPrice: 55000, newPrice: 40000 },
  { img: product3, title: "خیار", oldPrice: 55000, newPrice: 40000 },
  { img: product4, title: "بادمجان", oldPrice: 55000, newPrice: 40000 },
  { img: product5, title: "پیاز", oldPrice: 55000, newPrice: 40000 },
  { img: product6, title: "فلفل دلمه ای", oldPrice: 55000, newPrice: 40000 },
  { img: product7, title: "گوجه", oldPrice: 55000, newPrice: 40000 },
  { img: product8, title: "بامیه", oldPrice: 55000, newPrice: 40000 },
];

export default function NewProductsSlider() {
  return (
    <div>
      <h1 className="text-center text-2xl lg:text-4xl">محصولات تازه روز</h1>
      <div className="relative">
        <Swiper
          navigation={{
            nextEl: "#next-btn-product",
            prevEl: "#prev-btn-product",
          }}
          pagination={{
            type: "bullets",
            clickable: true,
          }}
          modules={[Navigation, Autoplay, Pagination]}
          className="mt-5 lg:mt-10"
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1440: {
              slidesPerView: 5,
            },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <SingleProduct product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="hidden xl:block">
          <i
            id="prev-btn-product"
            className="icon-right-open text-4xl absolute -right-16 top-1/2 z-1 text-green-600 cursor-pointer"
          ></i>
          <i
            id="next-btn-product"
            className="icon-left-open text-4xl absolute -left-16 top-1/2 z-1 text-green-600 cursor-pointer"
          ></i>
        </div>
      </div>
    </div>
  );
}
