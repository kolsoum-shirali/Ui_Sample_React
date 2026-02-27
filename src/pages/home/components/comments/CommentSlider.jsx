import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";

import SingleComment from "./SingleComment";

const comments = [
  {
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    author: "مهتاب سلامی",
  },
  {
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است  چاپگرها و متون بلکه روزنامه و چاپگرها و متون بلکه روزنامه و  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    author: "مهتاب سلامی",
  },
  {
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    author: "مهتاب سلامی",
  },
  {
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است  چاپگرها و متون بلکه روزنامه و چاپگرها و متون بلکه روزنامه و  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    author: "مهتاب سلامی",
  },
  {
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    author: "مهتاب سلامی",
  },
  {
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها  چاپگرها و متون بلکه روزنامه و چاپگرها و متون بلکه روزنامه و چاپگرها و متون بلکه روزنامه و چاپگرها و متون بلکه روزنامه وو متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    author: "مهتاب سلامی",
  },
  {
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    author: "مهتاب سلامی",
  },
  {
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها  چاپگرها و متون بلکه روزنامه و چاپگرها و متون بلکه روزنامه و چاپگرها و متون بلکه روزنامه و چاپگرها و متون بلکه روزنامه وو متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    author: "مهتاب سلامی",
  },
];

export default function CommentSlider() {
  return (
    <div>
      <h1 className="text-center text-2xl lg:text-4xl">نظرات مشتری ها</h1>
      <div className="relative">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          navigation={{
            nextEl: "#next-btn-customer",
            prevEl: "#prev-btn-customer",
          }}
          pagination={{
            type: "bullets",
            clickable: true,
          }}
          modules={[Navigation, Autoplay, EffectCoverflow, Pagination]}
          className="mt-5 lg:mt-10"
          loop={true}
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
          }}
        >
          {comments.map((comment, index) => (
            <SwiperSlide key={index}>
              <SingleComment comment={comment} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="hidden xl:block">
          <i
            id="prev-btn-customer"
            className="icon-right-open text-4xl absolute -right-16 top-1/2 z-1 text-green-600 cursor-pointer"
          ></i>
          <i
            id="next-btn-customer"
            className="icon-left-open text-4xl absolute -left-16 top-1/2 z-1 text-green-600 cursor-pointer"
          ></i>
        </div>
      </div>
    </div>
  );
}
