import pic1 from "../../../../assets/img/pic-1.png";
import pic2 from "../../../../assets/img/pic-2.png";

export default function BannerCard() {
  return (
    <div className="bg-lavender/50">
      <div className="grid grid-cols-2">
        <div className="col-span-2 md:col-span-1">
          <div className="grid grid-cols-12 h-full">
            <div className="col-span-4 max-h-[350px]  pr-5 flex justify-end overflow-hidden">
              <img
                src={pic2}
                alt={pic2 || "Banner Image2"}
                className="max-w-full h-auto object-contain"
              />
            </div>
            <div className="col-span-8 h-full flex flex-col justify-center items-start space-y-4">
              <h6 className="text-mainPink font-semibold text-sm">
                Best Furniture For Your Castle...
              </h6>
              <h1 className="font-bold text-5xl">New Furniture Collection</h1>
              <h1 className="font-bold text-5xl">Trends in 2020</h1>
              <p className="text-sm text-gray-400 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                nisi natus amet accusamus repellendus facilis in!
              </p>
              <button className="bg-mainPink text-white px-7 py-3 rounded text-sm">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 flex justify-center">
          <div className="max-h-[700px] aspect-square flex justify-center overflow-hidden">
            <img
              src={pic1}
              alt={pic1 || "Banner Image1"}
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
