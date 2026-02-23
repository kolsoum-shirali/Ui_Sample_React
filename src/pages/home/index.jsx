import BannerSlider from './components/BannerSlider'
import HomeCategories from './components/HomeCategories'

const HomePage = () => {
  return (
    <div>
      <div className='container mx-auto grid grid-cols-12 gap-4 mt-10'>

        <div className='col-span-4 hidden md:block'>
          <HomeCategories />
        </div>
        <div className='col-span-12 md:col-span-8'>
          <BannerSlider />
        </div>
      </div>
    </div>
  )
};

export default HomePage;
