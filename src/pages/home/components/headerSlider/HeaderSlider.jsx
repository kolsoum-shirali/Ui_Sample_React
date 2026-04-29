import BannerCard from "./BannerCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function HeaderSlider() {
  return (
    <div>
      <Swiper pagination={true} modules={[Pagination]} className="">
        <SwiperSlide>
          <BannerCard />
        </SwiperSlide>
        <SwiperSlide>
          <BannerCard />
        </SwiperSlide>
        <SwiperSlide>
          <BannerCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
