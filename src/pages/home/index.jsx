import HeaderSlider from "./components/headerSlider/HeaderSlider";
import LatestBlog from "./components/blog/LatestBlog";
import BrandList from "./components/brand/BrandList";
import Banner from "./components/banner/‌Banner";
import TopCategories from "./components/categories/TopCategories";
import TrendingProducts from "./components/products/trend/TrendingProducts";
import FeatureProducts from './components/products/feature/FeatureProducts'
const HomePage = () => {
  return (
    <div className="space-y-5 md:space-y-20">
      <HeaderSlider />
      <FeatureProducts/>
      <TrendingProducts />
      <TopCategories />
      <Banner />
      <BrandList />
      <LatestBlog />
    </div>
  );
};

export default HomePage;
