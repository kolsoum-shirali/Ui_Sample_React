import BannerCard from './BannerCard';
import banner1 from '../../../assets/img/01.png';
import banner2 from '../../../assets/img/02.png';
import banner3 from '../../../assets/img/03.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const slidersInfo = [
  { title: 'امروز سبزیجات سالم و ارگانیک خود را آنلاین دریافت کنید.', img: banner1, color: 'bg-yellow-100' },
  { title: 'ظرف 24 ساعت سبزیجات ارگانیک به شما تحویل داده می شود.', img: banner2, color: 'bg-blue-100' },
  { title: 'ظرف 24 ساعت سبزیجات ارگانیک به شما تحویل داده می شود.', img: banner3, color: 'bg-emerald-100' },
];

export default function BannerSlider() {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="w-full h-full ">
      {slidersInfo.map((item, index) => {
        return (
          <SwiperSlide key={index} className="">
            <BannerCard bannerInfo={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}