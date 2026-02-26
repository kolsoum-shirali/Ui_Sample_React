import ErrorImg from "../../assets/img/error.png";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mt-20 p-5">
      <div className="flex flex-col justify-center items-center space-y-5">
        <h1 className="text-2xl lg:text-4xl font-semibold text-green-800">
          وجود ندارد | 404
        </h1>
        <img src={ErrorImg} alt="" />
        <p className="text-base lg:text-lg">
          معذرت میخوام، صفحه مورد نظر شما پیدا نشد.
        </p>
        <p className="text-gray-500 text-sm lg:text-base">
          به نظر می رسد چیزی در این مکان یافت نشد.
        </p>
        <Link
          to="/"
          className="bg-green-600 text-white p-3 md:px-8 rounded-md text-sm lg:text-base hover:bg-white hover:transition-colors hover:text-green-800 border-2 border-green-600"
        >
          برگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}
