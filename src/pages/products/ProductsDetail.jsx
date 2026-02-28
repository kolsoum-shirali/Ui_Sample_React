import ContactForm from "../../components/common/ContactForm";
import Rating from "../../components/common/Rating";
import BreadCrumbsBanner from "../../components/common/BreadCrumbsBanner";
import ProductComments from "./components/ProductComments";
import ProductsInfo from "./components/ProductsInfo";
import Product from "./components/Product";

const options = [
  { title: "خانه", link: "/" },
  { title: "فروشگاه", link: "" },
];

export default function ProductsDetail() {
  return (
    <div>
      <BreadCrumbsBanner options={options} caption="سینگل محصول" />
      <div className="container mx-auto p-5 mt-7 md:mt-16 space-y-10 lg:space-y-16">
        <Product />
        <ProductsInfo />
        <ProductComments />
        <div className="shadow-md rounded-md p-5 md:p-10 border border-gray-400/20">
          <h3 className="text-lg font-semibold mb-5">نظر خود را اضافه کنید</h3>
          <div className="flex justify-center mb-5">
            <Rating />
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
