import BannerSlider from "./components/slider/BannerSlider";
import HomeCategories from "./components/HomeCategories";
import Services from "./components/services/Services";
import BannerServices from "./components/services/BannerServices";
const HomePage = () => {
  return (
    <div className="container mx-auto space-y-5 md:space-y-20">
      <div className="grid grid-cols-12 gap-4 mt-10">
        <div className="col-span-4 hidden md:block">
          <HomeCategories />
        </div>
        <BannerSlider />
      </div>
      <Services />
      <BannerServices />
    </div>
  );
};

export default HomePage;
