import HeaderSlider from "./components/headerSlider/HeaderSlider";
import LatestBlog from "./components/blog/LatestBlog";
const HomePage = () => {
  return (
    <div className="space-y-5 md:space-y-20">
      <HeaderSlider />
      <LatestBlog />
    </div>
  );
};

export default HomePage;
