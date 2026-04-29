import Banner4 from "../../../../assets/img/banner4.png";
const options = [
  {
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    color: "bg-mainPink",
  },

  {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, molestias!",
    color: "bg-mediumBlue",
  },
  { desc: "Lorem ipsum dolor sit amet.", color: "bg-green-300" },
];
export default function UniqueBanner() {
  return (
    <div className="bg-lavender/50">
      <div className="md:w-8/12 mx-auto max-md:px-5 grid grid-cols-2 gap-10 pb-10 pt-5">
        <div className="col-span-2 md:col-span-1 flex justify-center md:justify-end">
          <div className="max-h-[500px] aspect-square flex justify-center overflow-hidden">
            <img
              src={Banner4}
              alt={Banner4 || "Banner Image4"}
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 gap-7 flex flex-col justify-center">
          <div className="text-2xl lg:text-3xl text-liberty font-bold space-y-2">
            <h1>Unique Features of Latest &</h1>
            <h1>Trending Products</h1>
          </div>
          <div className="leaing-5 lg:leading-9 lg:w-9/12">
            {options.map((opt, inx) => (
              <div key={inx} className="flex items-baseline gap-2">
                <span
                  className={`h-[10px] rounded-full aspect-square ${opt.color}`}
                ></span>
                <p className="text-gray-500/50">{opt.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-5">
            <button className="bg-mainPink text-white py-3 px-7 rounded-sm text-sm font-medium">
              Add To Cart
            </button>
            <div className="text-sm text-liberty">
              <p className="font-medium">B&B Italian Sofa</p>
              <p>
                <span>$</span>32.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
