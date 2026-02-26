import Banner from "../../../assets/img/single-banner.jpg";
import BreadCrumbs from "../../../components/common/BreadCrumbs";
const options = [
  { title: "خانه", link: "/" },
  { title: "درباره ما", link: "" },
];
export default function AboutBanner() {
  return (
    <div className="relative h-60 flex justify-center">
      <img src={Banner} alt="" className="w-full h-auto object-cover" />
      <div className="absolute z-1 inset-0 bg-green-500/50 flex flex-col text-white space-y-4 justify-center items-center">
        <h1 className="font-semibold text-3xl">درباره شرکت ما</h1>
        <BreadCrumbs options={options} />
      </div>
    </div>
  );
}
