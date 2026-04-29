import HeaderSlider from "./components/headerSlider/HeaderSlider";
import LatestBlog from "./components/blog/LatestBlog";
import BrandList from "./components/brand/BrandList";
import Banner from "./components/banner/‌Banner"
const HomePage = () => {
  return (
    <div className="space-y-5 md:space-y-20">
      <HeaderSlider />
      <Banner/>
      <BrandList />
      <LatestBlog />
    </div>
  );
};

export default HomePage;
